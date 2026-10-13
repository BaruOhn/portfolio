import { techGroups } from "@/content/profile";
import type { Dictionary } from "@/i18n/dictionaries/types";
import { TechIcon } from "../TechIcon";
import { Section, SectionHeading } from "../ui/Section";
 
export function Technologies({ dict }: { dict: Dictionary["technologies"] }) {
  return (
    <Section id="technologies">
      <SectionHeading title={dict.title} text={dict.text} />

      <dl className="border-t border-line/70">
        {techGroups.map(({ id, items }) => (
          <div key={id} data-reveal className="grid gap-x-12 gap-y-4 border-b border-line/70 py-8 md:grid-cols-[14rem_1fr]">
            <dt className="font-serif text-xl">{dict.groups[id]}</dt>
            <dd>
              <ul className="flex flex-wrap gap-x-7 gap-y-3 text-muted">
                {items.map((tech) => (
                  <li key={tech.name} className="inline-flex items-center gap-2">
                    <span className="text-faint">
                      <TechIcon icon={tech.icon} />
                    </span>
                    {"label" in tech ? dict.labels[tech.label] : tech.name}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
