/** Anchor ids of the page sections, in navigation order. */
export const sectionIds = ["experience", "technologies", "projects", "contact"] as const;
export type SectionId = (typeof sectionIds)[number];
