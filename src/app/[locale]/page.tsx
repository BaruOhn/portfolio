import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { getDictionary, getLocale } from "@/i18n/dictionaries";

export default async function HomePage() {
  const [locale, dict] = await Promise.all([getLocale(), getDictionary()]);

  return (
    <>
      <Nav dict={dict.nav} locale={locale} />
      <main id="main">
        <Hero dict={dict.hero} locale={locale} />
      </main>
    </>
  );
}
