import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg gold-gradient flex items-center justify-center font-bold text-accent-foreground text-sm">
                BB
              </div>
              <span className="font-heading text-lg font-bold text-foreground">
                Bonus<span className="text-accent">Bevakning</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Sveriges smartaste bonusbevakning. Vi hjälper dig hitta och jämföra de bästa erbjudandena.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3">Navigering</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-foreground transition-colors">Alla bonusar</Link></li>
              <li><Link to="/topplista" className="hover:text-foreground transition-colors">Topplista</Link></li>
              <li><Link to="/notiser" className="hover:text-foreground transition-colors">Mina notiser</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3">Kategorier</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/?cat=casino" className="hover:text-foreground transition-colors">Casino</Link></li>
              <li><Link to="/?cat=odds" className="hover:text-foreground transition-colors">Odds</Link></li>
              <li><Link to="/?cat=freespins" className="hover:text-foreground transition-colors">Free Spins</Link></li>
              <li><Link to="/?cat=nodeposit" className="hover:text-foreground transition-colors">No Deposit</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3">Information</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/om-oss" className="hover:text-foreground transition-colors">Om oss</Link></li>
              <li><Link to="/ansvarsfullt-spelande" className="hover:text-foreground transition-colors">Ansvarsfullt spelande</Link></li>
              <li><Link to="/integritetspolicy" className="hover:text-foreground transition-colors">Integritetspolicy</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-6 text-center text-xs text-muted-foreground space-y-2">
          <p>© 2026 BonusBevakning. Spela ansvarsfullt. 18+</p>
          <p>
            Spel om pengar riktar sig endast till personer över 18 år. Spela ansvarsfullt.{" "}
            <a href="https://www.stodlinjen.se" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">stodlinjen.se</a>
            {" "}|{" "}
            <a href="https://www.spelpaus.se" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">spelpaus.se</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
