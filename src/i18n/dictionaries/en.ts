import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    title: "Barbora Ohnoutková · Full-stack developer",
    description:
      "Barbora Ohnoutková – full-stack developer focused on frontend, 4+ years of experience (React, Next.js, TypeScript, Flutter). Portfolio and CV.",
  },
  skipToContent: "Skip to content",
  nav: {
    label: "Main",
    sections: { experience: "Experience", technologies: "Stack", projects: "Projects", contact: "Contact" },
    switchTo: "Přepnout do češtiny",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  hero: {
    greeting: "Hi, I'm",
    intro:
      "Full-stack by profession, frontend by passion. For 4+ years, crafting thoughtful web and mobile experiences with an eye for detail.",
    ctaPrimary: "See my work",
    cv: "Download CV",
    photoAlt: "Portrait of Barbora Ohnoutková",
    scroll: "Scroll",
  },
  experience: {
    title: "Work & education",
    tabs: { work: "Work", education: "Education" },
    present: "present",
    work: {
      smartgis: {
        role: "Full-stack Developer",
        employment: "part-time",
        points: [
          "Developed and maintained full-stack web applications, with a focus on the frontend.",
          "Designed user interfaces in Figma and turned them into production code.",
          "Worked directly with clients – from requirements analysis to delivery.",
          "Alongside web work, also developed cross-platform mobile apps in Flutter.",
        ],
      },
      folklor: {
        role: "Content Creator",
        employment: "volunteer",
        points: [
          "Filming, editing and publishing Instagram content for the Folklor bez hranic festival, sometimes also in front of the camera.",
        ],
      },
      tietoevry: {
        role: "Software Developer",
        employment: "part-time",
        points: ["Developed web applications in ASP.NET (C#) and started working with React."],
      },
      cokafe: {
        role: "Barista",
        employment: "part-time",
        points: ["Customer service and teamwork."],
      },
      firemky: {
        role: "Instructor & event organiser",
        employment: "part-time",
        points: ["Coordinated and trained teams of entertainers, communicated with event organisers."],
      },
    },
    university: "Palacký University Olomouc",
    education: {
      master: {
        degree: "Master's degree (Mgr.)",
        field: "Applied Computer Science – Software Development",
        points: ["State final exams passed, thesis defence in January 2027."],
      },
      bachelor: {
        degree: "Bachelor's degree (Bc.)",
        field: "Information Technology",
        points: [],
      },
    },
  },
  technologies: {
    title: "Technologies",
    text: "Languages, frameworks and tools I work with.",
    groups: {
      languages: "Languages",
      frameworks: "Frameworks",
      tools: "Tools",
      design: "Design",
      ai: "AI",
    },
    labels: { wireframing: "Wireframing", prototyping: "Prototyping" },
  },
  projects: {
    title: "Theses & projects",
    links: { site: "Website", paper: "Thesis text", repo: "Code" },
    prev: "Previous project",
    next: "Next project",
    inDevelopment: "In development",
    items: {
      gamePortfolio: {
        type: "Design showcase",
        title: "Game-style portfolio",
        summary: "This CV reimagined as a cozy indie game, with a quest log, dice rolls and a hidden Konami code.",
        description:
          "This CV as a website styled like a cozy indie game – a d20 logo intro, a quest log, a dice roll with fun facts and a hidden Konami code. I designed and coded it myself.",
        imageAlt: "Hero section of the game-style portfolio",
      },
      masterThesis: {
        type: "Master's thesis",
        title: "Personal finance app supporting financial literacy",
        shortTitle: "Personal finance app",
        summary: "A personal finance app that also teaches financial literacy, with an integrated AI agent.",
        description:
          "A web app for managing personal finances that also teaches financial literacy, with an integrated AI agent.",
        status: "Defence in January 2027",
      },
      bachelorThesis: {
        type: "Bachelor's thesis",
        title: "Web presentation of study plans",
        summary: "Study plans of Palacký University Olomouc, including generated promotional materials.",
        description:
          "A web app presenting the study plans of Palacký University Olomouc. It can also generate promotional materials and adjust how the data is presented.",
        imageAlt: "Study programme overview with search and filters by type, form and language of study",
      },
      studioOpachova: {
        type: "Client project",
        title: "Studio Opachová",
        summary: "A website for a beauty studio – I handled everything from requirements to design and build.",
        description:
          "A website for a beauty studio. I handled the whole process myself – from requirements to design and build.",
        imageAlt: "Homepage of the Studio Jana Opachová website",
      },
    },
  },
  contact: {
    title: "Looking for a frontend developer? Send me an e-mail.",
    note: "Ostrava · Open to work",
    email: "E-mail",
    phone: "Phone",
  },
  footer: {
    tagline: "Full-stack developer focused on frontend, based in Ostrava.",
    cats: "My cats Kebab and Mugen",
    navigate: "Navigate",
    projects: "Projects",
    socials: "Socials",
    builtWith: "Loosely designed in Figma and coded in Visual Studio Code. Built with Next.js and Tailwind CSS, deployed with Vercel.",
    rights: "All rights reserved.",
  },
  notFound: {
    title: "Page not found",
    text: "This page doesn't exist.",
    cta: "Back to the homepage",
  },
};
