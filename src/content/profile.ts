/**
 * Locale-independent facts. All translatable text lives in `src/i18n/dictionaries`,
 * keyed by the ids defined here, so a missing translation is a type error.
 */

import {
  type SimpleIcon,
  siCss,
  siDart,
  siDeepseek,
  siDocker,
  siDotnet,
  siFigma,
  siFlutter,
  siGithub,
  siHtml5,
  siJavascript,
  siJira,
  siNextdotjs,
  siNodedotjs,
  siOpenrouter,
  siPostgresql,
  siPostman,
  siPrisma,
  siReact,
  siTailwindcss,
  siTrello,
  siTypescript,
  siVercel,
} from "simple-icons";
import type { StaticImageData } from "next/image";
import bachelorThesisShot from "@/assets/projects/bachelor-thesis.jpg";
import gamePortfolioShot from "@/assets/projects/game-portfolio.jpg";
import studioOpachovaShot from "@/assets/projects/studio-opachova.jpg";
import type { Locale } from "@/i18n/config";
import { csharpIcon, type OutlineIcon, prototypeIcon, sqlIcon, wireframeIcon } from "./outline-icons";

// TODO: replace with the deployed URL of the game-style portfolio
export const gameSiteUrl = "https://TODO-game-portfolio.vercel.app";

export const person = {
  name: "Barbora Ohnoutková",
  location: "Ostrava",
  email: "barbora.ohnoutkova@seznam.cz",
  phone: "+420 736 443 891",
} as const;

export const socials = [
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/barbora-ohnoutková-7998711ab" },
  { id: "github", label: "GitHub", href: "https://github.com/BaruOhn" },
  { id: "storygraph", label: "StoryGraph", href: "https://app.thestorygraph.com/profile/buri" },
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/ohnoutkova.b/" },
] as const;

export const cvFile = (locale: Locale) => `/cv/ohnoutkova-cv-${locale}.pdf`;

export type TranslatedTech = "wireframing" | "prototyping";

export type Technology = { name: string; icon: SimpleIcon | OutlineIcon; label?: TranslatedTech };

export const techGroups = [
  {
    id: "languages",
    items: [
      { name: "TypeScript", icon: siTypescript },
      { name: "JavaScript", icon: siJavascript },
      { name: "HTML", icon: siHtml5 },
      { name: "CSS", icon: siCss },
      { name: "Dart", icon: siDart },
      { name: "C#", icon: csharpIcon },
      { name: "SQL", icon: sqlIcon },
    ],
  },
  {
    id: "frameworks",
    items: [
      { name: "React", icon: siReact },
      { name: "Next.js", icon: siNextdotjs },
      { name: "Node.js", icon: siNodedotjs },
      { name: "Tailwind CSS", icon: siTailwindcss },
      { name: "Flutter", icon: siFlutter },
      { name: "ASP.NET", icon: siDotnet },
    ],
  },
  {
    id: "tools",
    items: [
      { name: "Git & GitHub", icon: siGithub },
      { name: "Docker", icon: siDocker },
      { name: "Postman", icon: siPostman },
      { name: "PostgreSQL", icon: siPostgresql },
      { name: "Vercel", icon: siVercel },
      { name: "Prisma", icon: siPrisma },
    ],
  },
  {
    id: "design",
    items: [
      { name: "Figma", icon: siFigma },
      { name: "Wireframing", icon: wireframeIcon, label: "wireframing" },
      { name: "Prototyping", icon: prototypeIcon, label: "prototyping" },
    ],
  },
  {
    id: "management",
    items: [
      { name: "Scrum", icon: wireframeIcon },
      { name: "Kanban", icon: wireframeIcon },
      { name: "PRINCE2", icon: wireframeIcon },
      { name: "Jira", icon: siJira },
      { name: "Trello", icon: siTrello },
      { name: "Projektově", icon: prototypeIcon },
    ],
  },
  { id: "ai", items: [{ name: "DeepSeek", icon: siDeepseek }, { name: "OpenRouter", icon: siOpenrouter }] },
] as const satisfies readonly { id: string; items: readonly Technology[] }[];
export type TechGroupId = (typeof techGroups)[number]["id"];

type Period = { start: string; end: string | null };

export const experience = [
  { id: "smartgis", company: "Smartgis s.r.o.", start: "2023-04", end: "2026-09" },
  { id: "folklor", company: "Folklor bez hranic Ostrava", start: "2023-06", end: null },
  { id: "tietoevry", company: "TietoEVRY", start: "2022-07", end: "2022-12" },
  { id: "cokafe", company: "Cokafe", start: "2019-05", end: "2022-07" },
  { id: "firemky", company: "Firemky s.r.o.", start: "2016-09", end: "2019-05" },
] as const satisfies readonly (Period & { id: string; company: string })[];
export type ExperienceId = (typeof experience)[number]["id"];

export const education = [
  { id: "master", start: "2024", end: "2027-01" },
  { id: "bachelor", start: "2021", end: "2024" },
] as const satisfies readonly (Period & { id: string })[];
export type EducationId = (typeof education)[number]["id"];

export type ProjectId = "gamePortfolio" | "masterThesis" | "bachelorThesis" | "studioOpachova";
export type ProjectLink = "site" | "paper" | "repo";

type Project = {
  id: ProjectId;
  tags: readonly string[];
  image?: StaticImageData;
  links?: Partial<Record<ProjectLink, string>>;
};

/** In display order (site carousel, footer and CV). */
export const projects: readonly Project[] = [
  // {
  //   id: "gamePortfolio",
  //   tags: ["Next.js", "TypeScript", "Tailwind CSS", "UI design"],
  //   image: gamePortfolioShot,
  //   links: { site: gameSiteUrl },
  // },
  {
    id: "studioOpachova",
    tags: ["HTML", "CSS", "JavaScript"],
    image: studioOpachovaShot,
    links: { site: "http://www.studio-opachova.cz" },
  },
  {
    id: "bachelorThesis",
    tags: ["JavaScript", "Node.js", "Express", "Tailwind CSS", "Puppeteer"],
    image: bachelorThesisShot,
    links: {
      paper: "https://theses.cz/id/tww8zl/ohnoutkova_bp.pdf",
      repo: "https://github.com/BaruOhn/study_plans",
    },
  },
  {
    id: "masterThesis",
    tags: ["Next.js", "TypeScript", "Prisma", "DeepSeek", "OpenRouter"],
  },
];
