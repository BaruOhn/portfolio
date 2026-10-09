import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    title: "Barbora Ohnoutková · Frontend developer",
    description:
      "Barbora Ohnoutková – full-stack developer focused on frontend, 4+ years of experience (React, Next.js, TypeScript, Flutter). Portfolio and CV.",
  },
  skipToContent: "Skip to content",
  nav: {
    label: "Main",
    sections: {
      experience: "Experience",
      technologies: "Stack",
      projects: "Projects",
      contact: "Contact",
    },
    game: "Game version",
    switchTo: "Přepnout do češtiny",
  },
  hero: {
    location: "Ostrava, Czech Republic",
    status: "Open to work",
    title: [
      { text: "Full-stack developer " },
      { text: "focused on frontend", highlight: true },
    ],
    intro:
      "Hi, I'm Barbora, and for 4 years I've been building intuitive, visually engaging and highly functional web and mobile applications in React, Next.js, TypeScript and Flutter.",
    ctaPrimary: "See my work",
    cv: "Download CV",
    photoAlt: "Portrait of Barbora Ohnoutková",
  },
  experience: {
    kicker: "Background",
    title: "Work experience & education",
    tabs: { work: "Work experience", education: "Education" },
    present: "present",
    work: {
      smartgis: {
        role: "Full-stack Developer",
        employment: "part-time",
        points: [
          "Expanding the eDomovnice ecosystem and developing mobile applications from design to implementation.",
          "Developing a public transport timetable mobile app for the city of Třebíč.",
          "Working directly with the client on a large-scale Next.js project – from requirements analysis to delivery.",
        ],
      },
      folklor: {
        role: "Content Creator",
        employment: "volunteer",
        points: [
          "Filming, editing and publishing Instagram content for the Folklor bez hranic festival.",
        ],
      },
      tietoevry: {
        role: "Software Developer",
        employment: "part-time",
        points: [
          "Developed web applications in ASP.NET (C#) and React.",
        ],
      },
      cokafe: {
        role: "Barista",
        employment: "part-time",
        points: ["Customer service and teamwork."],
      },
      firemky: {
        role: "Instructor & event organiser",
        employment: "part-time",
        points: [
          "Coordinated and trained teams of entertainers, communicated with event organisers.",
        ],
      },
    },
    university: "Palacký University Olomouc",
    education: {
      master: {
        degree: "Master's degree (Mgr.)",
        field: "Applied Computer Science – Software Development",
        points: ["State final exams passed, defence of the already finished thesis in January 2027."],
      },
      bachelor: {
        degree: "Bachelor's degree (Bc.)",
        field: "Information Technology",
        points: [],
      },
    },
  },
  technologies: {
    kicker: "Stack",
    title: "Technologies",
    text: "Languages, frameworks and tools I work with.",
    groups: {
      languages: { title: "Languages" },
      frameworks: { title: "Frameworks & libraries" },
      tools: { title: "Tools" },
      design: { title: "Design" },
      ai: { title: "AI" },
    },
  },
  projects: {
    kicker: "Projects",
    title: "Theses & projects",
    links: { site: "Website", paper: "Thesis text", repo: "Code" },
    items: {
      gamePortfolio: {
        type: "Design showcase",
        title: "Game-style portfolio",
        description:
          "An alternative version of my portfolio as a pixel-art-style website – less professional, but more authentic and personal. Designed and built by me.",
        imageAlt: "Hero section of the game-style portfolio",
      },
      masterThesis: {
        type: "Master's thesis",
        title: "Personal finance app supporting financial literacy",
        description:
          "A web app for managing personal finances that also teaches financial literacy, with an integrated AI agent.",
      },
      bachelorThesis: {
        type: "Bachelor's thesis",
        title: "Web presentation of study plans",
        description:
          "A web app presenting the study plans of Palacký University Olomouc. It can also generate promotional materials and adjust how the data is presented.",
      },
      studioOpachova: {
        type: "Client project",
        title: "Studio Opachová",
        description:
          "A clean, airy website for a beauty studio that feels as calm as the salon itself.",
      },
    },
  },
  contact: {
    title: [
      { text: "Looking for a frontend developer? " },
      { text: "Send me an e-mail.", highlight: true },
    ],
    email: "E-mail",
    phone: "Phone",
  },
  footer: {
    navigate: "Navigate",
    projects: "Projects",
    socials: "Socials",
    builtWith: "Built with",
    rights: "All rights reserved.",
  },
  notFound: {
    title: "Page not found",
    text: "This page doesn't exist.",
    cta: "Back to the homepage",
  },
};
