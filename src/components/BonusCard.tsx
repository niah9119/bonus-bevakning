import { Star, ExternalLink } from "lucide-react";
import type { Bonus } from "@/data/bonuses";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import BonusModal from "@/components/BonusModal";

const operatorColors: Record<string, string> = {
  U: "bg-[#4F46E5]",
  L: "bg-[#0EA5E9]",
  B: "bg-[#10B981]",
  S: "bg-[#c9a84c]",
  C: "bg-[#4F46E5]",
  M: "bg-[#0EA5E9]",
  R: "bg-[#10B981]",
  "3": "bg-[#c9a84c]",
};

const operatorGradients: Record<string, string> = {
  U: "from-[#4F46E5] to-[#3730A3]",
  L: "from-[#0EA5E9] to-[#0284C7]",
  B: "from-[#10B981] to-[#059669]",
  S: "from-[#c9a84c] to-[#a8893d]",
  C: "from-[#4F46E5] to-[#3730A3]",
  M: "from-[#0EA5E9] to-[#0284C7]",
  R: "from-[#10B981] to-[#059669]",
  "3": "from-[#c9a84c] to-[#a8893d]",
};

const BonusCard = ({ bonus, rank }: { bonus: Bonus; rank?: number }) => {
  const [showModal, setShowModal] = useState(false);
  const stars = Array.from({ length: 5 }, (_, i) => i < Math.floor(bonus.rating));

  // Extract bullet points from details
  const highlights = bonus.details.terms.slice(0, 3);

  return (
    <>
      <div
        className="bg-card rounded-xl border border-border overflow-hidden card-hover cursor-pointer flex flex-col sm:flex-row"
        onClick={() => setShowModal(true)}
      >
        {/* Left: Logo area */}
        <div
          className={`relative flex items-center justify-center bg-gradient-to-br ${operatorGradients[bonus.operatorLogo] || "from-primary to-primary"} w-full sm:w-48 lg:w-56 h-[100px] sm:h-auto shrink-0 overflow-hidden`}
        >
          <span className="text-white font-extrabold text-5xl sm:text-4xl lg:text-5xl tracking-tight opacity-90 select-none">
            {bonus.operatorLogo}
          </span>
        </div>

        {/* Right: Content */}
        <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between min-w-0">
          <div>
            {/* Header row */}
            <div className="flex items-start justify-between gap-2 mb-1">
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <h3 className="font-bold text-foreground text-base truncate">{bonus.operator}</h3>
                  <div className="flex items-center gap-0.5 shrink-0">
                    {stars.map((filled, i) => (
                      <Star
                        key={i}
                        size={12}
                        className={filled ? "fill-accent text-accent" : "text-muted"}
                      />
                    ))}
                    <span className="text-[11px] text-muted-foreground ml-0.5">{bonus.rating}</span>
                  </div>
                </div>
                <button
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowModal(true);
                  }}
                >
                  Recension
                </button>
              </div>
            </div>

            {/* Bonus title */}
            <h4 className="font-semibold text-foreground text-sm sm:text-base mt-2 mb-2 leading-snug" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>
              {bonus.title}
            </h4>

            {/* Highlights as bullet list */}
            <ul className="space-y-1 mb-3">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <span className="text-accent mt-0.5 shrink-0">•</span>
                  <span className="leading-tight">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <Button
              className="gold-gradient text-accent-foreground font-semibold hover:opacity-90 border-0 px-6"
              onClick={(e) => {
                e.stopPropagation();
                window.open(bonus.ctaUrl, "_blank");
              }}
            >
              Hämta bonus
              <ExternalLink size={14} className="ml-1.5" />
            </Button>
            <span className="text-[10px] text-muted-foreground leading-tight hidden sm:block">
              Omsättning: {bonus.wagerRequirement}
            </span>
          </div>
        </div>
      </div>

      {showModal && (
        <BonusModal bonus={bonus} onClose={() => setShowModal(false)} />
      )}
    </>
  );
};

export default BonusCard;
