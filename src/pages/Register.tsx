import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Check, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";

type Step = 1 | 2 | 3 | 4;

const stepLabels = ["Mobilnummer", "Godkänn", "Klart"];

// Map internal 4-step flow to 3 visual steps
const visualStep = (s: Step): number => (s <= 2 ? 1 : s === 3 ? 2 : 3);

const Register = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>(1);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isAdult, setIsAdult] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [wantNotifications, setWantNotifications] = useState(false);
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) value = value.slice(-1);
    if (value && !/^\d$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) otpRefs.current[index + 1]?.focus();
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handleOtpPaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    const newOtp = [...otp];
    for (let i = 0; i < 6; i++) newOtp[i] = pasted[i] || "";
    setOtp(newOtp);
    const nextEmpty = newOtp.findIndex((v) => !v);
    otpRefs.current[nextEmpty === -1 ? 5 : nextEmpty]?.focus();
  };

  const canCreateAccount = isAdult && acceptTerms;
  const otpFilled = otp.every((d) => d !== "");

  const StepIndicator = () => (
    <div className="flex items-center justify-center w-full max-w-md mx-auto py-8 px-4">
      {stepLabels.map((label, i) => {
        const vStep = i + 1;
        const current = visualStep(step);
        const isCompleted = current > vStep;
        const isActive = current === vStep;

        return (
          <div key={i} className="flex items-center flex-1 last:flex-initial">
            <div className="flex flex-col items-center gap-1.5">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 shrink-0"
                style={
                  isCompleted
                    ? { backgroundColor: "#06B6D4", color: "white" }
                    : isActive
                    ? { backgroundColor: "#1E3A5F", color: "white", boxShadow: "0 0 0 3px rgba(6, 182, 212, 0.4)" }
                    : { backgroundColor: "rgba(148,163,184,0.2)", color: "rgba(148,163,184,0.6)" }
                }
              >
                {isCompleted ? <Check size={18} strokeWidth={3} /> : vStep}
              </div>
              <span
                className="text-xs font-medium whitespace-nowrap"
                style={{
                  color: isCompleted ? "#06B6D4" : isActive ? "#1E3A5F" : "rgba(148,163,184,0.6)",
                }}
              >
                {label}
              </span>
            </div>
            {i < 2 && (
              <div
                className="flex-1 h-0.5 mx-2 rounded-full transition-all duration-300 self-start mt-[18px]"
                style={{
                  backgroundColor: isCompleted ? "#06B6D4" : "rgba(148,163,184,0.2)",
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );

  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"forward" | "back">("forward");

  const goToStep = (next: Step) => {
    setDirection(next > step ? "forward" : "back");
    setAnimating(true);
    setTimeout(() => {
      setStep(next);
      setAnimating(false);
    }, 200);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="flex flex-col items-center">
            <p className="text-muted-foreground text-sm text-center mb-6">
              Fyll i ditt mobilnummer så skickar vi en engångskod
            </p>
            <div className="w-full mb-6">
              <div className="flex items-center gap-2 bg-muted/50 rounded-xl p-1.5 border border-border focus-within:ring-2 focus-within:ring-[#06B6D4] focus-within:border-transparent transition-all">
                <div className="flex items-center gap-1.5 pl-3 pr-1 text-sm font-medium text-foreground shrink-0">
                  <span className="text-lg">🇸🇪</span>
                  <span>+46</span>
                </div>
                <Input
                  type="tel"
                  placeholder="70 123 45 67"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/[^\d\s]/g, ""))}
                  className="border-0 bg-transparent text-lg focus-visible:ring-0 focus-visible:ring-offset-0 h-12"
                  autoFocus
                />
              </div>
            </div>
            <Button
              onClick={() => goToStep(2)}
              disabled={phone.replace(/\s/g, "").length < 7}
              className="w-full h-12 text-base font-bold rounded-xl border-0 disabled:opacity-40"
              style={{ backgroundColor: "#c9a84c", color: "white" }}
            >
              Skicka kod
            </Button>
          </div>
        );

      case 2:
        return (
          <div className="flex flex-col items-center">
            <p className="text-muted-foreground text-sm text-center mb-6">
              Vi skickade en 6-siffrig kod till +46 {phone}
            </p>
            <div className="flex gap-2 mb-4" onPaste={handleOtpPaste}>
              {otp.map((digit, i) => (
                <input
                  key={i}
                  ref={(el) => { otpRefs.current[i] = el; }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(i, e.target.value)}
                  onKeyDown={(e) => handleOtpKeyDown(i, e)}
                  className="w-12 h-14 text-center text-2xl font-bold rounded-xl border border-border bg-muted/50 text-foreground focus:outline-none focus:ring-2 focus:ring-[#06B6D4] focus:border-transparent transition-all"
                  autoFocus={i === 0}
                />
              ))}
            </div>
            <button
              onClick={() => {}}
              className="text-sm font-medium mb-6 hover:underline"
              style={{ color: "#06B6D4" }}
            >
              Skicka koden igen
            </button>
            <Button
              onClick={() => goToStep(3)}
              disabled={!otpFilled}
              className="w-full h-12 text-base font-bold rounded-xl border-0 disabled:opacity-40"
              style={{ backgroundColor: "#c9a84c", color: "white" }}
            >
              Verifiera
            </Button>
          </div>
        );

      case 3:
        return (
          <div className="flex flex-col items-center">
            <p className="text-muted-foreground text-sm text-center mb-6">
              Bekräfta följande innan vi skapar ditt konto
            </p>
            <div className="w-full space-y-4 mb-6">
              <label className="flex items-start gap-3 cursor-pointer">
                <Checkbox checked={isAdult} onCheckedChange={(v) => setIsAdult(v === true)} className="mt-0.5" />
                <span className="text-sm text-foreground">
                  Jag bekräftar att jag är 18 år eller äldre <span className="text-destructive">*</span>
                </span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <Checkbox checked={acceptTerms} onCheckedChange={(v) => setAcceptTerms(v === true)} className="mt-0.5" />
                <span className="text-sm text-foreground">
                  Jag godkänner{" "}
                  <a href="/villkor" className="underline" style={{ color: "#06B6D4" }}>användarvillkoren</a>{" "}och{" "}
                  <a href="/integritetspolicy" className="underline" style={{ color: "#06B6D4" }}>integritetspolicyn</a>{" "}
                  <span className="text-destructive">*</span>
                </span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <Checkbox checked={wantNotifications} onCheckedChange={(v) => setWantNotifications(v === true)} className="mt-0.5" />
                <span className="text-sm text-muted-foreground">Jag vill ha notiser om nya bonusar</span>
              </label>
            </div>
            <p className="text-xs text-muted-foreground text-center mb-6">
              Du kan avregistrera dig och radera ditt konto när som helst under Mina inställningar.
            </p>
            <Button
              onClick={() => goToStep(4)}
              disabled={!canCreateAccount}
              className="w-full h-12 text-base font-bold rounded-xl border-0 disabled:opacity-40 disabled:bg-muted disabled:text-muted-foreground"
              style={canCreateAccount ? { backgroundColor: "#c9a84c", color: "white" } : {}}
            >
              Skapa konto
            </Button>
          </div>
        );

      case 4:
        return (
          <div className="flex flex-col items-center py-4">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
              style={{ backgroundColor: "rgba(6, 182, 212, 0.15)" }}
            >
              <CheckCircle2 size={44} style={{ color: "#06B6D4" }} />
            </div>
            <h2 className="text-2xl font-extrabold text-foreground mb-2 text-center">
              Välkommen till BonusBevakning!
            </h2>
            <p className="text-muted-foreground text-sm text-center mb-8 max-w-xs">
              Ditt konto är skapat. Du får nu notiser när nya bonusar dyker upp.
            </p>
            <Button
              onClick={() => navigate("/")}
              className="w-full h-12 text-base font-bold rounded-xl border-0"
              style={{ backgroundColor: "#c9a84c", color: "white" }}
            >
              Utforska bonusar
            </Button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col pb-20 md:pb-0">
      <Navbar />

      {/* Hero */}
      <section className="container mx-auto px-4 mt-6 md:mt-8">
        <div
          className="rounded-2xl py-12 md:py-16 px-4 text-center"
          style={{ backgroundColor: "#1E3A5F" }}
        >
          <h1 className="font-heading text-2xl md:text-4xl font-extrabold text-white mb-3 leading-tight">
            Du kommer aldrig missa en bonus igen
          </h1>
          <p className="text-base md:text-lg font-semibold" style={{ color: "#06B6D4" }}>
            Oddsen är alltid på din sida med BonusBevakning
          </p>
        </div>
      </section>

      {/* Step indicator */}
      <StepIndicator />

      {/* Form card */}
      <main className="container mx-auto px-4 pb-12 flex justify-center">
        <div className="w-full max-w-md bg-card border border-border rounded-2xl shadow-lg p-6 md:p-8 overflow-hidden">
          <div
            key={step}
            className={`transition-all duration-300 ease-out ${
              animating
                ? "opacity-0 translate-x-4"
                : "opacity-100 translate-x-0"
            }`}
            style={{
              transform: animating
                ? direction === "forward"
                  ? "translateX(20px)"
                  : "translateX(-20px)"
                : "translateX(0)",
            }}
          >
            {renderStep()}
          </div>
        </div>
      </main>

      <div className="flex-1" />
      <Footer />
      <BottomNav />
    </div>
  );
};

export default Register;
