import { Link, useLocation, useSearchParams } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const desktopLinks = [
  { label: "Hem", to: "/", match: (p: string, s: string) => p === "/" && !s },
  { label: "Casinobonus", to: "/?cat=casino", match: (_p: string, s: string) => s === "?cat=casino" },
  { label: "Oddsbonus", to: "/?cat=odds", match: (_p: string, s: string) => s === "?cat=odds" },
  { label: "Topplista", to: "/topplista", match: (p: string) => p === "/topplista" },
  { label: "Konto", to: "/notiser", match: (p: string) => p === "/notiser" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Desktop / tablet navbar */}
      <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm hidden md:block">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 rounded-lg gold-gradient flex items-center justify-center font-bold text-accent-foreground text-sm">
              BB
            </div>
            <span className="font-heading text-xl font-bold text-foreground">
              Bonus<span className="text-accent">Bevakning</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {desktopLinks.map((link) => {
              const active = link.match(location.pathname, location.search);
              return (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`text-sm font-heading font-semibold transition-colors border-b-2 pb-0.5 ${
                    active
                      ? "text-foreground border-primary"
                      : "text-muted-foreground border-transparent hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* iPad (md–lg): compact nav links */}
          <div className="flex lg:hidden items-center gap-3">
            {desktopLinks.map((link) => {
              const active = link.match(location.pathname, location.search);
              return (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`text-xs font-medium transition-colors border-b-2 pb-0.5 whitespace-nowrap ${
                    active
                      ? "text-foreground border-primary"
                      : "text-muted-foreground border-transparent hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Button variant="outline" size="sm" className="text-xs px-2 lg:text-sm lg:px-3" asChild>
              <Link to="/logga-in">Logga in</Link>
            </Button>
            <Button size="sm" className="gold-gradient text-accent-foreground font-semibold hover:opacity-90 border-0 text-xs px-2 lg:text-sm lg:px-3" asChild>
              <Link to="/skapa-konto">Kom igång</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile header */}
      <header className="sticky top-0 z-50 md:hidden bg-card/95 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.08)] border-b border-border">
        <div className="flex items-center justify-between px-4 h-12">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md gold-gradient flex items-center justify-center font-bold text-accent-foreground text-xs">
              BB
            </div>
            <span className="font-heading text-lg font-bold text-foreground">
              Bonus<span className="text-accent">Bevakning</span>
            </span>
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-10 h-10 flex items-center justify-center text-foreground"
            aria-label="Meny"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Slide-down menu */}
        <div
          className={`overflow-hidden transition-all duration-200 ease-in-out ${
            menuOpen ? "max-h-64" : "max-h-0"
          }`}
        >
          <div className="px-4 pb-4 pt-1 space-y-1 border-t border-border">
            {[
              { label: "Om oss", to: "/om-oss" },
              { label: "Ansvarigt spelande", to: "/ansvarigt-spelande" },
              { label: "Villkor", to: "/villkor" },
              { label: "Kontakt", to: "/kontakt" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className="block py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
