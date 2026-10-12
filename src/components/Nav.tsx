"use client";

import { useEffect, useState } from "react";
import { sectionIds, type SectionId } from "@/content/sections";
import { LOCALE_COOKIE, type Locale, locales } from "@/i18n/config";
import type { NavDictionary } from "@/i18n/dictionaries/types";

export function Nav({ dict, locale }: { dict: NavDictionary; locale: Locale }) {
  const [active, setActive] = useState<SectionId | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      if (Math.abs(y - lastY) < 8) return;
      setHidden(y > lastY && y > 120);
      lastY = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id as SectionId;
          setActive((current) => (entry.isIntersecting ? id : current === id ? null : current));
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const id of sectionIds) {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={`animate-rise fixed inset-x-0 top-0 z-50 border-b transition-[translate,background-color,border-color] duration-500 ease-ember ${
        scrolled ? "border-line/60 bg-bg/70 backdrop-blur-md" : "border-transparent"
      } ${hidden ? "-translate-y-full" : ""}`}
    >
      <nav
        aria-label={dict.label}
        className="mx-auto grid h-16 max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-4 px-4 sm:px-6"
      >
        <a href="#top" aria-label="Barbora Ohnoutková" className="justify-self-start text-lg font-semibold">
          B.
        </a>

        <ul className="hidden items-center gap-8 text-sm text-muted md:flex">
          {sectionIds.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? "location" : undefined}
                className="transition-colors duration-300 hover:text-text aria-[current]:text-text"
              >
                {dict.sections[id]}
              </a>
            </li>
          ))}
        </ul>

        <div className="col-start-3 flex justify-self-end rounded-full border border-line bg-surface/60 p-0.5 text-[0.7rem] font-semibold tracking-widest uppercase">
          {locales.map((code) =>
            code === locale ? (
              <span key={code} aria-current="true" className="rounded-full bg-surface-2 px-2.5 py-1 text-text">
                {code}
              </span>
            ) : (
              <a
                key={code}
                href={`/${code}${active ? `#${active}` : ""}`}
                hrefLang={code}
                title={dict.switchTo}
                aria-label={dict.switchTo}
                onClick={() => {
                  document.cookie = `${LOCALE_COOKIE}=${code}; path=/; max-age=31536000; samesite=lax`;
                }}
                className="rounded-full px-2.5 py-1 text-faint transition-colors hover:text-text"
              >
                {code}
              </a>
            ),
          )}
        </div>
      </nav>
    </header>
  );
}
