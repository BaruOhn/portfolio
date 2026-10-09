export const locales = ["cs", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const LOCALE_COOKIE = "locale";

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);
