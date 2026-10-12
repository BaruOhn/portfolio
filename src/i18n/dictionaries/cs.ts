import type { Dictionary } from "./types";

export const cs: Dictionary = {
  meta: {
    title: "Barbora Ohnoutková · Full-stack vývojářka (frontend)",
    description:
      "Barbora Ohnoutková – full-stack vývojářka se zaměřením na frontend, 4+ roky praxe (React, Next.js, TypeScript, Flutter). Portfolio a životopis.",
  },
  skipToContent: "Přeskočit na obsah",
  nav: {
    label: "Hlavní navigace",
    sections: { experience: "Zkušenosti", technologies: "Technologie", projects: "Projekty", contact: "Kontakt" },
    switchTo: "Switch to English",
  },
  hero: {
    greeting: "Ahoj, jsem",
    intro:
      "Full-stack vývojářka profesí, frontendistka srdcem. Už přes 4 roky tvořím intuitivní a vizuálně zajímavé webové aplikace s velkým důrazem na detail.",
    ctaPrimary: "Moje projekty",
    cv: "Stáhnout CV",
    photoAlt: "Portrét Barbory Ohnoutkové",
  },
  experience: {
    title: "Práce a vzdělání",
    tabs: { work: "Práce", education: "Vzdělání" },
    present: "dosud",
    work: {
      smartgis: {
        role: "Full-stack Developer",
        employment: "částečný úvazek",
        points: [
          "Rozšiřování webové aplikace eDomovnice a vývoj její mobilní aplikace od základu.",
          "Vývoj mobilní aplikace jízdních řádů pro město Třebíč.",
          "Návrh rozhraní mobilních aplikací ve Figmě.",
          "Přímá spolupráce s klientem na rozsáhlém projektu – od analýzy požadavků po realizaci.",
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
        points: ["Vývoj webových aplikací v ASP.NET (C#) a první práce s Reactem."],
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
        points: ["Státní závěrečné zkoušky splněny, obhajoba diplomové práce v lednu 2027."],
      },
      bachelor: {
        degree: "Bakalářské studium (Bc.)",
        field: "Informační technologie",
        points: [],
      },
    },
  },
  technologies: {
    title: "S čím pracuji",
    text: "Jazyky, frameworky a nástroje, které používám.",
    groups: {
      languages: "Jazyky",
      frameworks: "Frameworky",
      tools: "Nástroje",
      design: "Design",
      ai: "AI",
    },
    labels: { wireframing: "Wireframy", prototyping: "Prototypování" },
  },
  projects: {
    title: "Závěrečné práce a projekty",
    links: { site: "Web", paper: "Text práce", repo: "Kód" },
    prev: "Předchozí projekt",
    next: "Další projekt",
    items: {
      gamePortfolio: {
        type: "Ukázka designu",
        title: "Portfolio ve stylu hry",
        description:
          "Tento životopis jako web ve stylu útulné indie hry – úvodní animace s logem v podobě kostky d20, deník úkolů, hod kostkou se zajímavostmi a skrytý Konami kód. Navrhla a nakódovala jsem ho sama.",
        imageAlt: "Úvodní sekce portfolia ve stylu hry",
      },
      masterThesis: {
        type: "Diplomová práce",
        title: "Aplikace pro správu osobních financí s podporou finanční gramotnosti",
        description:
          "Webová aplikace pro správu osobních financí, která zároveň učí finanční gramotnosti, s integrovaným AI agentem. Obhajoba v lednu 2027.",
      },
      bachelorThesis: {
        type: "Bakalářská práce",
        title: "Webová prezentace studijních plánů",
        description:
          "Webová aplikace pro prezentaci studijních plánů Univerzity Palackého v Olomouci. Umí také generovat propagační materiály a upravovat způsob prezentace dat.",
      },
      studioOpachova: {
        type: "Projekt pro klienta",
        title: "Studio Opachová",
        description: "Web pro kosmetické studio. Celý proces jsem vedla sama – od požadavků přes návrh po realizaci.",
      },
    },
  },
  contact: {
    title: "Hledáte frontend vývojářku? Napište mi e-mail.",
    note: "Ostrava · Hledám práci",
    email: "E-mail",
    phone: "Telefon",
  },
  footer: {
    tagline: "Full-stack vývojářka se zaměřením na frontend z Ostravy.",
    cats: "Moji kocouři Kebab a Mugen",
    navigate: "Navigace",
    projects: "Projekty",
    socials: "Sítě",
    builtWith: "Postaveno na",
    rights: "Všechna práva vyhrazena.",
  },
  cv: {
    title: "Životopis",
    tagline:
      "Full-stack vývojářka se zaměřením na frontend a 4+ roky praxe ve vývoji webových a mobilních aplikací. Dokončuji magisterské studium Aplikované informatiky.",
    experience: "Pracovní zkušenosti",
    projects: "Vybrané projekty",
    skills: "Dovednosti",
    education: "Vzdělání",
    languages: "Jazyky",
    languageList: ["Čeština – rodilá mluvčí", "Angličtina – plynně (C1)"],
    interests: "Zájmy",
    interestList: "Bouldering, folklorní tanec, čtení, videohry a D&D",
  },
  notFound: {
    title: "Stránka nenalezena",
    text: "Tahle stránka neexistuje.",
    cta: "Zpět na úvod",
  },
};
