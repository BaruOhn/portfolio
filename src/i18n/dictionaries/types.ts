import type {
  EducationId,
  ExperienceId,
  ProjectId,
  ProjectLink,
  TechGroupId,
  TranslatedTech,
} from "@/content/profile";
import type { SectionId } from "@/content/sections";

type SectionHeading = { title: string; text?: string };

export type NavDictionary = {
  label: string;
  sections: Record<SectionId, string>;
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
    /** Small line above the name */
    greeting: string;
    intro: string;
    ctaPrimary: string;
    cv: string;
    photoAlt: string;
  };
  experience: ExperienceDictionary;
  technologies: SectionHeading & {
    groups: Record<TechGroupId, string>;
    labels: Record<TranslatedTech, string>;
  };
  projects: SectionHeading & {
    links: Record<ProjectLink, string>;
    prev: string;
    next: string;
    items: Record<ProjectId, { type: string; title: string; description: string; imageAlt?: string }>;
  };
  contact: {
    title: string;
    note: string;
    email: string;
    phone: string;
  };
  footer: {
    tagline: string;
    cats: string;
    navigate: string;
    projects: string;
    socials: string;
    builtWith: string;
    rights: string;
  };
  /** Printable one-page CV (/[locale]/cv) */
  cv: {
    title: string;
    tagline: string;
    experience: string;
    projects: string;
    skills: string;
    education: string;
    languages: string;
    languageList: string[];
    interests: string;
    interestList: string;
  };
  notFound: { title: string; text: string; cta: string };
};
