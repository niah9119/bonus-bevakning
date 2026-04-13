import { Link, useLocation } from "react-router-dom";
import { Home, Sparkles, TrendingUp, User } from "lucide-react";

const tabs = [
  { label: "Hem", icon: Home, path: "/" },
  { label: "Casinobonus", icon: Sparkles, path: "/?cat=casino" },
  { label: "Oddsbonus", icon: TrendingUp, path: "/?cat=odds" },
  { label: "Konto", icon: User, path: "/notiser" },
];

const BottomNav = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/" && !location.search;
    if (path.startsWith("/?")) return location.search === path.slice(1);
    return location.pathname === path;
  };

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-[0_-2px_10px_rgba(0,0,0,0.08)] [[data-modal-open]_&]:hidden">
      <div className="flex justify-around items-stretch">
        {tabs.map((tab) => {
          const active = isActive(tab.path);
          return (
            <Link
              key={tab.label}
              to={tab.path}
              className={`flex flex-col items-center justify-center flex-1 min-h-[56px] py-2 gap-0.5 transition-colors ${
                active
                  ? "text-primary border-t-2 border-primary"
                  : "text-muted-foreground"
              }`}
            >
              <tab.icon size={22} strokeWidth={active ? 2.5 : 2} />
              <span className="text-[11px] font-medium leading-tight">{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
