import type { Dictionary } from "./types";

export const cs: Dictionary = {
  meta: {
    title: "Barbora Ohnoutková · Full-stack developer",
    description:
      "Barbora Ohnoutková – full-stack vývojářka se zaměřením na frontend, 4+ roky praxe (React, Next.js, TypeScript, Flutter). Portfolio a životopis.",
  },
  skipToContent: "Přeskočit na obsah",
  nav: {
    label: "Hlavní navigace",
    sections: { experience: "Zkušenosti", technologies: "Technologie", projects: "Projekty", contact: "Kontakt" },
    switchTo: "Switch to English",
    openMenu: "Otevřít menu",
    closeMenu: "Zavřít menu",
  },
  hero: {
    greeting: "Ahoj, jsem",
    intro:
      "Full-stack vývojářka profesí, frontend nadšením. Více než 4 roky tvořím promyšlené webové a mobilní aplikace s citem pro detail.",
    ctaPrimary: "Moje projekty",
    cv: "Stáhnout CV",
    photoAlt: "Portrét Barbory Ohnoutkové",
    scroll: "Dolů",
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
          "Vývoj a údržba full-stack webových aplikací s důrazem na frontend.",
          "Návrh uživatelských rozhraní ve Figmě a jejich převedení do produkčního kódu.",
          "Přímá spolupráce s klienty – od analýzy požadavků po realizaci.",
          "Vedle webu také vývoj multiplatformních mobilních aplikací ve Flutteru.",
        ],
      },
      folklor: {
        role: "Content Creator",
        employment: "dobrovolnictví",
        points: ["Natáčení, střih a publikace obsahu na Instagram festivalu Folklor bez hranic, občas i před kamerou."],
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
    inDevelopment: "Ve vývoji",
    items: {
      gamePortfolio: {
        type: "Ukázka designu",
        title: "Portfolio ve stylu hry",
        summary: "Tento životopis jako útulná indie hra – s deníkem úkolů, hodem kostkou a skrytým Konami kódem.",
        description:
          "Tento životopis jako web ve stylu útulné indie hry – úvodní animace s logem v podobě kostky d20, deník úkolů, hod kostkou se zajímavostmi a skrytý Konami kód. Navrhla a nakódovala jsem ho sama.",
        imageAlt: "Úvodní sekce portfolia ve stylu hry",
      },
      masterThesis: {
        type: "Diplomová práce",
        title: "Aplikace pro správu osobních financí s podporou finanční gramotnosti",
        shortTitle: "Aplikace pro osobní finance",
        summary: "Aplikace na osobní finance, která zároveň učí finanční gramotnosti, s AI agentem.",
        description:
          "Webová aplikace pro správu osobních financí, která zároveň učí finanční gramotnosti, s integrovaným AI agentem.",
        status: "Obhajoba v lednu 2027",
      },
      bachelorThesis: {
        type: "Bakalářská práce",
        title: "Webová prezentace studijních plánů",
        summary: "Studijní plány Univerzity Palackého v Olomouci včetně generování propagačních materiálů.",
        description:
          "Webová aplikace pro prezentaci studijních plánů Univerzity Palackého v Olomouci. Umí také generovat propagační materiály a upravovat způsob prezentace dat.",
        imageAlt: "Přehled nabídky studia s vyhledáváním a filtry podle typu, formy a jazyka studia",
      },
      studioOpachova: {
        type: "Projekt pro klienta",
        title: "Studio Opachová",
        summary: "Web pro kosmetické studio – celý proces od požadavků přes návrh po realizaci jsem vedla sama.",
        description: "Web pro kosmetické studio. Celý proces jsem vedla sama – od požadavků přes návrh po realizaci.",
        imageAlt: "Úvodní stránka webu Studio Jana Opachová",
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
    builtWith: "Vlastnoručně navrženo ve Figmě a nakódováno ve Visual Studio Code. Postaveno s Next.js a Tailwind CSS, nasazeno s Vercel.",
    rights: "Všechna práva vyhrazena.",
  },
  notFound: {
    title: "Stránka nenalezena",
    text: "Tahle stránka neexistuje.",
    cta: "Zpět na úvod",
  },
};
