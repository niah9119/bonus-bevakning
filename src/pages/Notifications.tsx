import { Bell, BellOff } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";
import Footer from "@/components/Footer";
import { categories } from "@/data/bonuses";
import { Switch } from "@/components/ui/switch";

const Notifications = () => {
  const [notifs, setNotifs] = useState<Record<string, boolean>>({
    casino: true,
    odds: false,
    freespins: true,
    nodeposit: true,
  });

  const toggle = (id: string) => setNotifs((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="min-h-screen flex flex-col pb-20 md:pb-0">
      <Navbar />
      <main className="container mx-auto px-4 py-8 flex-1 max-w-2xl">
        <div className="flex items-center gap-3 mb-6">
          <Bell className="text-accent" size={28} />
          <h1 className="font-heading text-2xl font-bold text-foreground">Mina notiser</h1>
        </div>

        <p className="text-muted-foreground mb-8">
          Välj vilka bonuskategorier du vill få notiser om. Du behöver vara inloggad för att aktivera notiser.
        </p>

        <div className="space-y-3 mb-10">
          {categories.filter((c) => c.id !== "all").map((cat) => (
            <div key={cat.id} className="flex items-center justify-between bg-card border border-border rounded-xl p-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{cat.icon}</span>
                <div>
                  <span className="font-semibold text-foreground">{cat.label}</span>
                  <p className="text-xs text-muted-foreground">
                    Få besked om nya {cat.label.toLowerCase()}-bonusar
                  </p>
                </div>
              </div>
              <Switch checked={notifs[cat.id] ?? false} onCheckedChange={() => toggle(cat.id)} />
            </div>
          ))}
        </div>

        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="font-bold text-foreground mb-4">Så ser en notis ut</h3>
          <div className="bg-secondary rounded-lg p-4 flex items-start gap-3">
            <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center shrink-0">
              <Bell size={18} className="text-accent-foreground" />
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm">Ny bonus: LeoVegas</p>
              <p className="text-sm text-muted-foreground">50 free spins utan insättning – begränsat erbjudande! Hämta din bonus nu.</p>
              <span className="text-xs text-muted-foreground mt-1 block">Just nu</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
};

export default Notifications;
