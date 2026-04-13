import { Trophy, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { bonuses, weeklyTopList } from "@/data/bonuses";

const WeeklyTopList = () => {
  const topBonuses = weeklyTopList
    .map((id) => bonuses.find((b) => b.id === id)!)
    .filter(Boolean);

  return (
    <section className="py-12">
      <div className="flex items-center gap-3 mb-6">
        <Trophy className="text-accent" size={28} />
        <h2 className="text-2xl font-bold text-foreground">Veckans bästa bonusar</h2>
      </div>
      <div className="space-y-3">
        {topBonuses.map((bonus, index) => (
          <Link
            key={bonus.id}
            to={`/bonus/${bonus.id}`}
            className="flex items-center gap-4 bg-card border border-border rounded-xl p-4 card-hover"
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${
              index === 0 ? "gold-gradient text-accent-foreground" : 
              index === 1 ? "bg-muted text-muted-foreground" :
              index === 2 ? "bg-accent/30 text-accent" :
              "bg-secondary text-secondary-foreground"
            }`}>
              {index + 1}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-bold text-foreground">{bonus.operator}</span>
                <div className="flex items-center gap-0.5">
                  <Star size={12} className="fill-accent text-accent" />
                  <span className="text-xs text-muted-foreground">{bonus.rating}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground truncate">{bonus.title}</p>
            </div>
            {bonus.noWager && (
              <span className="hidden sm:inline text-xs bg-success/10 text-success px-2 py-1 rounded-full font-medium">
                Ingen oms.
              </span>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default WeeklyTopList;
