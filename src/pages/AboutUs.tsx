import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";
import Footer from "@/components/Footer";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col pb-20 md:pb-0">
      <Navbar />

      {/* Hero */}
      <section className="mx-4 mt-6 rounded-2xl px-6 py-12 text-center" style={{ backgroundColor: "#1E3A5F" }}>
        <h1 className="font-heading text-2xl md:text-4xl font-bold text-white mb-3">Vi är på spelarnas sida</h1>
        <p className="text-base md:text-lg font-medium" style={{ color: "#06B6D4" }}>
          Vårt uppdrag är att ingen bonus ska gå till spillo
        </p>
      </section>

      <div className="container mx-auto px-4 py-10 space-y-12 max-w-3xl pb-28 md:pb-10">
        {/* Vårt uppdrag */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Varför BonusBevakning finns</h2>
          <p className="text-muted-foreground leading-relaxed">
            Spelbolagen spenderar miljarder på marknadsföring och oddsen är nästan alltid på deras sida. Vi finns till för att jämna ut spelplanen. Genom att spela med rätt bonus vid rätt tillfälle ökar du dina chanser till vinst betydligt – och det är precis det vi hjälper dig med. Vi bevakar, jämför och notifierar dig så att du aldrig missar ett erbjudande igen.
          </p>
        </section>

        {/* Så fungerar det */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-6 text-center">Så fungerar det</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "🔔", title: "Vi bevakar alla bonusar", text: "Vi håller koll på samtliga svenska spelbolag dygnet runt" },
              { icon: "📲", title: "Du får en notis", text: "Så fort en ny bonus dyker upp meddelar vi dig direkt" },
              { icon: "🎯", title: "Du spelar smartare", text: "Med rätt bonus i handen har du alltid bättre förutsättningar" },
            ].map((item) => (
              <div key={item.title} className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Transparens */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Vi är transparenta</h2>
          <p className="text-muted-foreground leading-relaxed">
            BonusBevakning är en affiliatesida. Det betyder att vi tjänar en provision när du klickar på en bonus och registrerar dig hos ett spelbolag. Detta påverkar aldrig hur vi rangordnar eller presenterar bonusar – vår prioritet är alltid att visa de bästa erbjudandena för dig som spelare.
          </p>
        </section>

        {/* Avregistrering */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Vill du avregistrera dig?</h2>
          <p className="text-muted-foreground leading-relaxed">
            Det går enkelt att avregistrera sig när som helst. När du avregistrerar dig slutar vi skicka notiser omedelbart och ditt konto raderas. Du hittar alternativet för avregistrering på din{" "}
            <Link to="/notiser" className="font-medium hover:underline" style={{ color: "#06B6D4" }}>
              Konto-sida
            </Link>
            .
          </p>
        </section>
      </div>

      <Footer />
      <BottomNav />
    </div>
  );
};

export default AboutUs;
