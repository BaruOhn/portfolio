import type { EducationId, ExperienceId, ProjectId, ProjectLink, TechGroupId } from "@/content/profile";
import type { SectionId } from "@/content/sections";

type SectionHeading = { kicker: string; title: string; text?: string };

export type NavDictionary = {
  label: string;
  sections: Record<SectionId, string>;
  game: string;
  switchTo: string;
};

export type ExperienceDictionary = SectionHeading & {
  tabs: { work: string; education: string };
  present: string;
  work: Record<ExperienceId, { role: string; employment: string; points: string[] }>;
  university: string;
  education: Record<EducationId, { degree: string; field: string; points: string[] }>;
};

export type Dictionary = {
  meta: { title: string; description: string };
  skipToContent: string;
  nav: NavDictionary;
  hero: {
    location: string;
    status: string;
    title: { text: string; highlight?: boolean }[];
    intro: string;
    ctaPrimary: string;
    cv: string;
    photoAlt: string;
  };
  experience: ExperienceDictionary;
  technologies: SectionHeading & {
    groups: Record<TechGroupId, { title: string; items?: string[] }>;
  };
  projects: SectionHeading & {
    links: Record<ProjectLink, string>;
    items: Record<ProjectId, { type: string; title: string; description: string; imageAlt?: string }>;
  };
  contact: {
    title: { text: string; highlight?: boolean }[];
    email: string;
    phone: string;
  };
  footer: {
    navigate: string;
    projects: string;
    socials: string;
    builtWith: string;
    rights: string;
  };
  notFound: { title: string; text: string; cta: string };
};
