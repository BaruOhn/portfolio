import Image from "next/image";
import type { CSSProperties } from "react";
import { type ProjectId, type ProjectLink, projects } from "@/content/profile";
import type { Dictionary } from "@/i18n/dictionaries/types";
import { stagger } from "@/lib/style";
import { Rail } from "../Rail";
import { Chip, Pill, type Tone } from "../ui/Button";
import { ArrowUpRightIcon, GlobeIcon, GraduationIcon } from "../ui/Icons";
import { Section, SectionHeading } from "../ui/Section";

const linkOrder: ProjectLink[] = ["site", "paper", "repo"];

const projectStyles: Record<ProjectId, { tone: Tone; icon: typeof GlobeIcon }> = {
  gamePortfolio: { tone: "violet", icon: GlobeIcon },
  masterThesis: { tone: "amber", icon: GraduationIcon },
  bachelorThesis: { tone: "sky", icon: GraduationIcon },
  studioOpachova: { tone: "rose", icon: GlobeIcon },
};

export function Projects({ dict }: { dict: Dictionary["projects"] }) {
  return (
    <Section id="projects">
      <SectionHeading title={dict.title} />

      <Rail prevLabel={dict.prev} nextLabel={dict.next}>
        {projects.map(({ id, tags, image, links = {} }, i) => {
          const { type, title, description, imageAlt } = dict.items[id];
          const { tone, icon: Placeholder } = projectStyles[id];

          return (
            <li key={id} data-reveal style={stagger(i)} className="shrink-0 snap-start">
              <article
                style={{ "--tone": `var(--color-${tone})` } as CSSProperties}
                className="group relative flex h-136 w-[min(85vw,25rem)] flex-col overflow-hidden rounded-3xl border border-line/70 bg-surface"
              >
                {/* Glow in the project's colour behind the preview */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(85%_55%_at_50%_100%,color-mix(in_oklab,var(--tone)_22%,transparent),transparent_72%)]"
                />

                <div className="relative flex flex-col p-6 md:p-7">
                  <Chip tone={tone}>{type}</Chip>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-balance">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>

                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                      <li key={tag}>
                        <Pill>{tag}</Pill>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex min-h-5 flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
                    {linkOrder.map(
                      (link) =>
                        links[link] && (
                          <a
                            key={link}
                            href={links[link]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-muted transition-colors duration-300 hover:text-text"
                          >
                            {dict.links[link]} <ArrowUpRightIcon className="size-3.5" />
                          </a>
                        ),
                    )}
                  </div>
                </div>

                {/* Preview in a browser frame, bleeding off the bottom; it lifts on hover */}
                <div className="relative mx-auto mt-auto -mb-20 w-[85%] shrink-0 transition-transform duration-500 ease-ember group-hover:-translate-y-2">
                  <div className="rounded-t-2xl border border-line bg-bg p-2 shadow-[inset_0_1px_0_rgb(255_255_255/0.07)]">
                    <div aria-hidden="true" className="flex gap-1.5 px-1.5 pt-0.5 pb-2">
                      <span className="size-2 rounded-full bg-line" />
                      <span className="size-2 rounded-full bg-line" />
                      <span className="size-2 rounded-full bg-line" />
                    </div>
                    <div className="relative aspect-16/10 overflow-hidden rounded-lg bg-surface-2">
                      {image ? (
                        <Image src={image} alt={imageAlt ?? ""} fill sizes="22rem" className="object-cover object-top" />
                      ) : (
                        <div className="grid size-full place-items-center">
                          <Placeholder className="size-8 text-(--tone)" />
                        </div>
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
