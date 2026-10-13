import { Nav } from "@/components/Nav";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Technologies } from "@/components/sections/Technologies";
import { getDictionary, getLocale } from "@/i18n/dictionaries";

export default async function HomePage() {
  const [locale, dict] = await Promise.all([getLocale(), getDictionary()]);

  return (
    <>
      <Nav dict={dict.nav} locale={locale} />
      <main id="main">
        <Hero dict={dict.hero} locale={locale} />
        <Experience dict={dict.experience} />
        <Technologies dict={dict.technologies} />
      </main>
    </>
  );
}
