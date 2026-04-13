import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, Clock, Shield, CheckCircle } from "lucide-react";
import { bonuses } from "@/data/bonuses";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";
import Footer from "@/components/Footer";

const BonusDetail = () => {
  const { id } = useParams();
  const bonus = bonuses.find((b) => b.id === id);

  if (!bonus) {
    return (
      <div className="min-h-screen flex flex-col pb-20 md:pb-0">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-2">Bonus hittades inte</h1>
            <Button variant="outline" asChild>
              <Link to="/">Tillbaka till startsidan</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const stars = Array.from({ length: 5 }, (_, i) => i < Math.floor(bonus.rating));

  return (
    <div className="min-h-screen flex flex-col pb-20 md:pb-0">
      <Navbar />
      <div className="hero-gradient py-8">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-4 text-sm">
            <ArrowLeft size={16} />
            Tillbaka till bonusar
          </Link>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl bg-card/20 flex items-center justify-center text-primary-foreground font-bold text-2xl">
              {bonus.operatorLogo}
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-primary-foreground">{bonus.operator}</h1>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex gap-0.5">
                  {stars.map((filled, i) => (
                    <Star key={i} size={16} className={filled ? "fill-accent text-accent" : "text-primary-foreground/30"} />
                  ))}
                </div>
                <span className="text-primary-foreground/70 text-sm">{bonus.rating}/5</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-xl font-bold text-foreground mb-2">{bonus.title}</h2>
              <p className="text-muted-foreground mb-4">{bonus.description}</p>
              <div className="flex flex-wrap gap-2">
                {bonus.noWager && <Badge className="bg-success text-success-foreground">Utan omsättningskrav</Badge>}
                {bonus.isNewCustomer && <Badge variant="secondary">Nya kunder</Badge>}
                {bonus.featured && <Badge className="gold-gradient text-accent-foreground border-0">Populär</Badge>}
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle size={20} className="text-success" />
                Så aktiverar du bonusen
              </h3>
              <ol className="space-y-3">
                {bonus.details.howToActivate.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-foreground pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <Shield size={20} className="text-primary" />
                Villkor & regler
              </h3>
              <ul className="space-y-2">
                {bonus.details.terms.map((term, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-muted-foreground shrink-0" />
                    {term}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-card border border-border rounded-xl p-6 sticky top-20">
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Min. insättning</span>
                  <span className="font-semibold text-foreground">{bonus.details.minDeposit}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Max bonus</span>
                  <span className="font-semibold text-foreground">{bonus.details.maxBonus}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Omsättningskrav</span>
                  <span className="font-semibold text-foreground">{bonus.wagerRequirement}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground flex items-center gap-1"><Clock size={14} /> Utgår</span>
                  <span className="font-semibold text-foreground">{bonus.expiryDate}</span>
                </div>
              </div>
              <Button className="w-full gold-gradient text-accent-foreground font-bold text-lg py-6 hover:opacity-90 border-0" asChild>
                <a href={bonus.ctaUrl} target="_blank" rel="noopener noreferrer">Hämta bonus</a>
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-3">18+ | Regler & villkor gäller</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
};

export default BonusDetail;
