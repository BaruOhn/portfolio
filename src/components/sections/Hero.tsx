import Image from "next/image";
import portrait from "@/assets/portrait.jpg";
import { cvFile, person, socials } from "@/content/profile";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/types";
import { stagger } from "@/lib/style";
import { ButtonLink } from "../ui/Button";
import { Glow } from "../ui/Glow";
import { ArrowRightIcon, DownloadIcon, socialIcons } from "../ui/Icons";
import { Motes } from "../ui/Motes";
import { RevealText } from "../ui/RevealText";
import { Wordmark } from "../ui/Wordmark";

export function Hero({ dict, locale }: { dict: Dictionary["hero"]; locale: Locale }) {
  return (
    <section id="top" className="relative isolate flex min-h-svh flex-col justify-center overflow-hidden">
      <Glow />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-4 pt-32 pb-[clamp(10rem,21vw,14rem)] sm:px-6 lg:grid-cols-[1.35fr_1fr]">
        <div>
          <p className="font-serif text-xl text-muted md:text-2xl">
            <RevealText text={dict.greeting} mode="load" baseDelay={100} />
          </p>
          <h1 className="mt-3 max-w-[12ch] font-serif text-6xl leading-[0.98] text-balance sm:text-7xl xl:text-8xl">
            <RevealText text={person.name} mode="load" baseDelay={300} />
          </h1>

          <p className="animate-rise mt-8 max-w-lg leading-relaxed text-muted" style={stagger(4)}>
            {dict.intro}
          </p>

          <div className="animate-rise mt-10 flex flex-wrap items-center gap-3" style={stagger(5)}>
            <Motes>
              <ButtonLink href="#projects">
                {dict.ctaPrimary} <ArrowRightIcon />
              </ButtonLink>
            </Motes>
            <ButtonLink href={cvFile(locale)} download variant="secondary">
              <DownloadIcon /> {dict.cv}
            </ButtonLink>

            <span aria-hidden="true" className="mx-2 hidden h-6 w-px bg-line sm:block" />

            <ul className="flex gap-1">
              {socials.map(({ id, label, href }) => {
                const Icon = socialIcons[id];
                return (
                  <li key={id}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      title={label}
                      className="grid size-10 place-items-center rounded-full text-muted transition-colors duration-300 hover:bg-surface-2 hover:text-text"
                    >
                      <Icon className="size-[1.1rem]" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Right-aligned on large screens so its edge lines up with the wordmark */}
        <div className="animate-bloom relative mx-auto w-56 sm:w-64 lg:mr-0 lg:w-72" style={stagger(3)}>
          <div aria-hidden="true" className="animate-drift absolute -inset-10 rounded-full bg-accent/15 blur-3xl" />
          <Motes scale={2.5} circle className="block">
            <div className="relative aspect-square overflow-hidden rounded-full ring-1 ring-text/10">
              <Image
                src={portrait}
                alt={dict.photoAlt}
                preload
                placeholder="blur"
                sizes="(min-width: 1024px) 18rem, 16rem"
                className="size-full object-cover saturate-[0.85]"
              />
              {/* Indigo tint (keeps the photo's light and shadow) and a soft edge fade into the page */}
              <div aria-hidden="true" className="absolute inset-0 bg-[#2c2960] opacity-35 mix-blend-color" />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle,transparent_58%,rgb(15_16_32/0.5)),linear-gradient(to_bottom,transparent_55%,rgb(15_16_32/0.35))]"
              />
            </div>
          </Motes>
        </div>
      </div>

      <Wordmark className="absolute inset-x-0 bottom-0 -z-10" />
    </section>
  );
}
