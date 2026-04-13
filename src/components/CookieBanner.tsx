import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookies_accepted");
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookies_accepted", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-14 md:bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-card border-t border-border shadow-lg">
      <div className="container mx-auto max-w-4xl flex flex-col sm:flex-row items-center gap-4">
        <p className="text-sm text-muted-foreground text-center sm:text-left flex-1">
          Vi använder cookies för att förbättra din upplevelse. Genom att fortsätta godkänner du vår{" "}
          <Link to="/integritetspolicy" className="underline text-[#06B6D4] hover:text-[#06B6D4]/80">
            integritetspolicy
          </Link>
          .
        </p>
        <Button onClick={accept} className="bg-[#c9a84c] hover:bg-[#c9a84c]/90 text-white shrink-0">
          Jag förstår
        </Button>
      </div>
    </div>
  );
};

export default CookieBanner;
