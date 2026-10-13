import { education, experience } from "@/content/profile";
import type { ExperienceDictionary } from "@/i18n/dictionaries/types";
import { formatPeriod } from "@/lib/format";
import { Tabs } from "../Tabs";
import { Section, SectionHeading } from "../ui/Section";

export function Experience({ dict }: { dict: ExperienceDictionary }) {
  const work = (
    <Timeline
      entries={experience.map(({ id, company, start, end }) => {
        const { role, employment, points } = dict.work[id];
        return {
          id,
          title: role,
          subtitle: `${company} · ${employment}`,
          period: formatPeriod(start, end, dict.present),
          points,
          current: end === null,
        };
      })}
    />
  );

  const school = (
    <Timeline
      entries={education.map(({ id, start, end }) => {
        const { degree, field, points } = dict.education[id];
        return { id, title: degree, subtitle: `${field} · ${dict.university}`, period: formatPeriod(start, end), points };
      })}
    />
  );

  return (
    <Section id="experience">
      <SectionHeading title={dict.title} />
      <div data-reveal>
        <Tabs
          label={dict.title}
          tabs={[
            { id: "work", label: dict.tabs.work, content: work },
            { id: "education", label: dict.tabs.education, content: school },
          ]}
        />
      </div>
    </Section>
  );
}

type Entry = { id: string; title: string; subtitle: string; period: string; points: string[]; current?: boolean };

function Timeline({ entries }: { entries: Entry[] }) {
  return (
    <ol className="border-t border-line/70">
      {entries.map(({ id, title, subtitle, period, points, current }) => (
        <li key={id} data-reveal className="grid gap-x-12 gap-y-4 border-b border-line/70 py-10 md:grid-cols-2 md:py-12">
          <div>
            <p
              className={`flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.2em] uppercase tabular-nums ${
                current ? "text-accent" : "text-faint"
              }`}
            >
              {current && <span aria-hidden="true" className="size-1.5 animate-pulse rounded-full bg-accent" />}
              {period}
            </p>
            <h3 className="mt-3 font-serif text-2xl md:text-3xl">{title}</h3>
            <p className="mt-2 text-sm text-muted">{subtitle}</p>
          </div>
          {points.length > 0 && (
            <ul className="space-y-2 leading-relaxed text-muted md:pt-7">
              {points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2.5 size-1 shrink-0 rounded-full bg-accent/70" />
                  {point}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  );
}
