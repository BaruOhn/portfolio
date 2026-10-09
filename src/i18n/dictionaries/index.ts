import { notFound } from "next/navigation";
import { locale as localeParam } from "next/root-params";
import { hasLocale, type Locale } from "@/i18n/config";
import { cs } from "./cs";
import { en } from "./en";

const dictionaries = { cs, en } satisfies Record<Locale, unknown>;

/** Current locale from the `[locale]` root segment (server only). */
export async function getLocale(): Promise<Locale> {
  const locale = await localeParam();
  if (!hasLocale(locale)) notFound();
  return locale;
}

export async function getDictionary() {
  return dictionaries[await getLocale()];
}
