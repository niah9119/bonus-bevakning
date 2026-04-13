
const BonusGuideSection = () => {
  return (
    <section className="mb-12">
      <div className="bg-card border border-border rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-primary/80 px-6 py-8 sm:px-10 sm:py-10">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary-foreground mb-3">
            Välkomstbonusar - så fungerar det egentligen
          </h2>
          <p className="text-primary-foreground/80 text-sm sm:text-base max-w-2xl leading-relaxed">
            De flesta som registrerar sig hos ett spelbolag klickar igenom bonuserbjudandet utan att läsa villkoren. Det är förståeligt – texten är ofta lång och full av facktermer. Men det är också där många missar chansen att verkligen dra nytta av erbjudandet.
          </p>
          <p className="text-primary-foreground/90 text-sm sm:text-base font-medium mt-3">
            Den här guiden förklarar hur välkomstbonusar fungerar i praktiken, vilka villkor som spelar störst roll och hur du väljer den bonus som faktiskt passar dig.
          </p>
        </div>

        {/* Content */}
        <div className="px-6 py-8 sm:px-10 sm:py-10 space-y-10">
          {/* Varför bonusar */}
          <div>
            <div className="flex items-start gap-3 mb-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent/15 text-accent font-heading font-bold text-sm shrink-0 mt-0.5">💡</span>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground">
                Varför erbjuder spelbolagen bonusar?
              </h3>
            </div>
            <div className="ml-11 space-y-3 text-muted-foreground text-sm sm:text-base leading-relaxed">
              <p>
                Det handlar om konkurrens. Det finns hundratals spelbolag på den svenska marknaden och alla slåss om samma spelare. Välkomstbonusen är deras sätt att sticka ut – och den är alltid det bästa erbjudandet du någonsin får från det spelbolaget.
              </p>
              <p>
                Enligt svensk spellag från 2019 får ett spelbolag bara erbjuda en bonus per spelare och licens. Det innebär att välkomstbonusen inte bara är den första bonusen – den är den enda. Det är värt att ta vara på den rätt.
              </p>
            </div>
          </div>

          <div className="border-t border-border" />

          {/* Tre villkor */}
          <div>
            <div className="flex items-start gap-3 mb-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent/15 text-accent font-heading font-bold text-sm shrink-0 mt-0.5">⚖️</span>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground">
                Tre villkor som alltid spelar roll
              </h3>
            </div>
            <div className="ml-11 space-y-6">
              {/* Omsättningskrav */}
              <div>
                <h4 className="font-heading font-bold text-foreground text-sm sm:text-base mb-2">
                  Omsättningskrav – det viktigaste att förstå
                </h4>
                <div className="space-y-3 text-muted-foreground text-sm sm:text-base leading-relaxed">
                  <p>
                    Omsättningskravet anger hur många gånger du måste spela för bonusbeloppet innan pengarna kan tas ut. Det är det enskilt viktigaste villkoret att ha koll på.
                  </p>
                  <p>
                    Tänk så här: en bonus på 500 kr med 35x omsättningskrav kräver att du omsätter 17 500 kr innan du kan ta ut något. En bonus på 200 kr utan omsättningskrav är i de flesta fall mer värd – för att pengarna faktiskt är tillgängliga.
                  </p>
                  <p>
                    Vi på BonusBevakning visar alltid omsättningskravet tydligt på varje bonus. Bonusar utan omsättningskrav lyfter vi alltid fram extra.
                  </p>
                </div>
              </div>

              {/* Giltighetstid */}
              <div>
                <h4 className="font-heading font-bold text-foreground text-sm sm:text-base mb-2">
                  Giltighetstid – missa inte deadline
                </h4>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  Nästan alla bonusar har en giltighetstid. Uppfyller du inte omsättningskravet innan datumet passerar förfaller bonusen – och i många fall försvinner även dina vinster. Kontrollera alltid hur länge bonusen gäller och planera därefter.
                </p>
              </div>

              {/* Minimumodds */}
              <div>
                <h4 className="font-heading font-bold text-foreground text-sm sm:text-base mb-2">
                  Minimumodds – gäller framför allt oddsbonusar
                </h4>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  Många oddsbonusar kräver att du spelar på matcher med ett odds över en viss nivå, till exempel 1.60 eller 2.00. Spel på lägre odds räknas inte mot omsättningskravet. Kolla alltid vad som gäller innan du lägger ditt spel.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-border" />

          {/* Olika typer av bonusar */}
          <div>
            <div className="flex items-start gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent/15 text-accent font-heading font-bold text-sm shrink-0 mt-0.5">🎯</span>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground">
                Olika typer av bonusar – vad är skillnaden?
              </h3>
            </div>
            <div className="ml-11 grid gap-4 sm:grid-cols-2">
              {[
                {
                  term: "Insättningsbonus",
                  desc: "Den vanligaste typen. Spelbolaget matchar din första insättning med ett procentuellt påslag – ofta 100% upp till ett visst maxbelopp. Sätter du in 500 kr får du alltså 500 kr extra, totalt 1 000 kr att spela för. Omsättningskrav tillkommer nästan alltid.",
                },
                {
                  term: "Free spins",
                  desc: "Gratisspins på utvalda slots. Antalet varierar – allt från 10 till hundratals spins. Tänk på att vinster från free spins ofta har egna omsättningskrav och att de endast gäller på specifika spel.",
                },
                {
                  term: "No deposit-bonus",
                  desc: "Den ovanligaste och mest attraktiva typen. Du behöver inte sätta in egna pengar – det räcker med att skapa ett konto. Summorna är ofta små, men eftersom det inte kostar dig något är det alltid värt att ta vara på. Vi skickar en notis direkt när sådana erbjudanden dyker upp.",
                },
                {
                  term: "Riskfritt spel",
                  desc: "Du lägger ett spel med egna pengar. Vinner du behåller du vinsten som vanligt. Förlorar du får du tillbaka insatsen – men oftast som bonuspengar med egna villkor, inte som kontanter direkt.",
                },
                {
                  term: "Oddsboostar",
                  desc: "Spelbolaget höjer odds tillfälligt på utvalda matcher. Det kräver ingen registrering eller insättning utöver det vanliga – du spelar som normalt men till bättre villkor. Dessa erbjudanden är tidsbegränsade och försvinner snabbt. Det är just den typen av erbjudanden BonusBevakning är byggd för att fånga upp.",
                },
              ].map((item) => (
                <div key={item.term} className="bg-muted/50 rounded-xl p-4 border border-border/50">
                  <dt className="font-heading font-bold text-foreground text-sm mb-1">{item.term}</dt>
                  <dd className="text-muted-foreground text-sm leading-relaxed">{item.desc}</dd>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-border" />

          {/* Tre frågor */}
          <div>
            <div className="flex items-start gap-3 mb-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent/15 text-accent font-heading font-bold text-sm shrink-0 mt-0.5">✅</span>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground">
                Tre frågor att ställa innan du aktiverar en bonus
              </h3>
            </div>
            <div className="ml-11 space-y-3 text-muted-foreground text-sm sm:text-base leading-relaxed">
              <p>
                Det finns ingen universellt bästa bonus – det beror på hur du spelar. Men tre frågor hjälper dig alltid att fatta rätt beslut:
              </p>
              <div className="space-y-4 mt-4">
                <div className="bg-muted/50 rounded-xl p-4 border border-border/50">
                  <p className="font-heading font-bold text-foreground text-sm mb-1">Hur högt är omsättningskravet?</p>
                  <p className="text-sm leading-relaxed">Lägre är alltid bättre. Finns det inget krav alls är det nästan alltid det bästa alternativet.</p>
                </div>
                <div className="bg-muted/50 rounded-xl p-4 border border-border/50">
                  <p className="font-heading font-bold text-foreground text-sm mb-1">Hur länge gäller bonusen?</p>
                  <p className="text-sm leading-relaxed">En bonus med kort giltighetstid och högt omsättningskrav kan vara svår att hinna med. Välj ett erbjudande du faktiskt har tid att utnyttja.</p>
                </div>
                <div className="bg-muted/50 rounded-xl p-4 border border-border/50">
                  <p className="font-heading font-bold text-foreground text-sm mb-1">Finns det begränsningar på spel eller odds?</p>
                  <p className="text-sm leading-relaxed">Kontrollera om bonusen bara gäller på specifika spel, sporter eller odds. Ju färre begränsningar desto bättre.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border" />

          {/* Disclaimer */}
          <div className="text-center">
            <p className="text-muted-foreground/60 text-xs sm:text-sm">
              18+ | Spela ansvarsfullt | stodlinjen.se | spelpaus.se
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusGuideSection;
