import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";
import Footer from "@/components/Footer";

const ResponsibleGaming = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col pb-20 md:pb-0">
      <Navbar />

      {/* Hero */}
      <section className="mx-4 mt-6 rounded-2xl px-6 py-12 text-center" style={{ backgroundColor: "#1E3A5F" }}>
        <h1 className="font-heading text-2xl md:text-4xl font-bold text-white mb-3">Ansvarsfullt spelande</h1>
        <p className="text-base md:text-lg font-medium" style={{ color: "#06B6D4" }}>
          Spel ska vara roligt – inte ett problem
        </p>
      </section>

      <div className="container mx-auto px-4 py-10 space-y-12 max-w-3xl pb-28 md:pb-10">
        {/* Sektion 1 */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Spela ansvarsfullt</h2>
          <p className="text-muted-foreground leading-relaxed">
            Spel är underhållning och ska alltid hållas på en nivå som känns bekväm för dig. BonusBevakning hjälper dig att hitta de bästa bonusarna – men vi vill också att du spelar på ett sätt som är hållbart och tryggt. Spel bör aldrig ses som en inkomstkälla eller ett sätt att lösa ekonomiska problem.
          </p>
        </section>

        {/* Sektion 2 – Åldersgräns */}
        <section>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">🔞</span>
            <h2 className="text-xl font-bold text-foreground">18-årsgräns</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Enligt svensk lag (Spellagen 2018:1138) är det förbjudet för personer under 18 år att spela om pengar. Alla spelbolag vi listar är licensierade av Spelinspektionen och kontrollerar spelarnas ålder. BonusBevakning riktar sig uteslutande till personer som är 18 år eller äldre.
          </p>
        </section>

        {/* Sektion 3 – Varningssignaler */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Har du kontroll över ditt spelande?</h2>
          <p className="text-muted-foreground mb-4">
            Det kan vara svårt att själv märka när spelandet övergår från nöje till problem. Här är några varningssignaler att vara uppmärksam på:
          </p>
          <ul className="space-y-2 text-muted-foreground list-disc list-inside">
            <li>Du spelar för mer pengar än du har råd att förlora</li>
            <li>Du försöker vinna tillbaka förluster genom att spela mer</li>
            <li>Spelandet påverkar din ekonomi, dina relationer eller ditt arbete</li>
            <li>Du känner oro, irritation eller ångest när du inte kan spela</li>
            <li>Du ljuger för närstående om hur mycket du spelar</li>
          </ul>
        </section>

        {/* Sektion 4 – Verktyg */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-6 text-center">Verktyg som hjälper dig</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "🔴", title: "Spelpaus", text: "Stäng av dig själv från alla licensierade spelbolag i Sverige via spelpaus.se. Du kan välja att pausa i 24 timmar, 1 månad, 3 månader, 6 månader eller tills vidare." },
              { icon: "⏱️", title: "Spelgränser", text: "Alla licensierade spelbolag är skyldiga att erbjuda dig möjligheten att sätta gränser för insättningar, förluster och speltid." },
              { icon: "📋", title: "Självtest", text: "Osäker på om ditt spelande är under kontroll? Alla licensierade spelbolag ska erbjuda ett självtest för att hjälpa dig bedöma ditt spelbeteende." },
            ].map((item) => (
              <div key={item.title} className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sektion 5 – Hjälp och stöd */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Behöver du hjälp?</h2>
          <p className="text-muted-foreground mb-4">
            Om du eller någon du känner behöver stöd finns det hjälp att få. Kontakta någon av följande:
          </p>
          <ul className="space-y-3 text-muted-foreground">
            <li>
              <strong className="text-foreground">Stödlinjen</strong> –{" "}
              <a href="https://www.stodlinjen.se" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: "#06B6D4" }}>stodlinjen.se</a>
              {" "}| Tel: 020-819 100 (gratis, dygnet runt)
            </li>
            <li>
              <strong className="text-foreground">Spelpaus</strong> –{" "}
              <a href="https://www.spelpaus.se" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: "#06B6D4" }}>spelpaus.se</a>
              {" "}(självavstängning från alla licensierade spelbolag)
            </li>
            <li>
              <strong className="text-foreground">Spelinspektionen</strong> –{" "}
              <a href="https://www.spelinspektionen.se" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: "#06B6D4" }}>spelinspektionen.se</a>
              {" "}(information om licensierade spelbolag)
            </li>
            <li>
              <strong className="text-foreground">Gamblers Anonymous Sverige</strong> –{" "}
              <a href="https://www.gamblersanonymous.se" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: "#06B6D4" }}>gamblersanonymous.se</a>
            </li>
          </ul>
        </section>

        {/* Sektion 6 – Vårt ansvar */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Vårt ansvar</h2>
          <p className="text-muted-foreground leading-relaxed">
            BonusBevakning är en affiliatesida och vi listar enbart spelbolag som innehar giltig licens från Spelinspektionen. Vi marknadsför aldrig spel till personer under 18 år. Vi uppmanar alltid våra besökare att sätta upp personliga spelgränser och att använda Spelpaus vid behov. Spel ska alltid vara ett nöje – inte en belastning.
          </p>
        </section>
      </div>

      <Footer />
      <BottomNav />
    </div>
  );
};

export default ResponsibleGaming;
