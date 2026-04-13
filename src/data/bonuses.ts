export type BonusCategory = "casino" | "odds" | "freespins" | "nodeposit";

export interface Bonus {
  id: string;
  operator: string;
  operatorLogo: string;
  title: string;
  description: string;
  category: BonusCategory;
  rating: number;
  wagerRequirement: string;
  expiryDate: string;
  isNewCustomer: boolean;
  noWager: boolean;
  featured: boolean;
  ctaUrl: string;
  details: {
    howToActivate: string[];
    terms: string[];
    minDeposit: string;
    maxBonus: string;
  };
}

export const categories: { id: BonusCategory | "all"; label: string; icon: string }[] = [
  { id: "all", label: "Alla", icon: "🎯" },
  { id: "casino", label: "Casino", icon: "🎰" },
  { id: "odds", label: "Odds", icon: "⚽" },
  { id: "freespins", label: "Free Spins", icon: "🎡" },
  { id: "nodeposit", label: "No Deposit", icon: "🎁" },
];

export const bonuses: Bonus[] = [
  {
    id: "unibet",
    operator: "Unibet",
    operatorLogo: "U",
    title: "100% upp till 500kr + 100 free spins",
    description: "Dubbla din första insättning och få 100 gratissnurr på utvalda slots.",
    category: "casino",
    rating: 4.5,
    wagerRequirement: "35x",
    expiryDate: "2026-05-01",
    isNewCustomer: true,
    noWager: false,
    featured: true,
    ctaUrl: "#",
    details: {
      howToActivate: ["Skapa ett konto via vår länk", "Gör en insättning på minst 100kr", "Bonusen aktiveras automatiskt"],
      terms: ["Omsättningskrav: 35x bonusbeloppet", "Minsta insättning: 100kr", "Gäller nya kunder", "Bonusen måste omsättas inom 30 dagar"],
      minDeposit: "100kr",
      maxBonus: "500kr",
    },
  },
  {
    id: "leovegas",
    operator: "LeoVegas",
    operatorLogo: "L",
    title: "50 free spins utan insättning",
    description: "Registrera dig och få 50 gratissnurr direkt – ingen insättning krävs!",
    category: "nodeposit",
    rating: 4.8,
    wagerRequirement: "40x",
    expiryDate: "2026-04-30",
    isNewCustomer: true,
    noWager: false,
    featured: true,
    ctaUrl: "#",
    details: {
      howToActivate: ["Registrera ett nytt konto", "Verifiera din e-post", "50 free spins krediteras direkt"],
      terms: ["Omsättningskrav: 40x vinster från free spins", "Max uttag: 2000kr", "Gäller nya kunder", "Free spins gäller på Starburst"],
      minDeposit: "Ingen",
      maxBonus: "2000kr (max uttag)",
    },
  },
  {
    id: "betsson",
    operator: "Betsson",
    operatorLogo: "B",
    title: "Oddsboostat välkomsterbjudande",
    description: "Få förhöjda odds på ditt första sportspel – upp till 50% bättre odds!",
    category: "odds",
    rating: 4.3,
    wagerRequirement: "Ingen",
    expiryDate: "2026-05-15",
    isNewCustomer: true,
    noWager: true,
    featured: true,
    ctaUrl: "#",
    details: {
      howToActivate: ["Skapa konto hos Betsson", "Gör en insättning", "Placera ditt första sportspel med boosted odds"],
      terms: ["Max insats: 200kr", "Gäller utvalda matcher", "Endast nya kunder", "Boosted odds gäller i 7 dagar"],
      minDeposit: "50kr",
      maxBonus: "Varierar",
    },
  },
  {
    id: "speedy",
    operator: "Speedy Casino",
    operatorLogo: "S",
    title: "Snabbaste uttaget + 200 free spins",
    description: "Uttag inom 5 minuter! Plus 200 gratissnurr fördelade på din första vecka.",
    category: "freespins",
    rating: 4.1,
    wagerRequirement: "25x",
    expiryDate: "2026-06-01",
    isNewCustomer: true,
    noWager: false,
    featured: false,
    ctaUrl: "#",
    details: {
      howToActivate: ["Registrera dig via BonusBevakning", "Gör din första insättning", "Free spins delas ut 40/dag i 5 dagar"],
      terms: ["Omsättningskrav: 25x", "Minsta insättning: 100kr", "Free spins gäller på utvalda spel", "Uttag processas inom 5 minuter"],
      minDeposit: "100kr",
      maxBonus: "200 free spins",
    },
  },
  {
    id: "casumo",
    operator: "Casumo",
    operatorLogo: "C",
    title: "1000kr bonus + 20 spins",
    description: "Stort välkomstpaket med generös bonus och gratissnurr på populära slots.",
    category: "casino",
    rating: 4.6,
    wagerRequirement: "30x",
    expiryDate: "2026-05-20",
    isNewCustomer: true,
    noWager: false,
    featured: true,
    ctaUrl: "#",
    details: {
      howToActivate: ["Skapa ett Casumo-konto", "Sätt in minst 200kr", "Bonusen och spins aktiveras direkt"],
      terms: ["Omsättningskrav: 30x bonusbeloppet", "Minsta insättning: 200kr", "Bonusen gäller i 30 dagar", "Free spins på Book of Dead"],
      minDeposit: "200kr",
      maxBonus: "1000kr",
    },
  },
  {
    id: "mrgreen",
    operator: "Mr Green",
    operatorLogo: "M",
    title: "No wagering free spins",
    description: "Få free spins helt utan omsättningskrav – vinsterna är dina direkt!",
    category: "freespins",
    rating: 4.7,
    wagerRequirement: "Ingen",
    expiryDate: "2026-04-28",
    isNewCustomer: false,
    noWager: true,
    featured: true,
    ctaUrl: "#",
    details: {
      howToActivate: ["Logga in på ditt Mr Green-konto", "Gå till kampanjsidan", "Aktivera erbjudandet och spela"],
      terms: ["Inga omsättningskrav", "Gäller befintliga kunder", "Max 50 free spins", "Gäller på utvalda NetEnt-spel"],
      minDeposit: "Ingen",
      maxBonus: "Vinster från free spins",
    },
  },
  {
    id: "rizk",
    operator: "Rizk",
    operatorLogo: "R",
    title: "200% upp till 1000kr",
    description: "Trippla din insättning med ett av marknadens generösaste välkomsterbjudanden.",
    category: "casino",
    rating: 4.2,
    wagerRequirement: "40x",
    expiryDate: "2026-05-10",
    isNewCustomer: true,
    noWager: false,
    featured: false,
    ctaUrl: "#",
    details: {
      howToActivate: ["Registrera dig hos Rizk", "Gör en insättning på minst 100kr", "200% bonus krediteras automatiskt"],
      terms: ["Omsättningskrav: 40x bonusbeloppet", "Minsta insättning: 100kr", "Bonusen gäller i 21 dagar", "Max insats under omsättning: 50kr"],
      minDeposit: "100kr",
      maxBonus: "1000kr",
    },
  },
  {
    id: "bet365",
    operator: "Bet365",
    operatorLogo: "3",
    title: "Öppningserbjudande på odds",
    description: "Placera ditt första spel och få upp till 500kr i freebet om det förlorar.",
    category: "odds",
    rating: 4.4,
    wagerRequirement: "1x",
    expiryDate: "2026-06-15",
    isNewCustomer: true,
    noWager: false,
    featured: false,
    ctaUrl: "#",
    details: {
      howToActivate: ["Öppna ett konto hos Bet365", "Gör en insättning och placera ett spel", "Om spelet förlorar får du en freebet"],
      terms: ["Max freebet: 500kr", "Minsta odds: 1.50", "Gäller nya kunder", "Freebet gäller i 7 dagar"],
      minDeposit: "100kr",
      maxBonus: "500kr freebet",
    },
  },
];

export const weeklyTopList = ["leovegas", "mrgreen", "casumo", "betsson", "unibet"];
