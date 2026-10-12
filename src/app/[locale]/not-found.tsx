import { ButtonLink } from "@/components/ui/Button";
import { Glow } from "@/components/ui/Glow";
import { Label } from "@/components/ui/Section";
import { getDictionary, getLocale } from "@/i18n/dictionaries";

export default async function NotFound() {
  const [locale, { notFound }] = await Promise.all([getLocale(), getDictionary()]);

  return (
    <main className="relative isolate grid min-h-svh place-items-center overflow-hidden px-4 text-center">
      <Glow />
      <div className="animate-rise">
        <Label>404</Label>
        <h1 className="mt-4 font-serif text-5xl md:text-6xl">{notFound.title}</h1>
        <p className="mt-4 text-muted">{notFound.text}</p>
        <ButtonLink href={`/${locale}`} className="mt-10">
          {notFound.cta}
        </ButtonLink>
      </div>
    </main>
  );
}
