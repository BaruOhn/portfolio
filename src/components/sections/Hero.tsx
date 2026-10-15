import Image from "next/image";
import portrait from "@/assets/portrait.webp";
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
    <section id="top" className="relative isolate flex min-h-svh flex-col overflow-hidden">
      <Glow />

      <div className="grid w-full flex-1 content-center items-center gap-[clamp(1.5rem,6svh,3.5rem)] px-(--gutter) pt-[calc(4rem+clamp(0.5rem,2.5svh,3rem))] pb-[calc(min(90vw,75rem)*0.183+clamp(0.5rem,2.5svh,3rem))] lg:grid-cols-[1.35fr_1fr] lg:gap-14">
        <div>
          <p className="font-serif text-xl text-muted md:text-2xl">
            <RevealText text={dict.greeting} mode="load" baseDelay={100} />
          </p>
          <h1 className="mt-2 max-w-[12ch] font-serif text-[clamp(3rem,min(5vw+2rem,11svh),6rem)] leading-[0.98] text-balance sm:mt-3">
            <RevealText text={person.name} mode="load" baseDelay={300} />
          </h1>

          <p
            className="animate-rise mt-[clamp(1.25rem,3.5svh,2rem)] max-w-lg text-[clamp(1.0625rem,1.35vw,1.375rem)] leading-[1.55] text-muted"
            style={stagger(4)}
          >
            {dict.intro}
          </p>

          <div className="animate-rise mt-[clamp(1.5rem,4.5svh,2.5rem)] flex flex-wrap items-center gap-2 sm:gap-3" style={stagger(5)}>
            <Motes>
              <ButtonLink href="#projects">
                {dict.ctaPrimary} <ArrowRightIcon />
              </ButtonLink>
            </Motes>
            <ButtonLink href={cvFile(locale)} download variant="secondary">
              <DownloadIcon /> {dict.cv}
            </ButtonLink>

            <span aria-hidden="true" className="mx-2 hidden h-6 w-px bg-line sm:block" />

            <ul className="hidden gap-1 sm:flex">
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

        <div
          className="animate-bloom relative order-first mx-auto w-[min(12rem,22svh)] lg:order-0 lg:mr-[10%] lg:w-72"
          style={stagger(3)}
        >
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
              <div aria-hidden="true" className="absolute inset-0 bg-[#2c2960] opacity-35 mix-blend-color" />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle,transparent_58%,rgb(15_16_32/0.5)),linear-gradient(to_bottom,transparent_55%,rgb(15_16_32/0.35))]"
              />
            </div>
          </Motes>
        </div>
      </div>

      <a
        href="#experience"
        className="animate-rise absolute bottom-[clamp(2rem,5svh,3rem)] left-(--gutter) inline-flex items-center gap-2 text-[0.6875rem] font-semibold tracking-[0.3em] text-text/70 uppercase transition-colors duration-300 hover:text-text"
        style={stagger(6)}
      >
        {dict.scroll}
        <ArrowRightIcon className="size-3.5 rotate-90" />
      </a>

      <Wordmark className="absolute inset-x-0 bottom-0 -z-10" />
    </section>
  );
}
