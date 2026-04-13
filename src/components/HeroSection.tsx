import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = phone.replace(/\D/g, "");
    if (cleaned.length >= 7) {
      navigate(`/skapa-konto?phone=${encodeURIComponent(cleaned)}`);
    } else {
      navigate("/skapa-konto");
    }
  };

  return (
    <div className="container mx-auto px-4 mt-6 md:mt-8">
      {/* Hero */}
      <section className="relative rounded-2xl overflow-hidden min-h-[360px]" style={{ backgroundColor: "#1E3A5F" }}>
        {/* Mobile/tablet: full background image with overlay */}
        <div className="lg:hidden absolute inset-0">
          <img src={heroBg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(30,58,95,0.75)" }} />
        </div>

        {/* Desktop: image on right with diagonal gradient */}
        <div className="hidden lg:block absolute inset-0">
          <img src={heroBg} alt="" className="h-full w-full object-cover object-center" />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, #1E3A5F 0%, #1E3A5F 35%, rgba(30,58,95,0.6) 55%, transparent 75%)",
            }}
          />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row min-h-[360px]">
          {/* Left – text & form */}
          <div className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-6 py-10 md:px-12 lg:py-14 lg:max-w-[55%]">
            <span
              className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 text-white"
              style={{ backgroundColor: "#06B6D4" }}
            >
              Bli medlem gratis
            </span>
            <h1 className="font-heading text-[28px] lg:text-[36px] font-extrabold text-white leading-tight mb-3">
              Kom igång direkt!
            </h1>
            <p className="text-sm lg:text-base mb-6 max-w-md lg:max-w-lg" style={{ color: "rgba(255,255,255,0.8)" }}>
              Skapa ett konto på under 30 sekunder och få SMS-notiser direkt när en ny bonus dyker upp – och spela alltid med boostade odds.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row lg:flex-row gap-3 w-full max-w-md mb-4">
              <div className="flex items-center flex-1 bg-white rounded-xl overflow-hidden h-12">
                <span className="flex items-center gap-1.5 pl-3 pr-1 text-sm text-gray-500 select-none shrink-0">
                  <span className="text-lg leading-none">🇸🇪</span> +46
                </span>
                <input
                  type="tel"
                  placeholder="7X XXX XX XX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="flex-1 h-12 px-2 text-base text-gray-900 outline-none bg-transparent"
                />
              </div>
              <Button
                type="submit"
                className="h-12 px-6 text-base font-bold rounded-xl shrink-0 w-full sm:w-auto lg:w-auto"
                style={{ backgroundColor: "#c9a84c", color: "#fff" }}
              >
                Kom igång
              </Button>
            </form>

            <p className="text-xs flex flex-wrap justify-center lg:justify-start gap-x-4 gap-y-1 mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>
              <span style={{ color: "#06B6D4" }}>✓</span>{" "}
              <span>Gratis</span>
              <span style={{ color: "#06B6D4" }}>✓</span>{" "}
              <span>Endast SMS</span>
              <span style={{ color: "#06B6D4" }}>✓</span>{" "}
              <span>Avregistrera dig när som helst</span>
            </p>

            <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
              🔔 248 nya medlemmar den senaste veckan
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HeroSection;
