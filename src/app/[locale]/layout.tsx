import type { Metadata } from "next";
import { Fraunces, Geist } from "next/font/google";
import { locales } from "@/i18n/config";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import "../globals.css";

const geistSans = Geist({ subsets: ["latin", "latin-ext"], variable: "--font-geist-sans" });
const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  axes: ["SOFT", "WONK", "opsz"],
  variable: "--font-fraunces",
});

export const generateStaticParams = () => locales.map((locale) => ({ locale }));

export async function generateMetadata(): Promise<Metadata> {
  const [locale, { meta }] = await Promise.all([getLocale(), getDictionary()]);
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: { cs: "/cs", en: "/en", "x-default": "/" },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "profile",
      locale: locale === "cs" ? "cs_CZ" : "en_US",
    },
  };
}

export default async function LocaleLayout({ children }: LayoutProps<"/[locale]">) {
  const [locale, dict] = await Promise.all([getLocale(), getDictionary()]);

  return (
    <html lang={locale} className={`${geistSans.variable} ${fraunces.variable}`}>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only rounded-xl bg-accent px-4 py-2 text-bg focus:not-sr-only focus:fixed focus:top-20 focus:left-4 focus:z-[60]"
        >
          {dict.skipToContent}
        </a>
        {children}
      </body>
    </html>
  );
}
