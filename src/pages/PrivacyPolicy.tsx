import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "Personuppgiftsansvarig",
    text: "BonusBevakning är personuppgiftsansvarig för dina uppgifter. Kontakta oss på info@bonusbevakning.se vid frågor.",
  },
  {
    title: "Vad vi samlar in och varför",
    text: "Vi samlar in ditt telefonnummer för att skapa ditt konto och skicka SMS-notiser om nya bonusar. Vi samlar även in teknisk data som IP-adress och cookies för att sajten ska fungera korrekt.",
  },
  {
    title: "Delning av uppgifter",
    text: "Vi säljer aldrig dina uppgifter. Data lagras säkert via Supabase inom EU. Vi delar inga uppgifter med spelbolagen vi listar.",
  },
  {
    title: "Dina rättigheter",
    text: "Enligt GDPR har du rätt att begära tillgång till, rättelse av eller radering av dina uppgifter. Du kan radera ditt konto när som helst under Mina inställningar. Kontakta oss på info@bonusbevakning.se för att utöva dina rättigheter eller lämna klagomål till Integritetsskyddsmyndigheten på imy.se.",
  },
  {
    title: "Affiliateupplysning",
    text: "BonusBevakning är en affiliatesida och kan tjäna provision när du klickar på en bonuslänk. Detta påverkar aldrig hur vi rangordnar bonusar.",
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col pb-20 md:pb-0">
      <Navbar />

      <section className="mx-4 mt-6 rounded-2xl px-6 py-12 text-center" style={{ backgroundColor: "#1E3A5F" }}>
        <h1 className="text-2xl md:text-4xl font-bold text-white mb-3">Integritetspolicy</h1>
        <p className="text-base md:text-lg font-medium" style={{ color: "#06B6D4" }}>
          Senast uppdaterad: april 2026
        </p>
      </section>

      <div className="container mx-auto px-4 py-10 max-w-3xl pb-28 md:pb-10">
        <div className="bg-card border border-border rounded-xl p-6 md:p-10 space-y-8">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-lg font-bold text-foreground mb-2">{s.title}</h2>
              <p className="text-muted-foreground leading-relaxed text-sm">{s.text}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
      <BottomNav />
    </div>
  );
};

export default PrivacyPolicy;
