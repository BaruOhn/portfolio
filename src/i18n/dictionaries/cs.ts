import type { Dictionary } from "./types";

export const cs: Dictionary = {
  meta: {
    title: "Barbora Ohnoutková · Frontend developer",
    description:
      "Barbora Ohnoutková – full-stack vývojářka se zaměřením na frontend, 4+ roky praxe (React, Next.js, TypeScript, Flutter). Portfolio a životopis.",
  },
  skipToContent: "Přeskočit na obsah",
  nav: {
    label: "Hlavní navigace",
    sections: { experience: "Zkušenosti", technologies: "Technologie", projects: "Projekty", contact: "Kontakt" },
    game: "Herní verze",
    switchTo: "Switch to English",
  },
  hero: {
    location: "Ostrava, Česko",
    status: "Otevřená novým příležitostem",
    title: [{ text: "Full-stack developer " }, { text: "se zaměřením na frontend", highlight: true }],
    intro:
      "Ahoj, jsem Barbora a již 4 roky vyvíjím intuitivní, vizuálně působivé a vysoce funkční webové a mobilní aplikace v Reactu, Next.js, TypeScriptu a Flutteru.",
    ctaPrimary: "Moje projekty",
    cv: "Stáhnout CV",
    photoAlt: "Portrét Barbory Ohnoutkové",
  },
  experience: {
    kicker: "Dosavadní zkušenosti",
    title: "Práce a vzdělání",
    tabs: { work: "Pracovní zkušenosti", education: "Vzdělání" },
    present: "dosud",
    work: {
      smartgis: {
        role: "Full-stack Developer",
        employment: "částečný úvazek",
        points: [
          "Rozšiřování ekosystému eDomovnice a vývoj mobilních aplikací od návrhu po implementaci.",
          "Vývoj mobilní aplikace jízdních řádů pro město Třebíč.",
          "Přímá spolupráce s klientem na rozsáhlém Next.js projektu – od analýzy požadavků po realizaci.",
        ],
      },
      folklor: {
        role: "Content Creator",
        employment: "dobrovolnictví",
        points: ["Natáčení, střih a publikace obsahu na Instagram festivalu Folklor bez hranic."],
      },
      tietoevry: {
        role: "Software Developer",
        employment: "částečný úvazek",
        points: ["Vývoj webových aplikací v ASP.NET (C#) a Reactu."],
      },
      cokafe: {
        role: "Baristka",
        employment: "částečný úvazek",
        points: ["Práce se zákazníky a v týmu."],
      },
      firemky: {
        role: "Instruktorka a organizátorka akcí",
        employment: "částečný úvazek",
        points: ["Koordinace a školení týmů animátorů, komunikace s pořadateli."],
      },
    },
    university: "Univerzita Palackého v Olomouci",
    education: {
      master: {
        degree: "Magisterské studium (Mgr.)",
        field: "Aplikovaná informatika – Vývoj software",
        points: ["Státní závěrečné zkoušky splněny, obhajoba již dokončené diplomové práce v lednu 2027."],
      },
      bachelor: {
        degree: "Bakalářské studium (Bc.)",
        field: "Informační technologie",
        points: [],
      },
    },
  },
  technologies: {
    kicker: "Technologie",
    title: "S čím pracuji",
    text: "Jazyky, frameworky a nástroje, které používám.",
    groups: {
      languages: { title: "Jazyky" },
      frameworks: { title: "Frameworky a knihovny" },
      tools: { title: "Nástroje" },
      design: { title: "Design" },
      ai: { title: "AI" },
    },
  },
  projects: {
    kicker: "Projekty",
    title: "Závěrečné práce a projekty",
    links: { site: "Web", paper: "Text práce", repo: "Kód" },
    items: {
      gamePortfolio: {
        type: "Ukázka designu",
        title: "Portfolio ve stylu hry",
        description:
          "Alternativní verze mého portfolia jako web v pixel-art stylu – méně profesionální, ale více autentická a osobnější. Navrženo a postaveno mnou.",
        imageAlt: "Úvodní sekce portfolia ve stylu hry",
      },
      masterThesis: {
        type: "Diplomová práce",
        title: "Aplikace pro správu osobních financí s podporou finanční gramotnosti",
        description:
          "Webová aplikace pro sledování příjmů a výdajů, rozpočtování a plánování financí. Součástí je AI asistent pro podporu finanční gramotnosti.",
      },
      bachelorThesis: {
        type: "Bakalářská práce",
        title: "Webová prezentace studijních plánů",
        description:
          "Webová aplikace pro prezentaci studijních plánů Univerzity Palackého v Olomouci. Umožňuje generovat propagační materiály a upravovat způsob prezentace dat.",
      },
      studioOpachova: {
        type: "Projekt pro klienta",
        title: "Studio Opachová",
        description: "Čistý, vzdušný web kosmetického studia, který působí stejně klidně jako samotný salon.",
      },
    },
  },
  contact: {
    title: [{ text: "Hledáte frontend vývojářku? " }, { text: "Napište mi e-mail.", highlight: true }],
    email: "E-mail",
    phone: "Telefon",
  },
  footer: {
    navigate: "Navigace",
    projects: "Projekty",
    socials: "Sítě",
    builtWith: "Postaveno na",
    rights: "Všechna práva vyhrazena.",
  },
  notFound: {
    title: "Stránka nenalezena",
    text: "Tahle stránka neexistuje.",
    cta: "Zpět na úvod",
  },
};
