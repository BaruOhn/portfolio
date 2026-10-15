import { Nav } from "@/components/Nav";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Experience } from "@/components/sections/Experience";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
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
        <Projects dict={dict.projects} />
      </main>
      <Footer
        contact={dict.contact}
        footer={dict.footer}
        nav={dict.nav}
        projectTitles={dict.projects.items}
      />
      <ScrollReveal />
    </>
  );
}
