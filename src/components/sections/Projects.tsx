import Image from "next/image";
import type { CSSProperties } from "react";
import { type ProjectId, type ProjectLink, projects } from "@/content/profile";
import type { Dictionary } from "@/i18n/dictionaries/types";
import { stagger } from "@/lib/style";
import { Rail } from "../Rail";
import { Chip, type Tone } from "../ui/Button";
import { ArrowUpRightIcon, ClockIcon } from "../ui/Icons";
import { Section, SectionHeading } from "../ui/Section";

const linkOrder: ProjectLink[] = ["site", "paper", "repo"];

const projectTones: Record<ProjectId, Tone> = {
  gamePortfolio: "violet",
  studioOpachova: "rose",
  bachelorThesis: "sky",
  masterThesis: "amber",
};

export function Projects({ dict }: { dict: Dictionary["projects"] }) {
  return (
    <Section id="projects">
      <SectionHeading title={dict.title} />

      <Rail prevLabel={dict.prev} nextLabel={dict.next}>
        {projects.map(({ id, tags, image, links = {} }, i) => {
          const { type, title, shortTitle, summary, imageAlt, status } =
            dict.items[id];
          const tone = projectTones[id];
          const cardTitle = shortTitle ?? title;
          const [primary, ...secondary] = linkOrder.filter(
            (link) => links[link],
          );

          return (
            <li
              key={id}
              data-reveal
              style={stagger(i)}
              className="flex w-[min(76vw,22rem)] shrink-0 snap-start"
            >
              <article
                style={{ "--tone": `var(--color-${tone})` } as CSSProperties}
                className={`relative isolate flex w-full flex-col overflow-hidden rounded-3xl border border-line/70 bg-surface group transition-colors duration-500 hover:border-(--tone)/40 has-[[data-primary]:focus-visible]:outline-2 has-[[data-primary]:focus-visible]:-outline-offset-2 has-[[data-primary]:focus-visible]:outline-accent"`}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(85%_55%_at_50%_100%,color-mix(in_oklab,var(--tone)_22%,transparent),transparent_72%)]"
                />

                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <Chip tone={tone}>{type}</Chip>
                  <h3 className="mt-4 line-clamp-2 font-serif text-[clamp(1.25rem,2vw,1.75rem)] leading-tight text-balance">
                    {cardTitle}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">
                    {summary}
                  </p>
                  <p className="mt-3 line-clamp-2 text-xs leading-5 text-faint">
                    {tags.join(" · ")}
                  </p>

                  <div className="mt-auto flex min-h-11 items-center gap-5 pt-5 text-sm font-medium">
                    {primary ? (
                      <a
                        data-primary
                        href={links[primary]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-muted transition-colors duration-300 group-hover:text-text after:absolute after:inset-0 after:z-10 focus-visible:outline-none"
                      >
                        <span className="sr-only">{cardTitle}: </span>
                        {dict.links[primary]}
                        <ArrowUpRightIcon className="size-3.5 transition-transform duration-300 ease-ember group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    ) : (
                      status && (
                        <p className="inline-flex items-center gap-1.5 text-muted">
                          <ClockIcon className="size-3.5" />
                          {status}
                        </p>
                      )
                    )}
                    {secondary.map((link) => (
                      <a
                        key={link}
                        href={links[link]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-20 inline-flex items-center gap-1 text-muted transition-colors duration-300 hover:text-text"
                      >
                        <span className="sr-only">{cardTitle}: </span>
                        {dict.links[link]}{" "}
                        <ArrowUpRightIcon className="size-3.5" />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="relative mx-auto -mb-8 w-[85%] shrink-0 transition-transform duration-500 ease-ember group-hover:-translate-y-2">
                  <div className="rounded-t-2xl border border-line bg-bg p-2 shadow-[inset_0_1px_0_rgb(255_255_255/0.07)]">
                    <div
                      aria-hidden="true"
                      className="flex gap-1.5 px-1.5 pt-0.5 pb-2"
                    >
                      <span className="size-2 rounded-full bg-line" />
                      <span className="size-2 rounded-full bg-line" />
                      <span className="size-2 rounded-full bg-line" />
                    </div>
                    <div className="relative grid aspect-5/3 place-items-center overflow-hidden rounded-lg bg-surface-2">
                      {image ? (
                        <Image
                          src={image}
                          alt={imageAlt ?? ""}
                          fill
                          placeholder="blur"
                          sizes="(min-width: 1024px) 22rem, (min-width: 640px) 19rem, 66vw"
                          className="object-cover object-top"
                        />
                      ) : (
                        <span className="inline-flex items-center gap-2 rounded-full border border-text/15 px-3 py-1 text-[0.6875rem] font-semibold tracking-[0.18em] text-muted uppercase">
                          <span
                            aria-hidden="true"
                            className="size-1.5 animate-pulse rounded-full bg-(--tone)"
                          />
                          {dict.inDevelopment}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </Rail>
    </Section>
  );
}
