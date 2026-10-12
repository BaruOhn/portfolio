import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    title: "Barbora Ohnoutková · Full-stack Developer (Frontend)",
    description:
      "Barbora Ohnoutková – full-stack developer focused on frontend, 4+ years of experience (React, Next.js, TypeScript, Flutter). Portfolio and CV.",
  },
  skipToContent: "Skip to content",
  nav: {
    label: "Main",
    sections: { experience: "Experience", technologies: "Stack", projects: "Projects", contact: "Contact" },
    switchTo: "Přepnout do češtiny",
  },
  hero: {
    greeting: "Hi, I'm",
    intro:
      "A full-stack developer by profession, a frontend developer by passion. For over 4 years, I've been building intuitive, visually interesting web applications with great attention to detail.",
    ctaPrimary: "See my work",
    cv: "Download CV",
    photoAlt: "Portrait of Barbora Ohnoutková",
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
          "Extended the eDomovnice web application and built its mobile app from scratch.",
          "Built a public transport timetable mobile app for the city of Třebíč.",
          "Designed mobile app interfaces in Figma.",
          "Worked directly with a client on a large project – from requirements analysis to delivery.",
        ],
      },
      folklor: {
        role: "Content Creator",
        employment: "volunteer",
        points: ["Filming, editing and publishing Instagram content for the Folklor bez hranic festival."],
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
    items: {
      gamePortfolio: {
        type: "Design showcase",
        title: "Game-style portfolio",
        description:
          "This CV as a website styled like a cozy indie game – a d20 logo intro, a quest log, a dice roll with fun facts and a hidden Konami code. I designed and coded it myself.",
        imageAlt: "Hero section of the game-style portfolio",
      },
      masterThesis: {
        type: "Master's thesis",
        title: "Personal finance app supporting financial literacy",
        description:
          "A web app for managing personal finances that also teaches financial literacy, with an integrated AI agent. Thesis defence in January 2027.",
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
          "A website for a beauty studio. I handled the whole process myself – from requirements to design and build.",
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
    builtWith: "Built with",
    rights: "All rights reserved.",
  },
  cv: {
    title: "CV",
    tagline:
      "Full-stack developer focused on frontend with 4+ years of experience building web and mobile apps. Finishing a master's degree in Applied Computer Science.",
    experience: "Experience",
    projects: "Selected projects",
    skills: "Skills",
    education: "Education",
    languages: "Languages",
    languageList: ["Czech – native", "English – fluent (C1)"],
    interests: "Interests",
    interestList: "Bouldering, folk dance, reading, video games and D&D",
  },
  notFound: {
    title: "Page not found",
    text: "This page doesn't exist.",
    cta: "Back to the homepage",
  },
};
