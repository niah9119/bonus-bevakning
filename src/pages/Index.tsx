import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";
import HeroSection from "@/components/HeroSection";
import CategoryFilter from "@/components/CategoryFilter";
import BonusCard from "@/components/BonusCard";
import WeeklyTopList from "@/components/WeeklyTopList";
import BonusGuideSection from "@/components/BonusGuideSection";
import Footer from "@/components/Footer";
import { bonuses, type BonusCategory } from "@/data/bonuses";

const validCategories: (BonusCategory | "all")[] = ["all", "casino", "odds", "freespins", "nodeposit"];

const Index = () => {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const catParam = searchParams.get("cat");
  const initialCategory = validCategories.includes(catParam as any) ? (catParam as BonusCategory) : "all";
  const [category, setCategory] = useState<BonusCategory | "all">(initialCategory);
  const [noWagerOnly, setNoWagerOnly] = useState(false);

  useEffect(() => {
    const c = searchParams.get("cat");
    if (c && validCategories.includes(c as any)) {
      setCategory(c as BonusCategory);
    } else if (!c) {
      setCategory("all");
    }
  }, [searchParams]);
  const [newCustomerOnly, setNewCustomerOnly] = useState(false);

  const filtered = useMemo(() => {
    return bonuses.filter((b) => {
      if (category !== "all" && b.category !== category) return false;
      if (noWagerOnly && !b.noWager) return false;
      if (newCustomerOnly && !b.isNewCustomer) return false;
      if (search) {
        const q = search.toLowerCase();
        if (!b.operator.toLowerCase().includes(q) && !b.title.toLowerCase().includes(q)) return false;
      }
      return true;
    });
  }, [category, noWagerOnly, newCustomerOnly, search]);

  return (
    <div className="min-h-screen flex flex-col pb-20 md:pb-0">
      <Navbar />
      <HeroSection />
      <main className="container mx-auto px-4 py-8 flex-1">
        <section className="mb-8">
          <CategoryFilter
            active={category}
            onChange={setCategory}
            noWagerOnly={noWagerOnly}
            onNoWagerChange={setNoWagerOnly}
            newCustomerOnly={newCustomerOnly}
            onNewCustomerChange={setNewCustomerOnly}
          />
        </section>

        <section className="mb-12">
          <h2 className="font-heading text-xl font-bold text-foreground mb-4">
            {category === "all" ? "Alla bonusar" : `${filtered.length} bonusar`}
            <span className="text-muted-foreground font-normal text-base ml-2">({filtered.length} st)</span>
          </h2>
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {filtered.map((bonus, i) => (
                <BonusCard key={bonus.id} bonus={bonus} rank={i + 1} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-card border border-border rounded-xl">
              <p className="text-muted-foreground">Inga bonusar matchar dina filter.</p>
            </div>
          )}
        </section>

        <WeeklyTopList />
        <BonusGuideSection />
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
};

export default Index;
