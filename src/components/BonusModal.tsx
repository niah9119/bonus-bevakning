import { X, Star, Clock, CreditCard, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Bonus } from "@/data/bonuses";
import { useEffect, useState } from "react";

const operatorBgColors: Record<string, string> = {
  U: "#4F46E5",
  L: "#0EA5E9",
  B: "#10B981",
  S: "#c9a84c",
  C: "#4F46E5",
  M: "#0EA5E9",
  R: "#10B981",
  "3": "#c9a84c",
};

interface BonusModalProps {
  bonus: Bonus;
  onClose: () => void;
}

const BonusModal = ({ bonus, onClose }: BonusModalProps) => {
  const bgColor = operatorBgColors[bonus.operatorLogo] || "#1E3A5F";
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
    document.body.style.overflow = "hidden";
    document.body.setAttribute("data-modal-open", "true");
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      document.body.removeAttribute("data-modal-open");
      window.removeEventListener("keydown", handleKey);
    };
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 300);
  };

  const daysLeft = Math.max(
    0,
    Math.ceil((new Date(bonus.expiryDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24))
  );

  return (
    <>
      {/* Desktop overlay (1024px+) */}
      <div
        className="fixed inset-0 z-50 hidden lg:flex items-center justify-center"
        onClick={handleClose}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
          style={{ opacity: visible ? 1 : 0 }}
        />
        <div
          className="relative z-10 bg-card rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl border border-border transition-all duration-300"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "scale(1) translateY(0)" : "scale(0.95) translateY(20px)",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <ModalContent bonus={bonus} bgColor={bgColor} daysLeft={daysLeft} onClose={handleClose} />
        </div>
      </div>

      {/* Mobile/Tablet fullscreen (<1024px) */}
      <div
        className="fixed inset-0 z-[60] lg:hidden flex flex-col bg-card transition-transform duration-300"
        style={{ transform: visible ? "translateY(0)" : "translateY(100%)" }}
      >
        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto">
          <MobileModalContent bonus={bonus} bgColor={bgColor} daysLeft={daysLeft} />
        </div>

        {/* Fixed bottom CTA with close link */}
        <div className="flex-shrink-0 bg-card px-4 pt-3 pb-4 shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
          <button
            onClick={handleClose}
            className="w-full flex items-center justify-center gap-1 mb-3"
            style={{ color: "#6B7280", fontSize: "13px" }}
          >
            <X size={12} />
            <span>Stäng</span>
          </button>
          <Button
            className="w-full h-12 text-base font-bold rounded-xl border-0"
            style={{ backgroundColor: "#c9a84c", color: "white" }}
            asChild
          >
            <a href={bonus.ctaUrl} target="_blank" rel="noopener noreferrer">
              Hämta bonus
            </a>
          </Button>
        </div>
      </div>
    </>
  );
};

function MobileModalContent({
  bonus,
  bgColor,
  daysLeft,
}: {
  bonus: Bonus;
  bgColor: string;
  daysLeft: number;
}) {
  const stars = Array.from({ length: 5 }, (_, i) => i < Math.floor(bonus.rating));

  return (
    <div>
      {/* Banner - max 120px */}
      <div
        className="relative flex flex-col items-center justify-center"
        style={{ backgroundColor: bgColor, height: "120px" }}
      >
        <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center text-white font-bold text-2xl">
          {bonus.operatorLogo}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Operator name + rating */}
        <div className="text-center mb-3">
          <h3 className="text-base font-bold text-foreground">{bonus.operator}</h3>
          <div className="flex items-center justify-center gap-0.5 mt-1">
            {stars.map((filled, i) => (
              <Star
                key={i}
                size={14}
                className={filled ? "fill-accent text-accent" : "text-muted"}
              />
            ))}
            <span className="text-xs text-muted-foreground ml-1">{bonus.rating}</span>
          </div>
        </div>

        {/* Title - 16px */}
        <h2 className="text-base font-extrabold text-foreground text-center mb-1">
          {bonus.title}
        </h2>

        {/* Subtitle - 13px cyan */}
        <p className="text-center font-semibold mb-3" style={{ color: "#06B6D4", fontSize: "13px" }}>
          {bonus.isNewCustomer ? "Endast för nya kunder!" : "Tillgänglig för alla kunder!"}
        </p>

        {/* Description */}
        <p className="text-muted-foreground text-sm text-center mb-4">{bonus.description}</p>

        {/* How to activate - compact */}
        <div className="mb-4">
          <h4 className="font-semibold text-foreground text-sm mb-2">Så aktiverar du bonusen</h4>
          <ol className="space-y-1.5">
            {bonus.details.howToActivate.map((step, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span
                  className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{ backgroundColor: "#06B6D4" }}
                >
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        {/* Terms grid - 2x2 */}
        <div className="bg-muted/50 rounded-xl p-3 mb-4">
          <h4 className="font-semibold text-foreground text-sm mb-2">Villkor</h4>
          <div className="grid grid-cols-2 gap-2">
            <TermItem icon={<CreditCard size={14} />} label="Omsättningskrav" value={bonus.wagerRequirement} />
            <TermItem icon={<CreditCard size={14} />} label="Minsta insättning" value={bonus.details.minDeposit} />
            <TermItem icon={<Calendar size={14} />} label="Giltighetstid" value={`${daysLeft} dagar kvar`} />
            <TermItem icon={<Users size={14} />} label="Vem" value={bonus.isNewCustomer ? "Nya kunder" : "Alla kunder"} />
          </div>
        </div>

        {/* Additional terms - 12px */}
        <div className="mb-2">
          <ul className="space-y-1">
            {bonus.details.terms.map((term, i) => (
              <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                <span className="text-muted-foreground/50 mt-0.5">•</span>
                {term}
              </li>
            ))}
          </ul>
        </div>

        {/* Expiry */}
        <div className="flex items-center justify-center gap-1.5 mt-2 mb-2">
          <Clock size={12} className="text-muted-foreground" />
          <p className="text-xs text-muted-foreground">
            Giltig i {daysLeft} dagar – utgår {bonus.expiryDate}
          </p>
        </div>
      </div>
    </div>
  );
}

function ModalContent({
  bonus,
  bgColor,
  daysLeft,
  onClose,
}: {
  bonus: Bonus;
  bgColor: string;
  daysLeft: number;
  onClose: () => void;
}) {
  const stars = Array.from({ length: 5 }, (_, i) => i < Math.floor(bonus.rating));

  return (
    <div>
      {/* Banner */}
      <div
        className="relative flex flex-col items-center justify-center py-10 rounded-t-2xl"
        style={{ backgroundColor: bgColor }}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-colors"
          aria-label="Stäng"
        >
          <X size={18} />
        </button>
        <div className="w-20 h-20 rounded-2xl bg-white/20 flex items-center justify-center text-white font-bold text-3xl">
          {bonus.operatorLogo}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="text-center mb-4">
          <h3 className="text-lg font-bold text-foreground">{bonus.operator}</h3>
          <div className="flex items-center justify-center gap-0.5 mt-1">
            {stars.map((filled, i) => (
              <Star
                key={i}
                size={16}
                className={filled ? "fill-accent text-accent" : "text-muted"}
              />
            ))}
            <span className="text-sm text-muted-foreground ml-1">{bonus.rating}</span>
          </div>
        </div>

        <h2 className="text-xl font-extrabold text-foreground text-center mb-1">
          {bonus.title}
        </h2>

        <p className="text-center text-sm font-semibold mb-4" style={{ color: "#06B6D4" }}>
          {bonus.isNewCustomer ? "Endast för nya kunder!" : "Tillgänglig för alla kunder!"}
        </p>

        <p className="text-muted-foreground text-sm text-center mb-6">{bonus.description}</p>

        <div className="mb-6">
          <h4 className="font-semibold text-foreground text-sm mb-3">Så aktiverar du bonusen</h4>
          <ol className="space-y-2">
            {bonus.details.howToActivate.map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{ backgroundColor: "#06B6D4" }}
                >
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        <div className="bg-muted/50 rounded-xl p-4 mb-6">
          <h4 className="font-semibold text-foreground text-sm mb-3">Villkor</h4>
          <div className="grid grid-cols-2 gap-3">
            <TermItem icon={<CreditCard size={16} />} label="Omsättningskrav" value={bonus.wagerRequirement} />
            <TermItem icon={<CreditCard size={16} />} label="Minsta insättning" value={bonus.details.minDeposit} />
            <TermItem icon={<Calendar size={16} />} label="Giltighetstid" value={`${daysLeft} dagar kvar`} />
            <TermItem icon={<Users size={16} />} label="Vem" value={bonus.isNewCustomer ? "Nya kunder" : "Alla kunder"} />
          </div>
        </div>

        <div className="mb-6">
          <ul className="space-y-1">
            {bonus.details.terms.map((term, i) => (
              <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                <span className="text-muted-foreground/50 mt-0.5">•</span>
                {term}
              </li>
            ))}
          </ul>
        </div>

        <Button
          className="w-full py-6 text-lg font-bold rounded-xl border-0"
          style={{ backgroundColor: "#c9a84c", color: "white" }}
          asChild
        >
          <a href={bonus.ctaUrl} target="_blank" rel="noopener noreferrer">
            Hämta bonus
          </a>
        </Button>

        <div className="flex items-center justify-center gap-1.5 mt-3">
          <Clock size={14} className="text-muted-foreground" />
          <p className="text-xs text-muted-foreground">
            Giltig i {daysLeft} dagar – utgår {bonus.expiryDate}
          </p>
        </div>
      </div>
    </div>
  );
}

function TermItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-2">
      <div className="text-muted-foreground mt-0.5">{icon}</div>
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-sm font-semibold text-foreground">{value}</p>
      </div>
    </div>
  );
}

export default BonusModal;
