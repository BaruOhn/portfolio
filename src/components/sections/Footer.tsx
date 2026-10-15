import { person, projects, socials } from "@/content/profile";
import { sectionIds } from "@/content/sections";
import type { Dictionary } from "@/i18n/dictionaries/types";
import { ButtonLink } from "../ui/Button";
import { Glow } from "../ui/Glow";
import { MailIcon, PhoneIcon, socialIcons } from "../ui/Icons";
import { Motes } from "../ui/Motes";
import { PixelCats } from "../ui/PixelCats";
import { RevealText } from "../ui/RevealText";
import { Label } from "../ui/Section";
import { Wordmark } from "../ui/Wordmark";

type Props = Pick<Dictionary, "contact" | "footer" | "nav"> & {
  projectTitles: Dictionary["projects"]["items"];
};

async function getYear() {
  "use cache";
  return new Date().getFullYear();
}

export async function Footer({ contact, footer, nav, projectTitles }: Props) {
  const columns = [
    {
      title: footer.navigate,
      links: sectionIds.map((id) => ({
        label: nav.sections[id],
        href: `#${id}`,
      })),
    },
    {
      title: footer.projects,
      links: projects.map(({ id }) => ({
        label: projectTitles[id].shortTitle ?? projectTitles[id].title,
        href: "#projects",
      })),
    },
    {
      title: footer.socials,
      links: socials.map(({ label, href }) => ({ label, href })),
    },
  ];

  return (
    <footer id="contact" className="relative isolate overflow-hidden">
      <div className="relative isolate flex items-center overflow-hidden md:min-h-svh">
        <Glow variant="band" />
        <div className="mx-auto flex w-[min(56rem,90vw)] flex-col items-center py-32 text-center md:py-52">
          <h2 className="max-w-[16ch] font-serif text-[clamp(2.5rem,7vw,6rem)] leading-[1.02] text-balance">
            <RevealText text={contact.title} />
          </h2>

          <div
            data-reveal
            className="mt-12 flex flex-wrap justify-center gap-3"
          >
            <Motes>
              <ButtonLink href={`mailto:${person.email}`}>
                <MailIcon />
                <span className="sr-only">{contact.email}: </span>
                {person.email}
              </ButtonLink>
            </Motes>
            <ButtonLink
              href={`tel:${person.phone.replaceAll(" ", "")}`}
              variant="secondary"
            >
              <PhoneIcon />
              <span className="sr-only">{contact.phone}: </span>
              {person.phone}
            </ButtonLink>
            {socials
              .filter(({ id }) => id === "linkedin" || id === "github")
              .map(({ id, label, href }) => {
                const Icon = socialIcons[id];
                return (
                  <ButtonLink
                    key={id}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                  >
                    <Icon /> {label}
                  </ButtonLink>
                );
              })}
          </div>

          <div data-reveal className="mt-10">
            <Label>{contact.note}</Label>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col md:min-h-svh">
        <div className="relative z-10 w-full px-(--gutter) pt-28 pb-16 md:pt-36">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
            <div>
              <p className="font-serif text-3xl">{person.name}</p>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
                {footer.tagline}
              </p>
              <div className="mt-8">
                <PixelCats label={footer.cats} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3">
              {columns.map(({ title, links }) => (
                <nav key={title} aria-label={title}>
                  <Label>{title}</Label>
                  <ul className="mt-4 space-y-2.5 text-sm text-muted">
                    {links.map(({ label, href }) => (
                      <li key={label}>
                        <a
                          href={href}
                          {...(href.startsWith("http") && {
                            target: "_blank",
                            rel: "noopener noreferrer",
                          })}
                          className="transition-colors duration-300 hover:text-text"
                        >
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
            </div>
          </div>

          <div className="mt-16 flex flex-wrap justify-between gap-x-4 gap-y-1 border-t border-line/60 pt-8 text-xs text-faint">
            <p>
              © {await getYear()} {person.name} · {footer.rights}
            </p>
            <p>
              {footer.builtWith} 
            </p>
          </div>
        </div>

        <Wordmark className="mt-auto" />
      </div>
    </footer>
  );
}
