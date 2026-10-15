"use client";

import { useEffect, useState } from "react";
import { sectionIds, type SectionId } from "@/content/sections";
import { LOCALE_COOKIE, type Locale, locales } from "@/i18n/config";
import type { NavDictionary } from "@/i18n/dictionaries/types";
import { CloseIcon, MenuIcon } from "./ui/Icons";

export function Nav({ dict, locale }: { dict: NavDictionary; locale: Locale }) {
  const [active, setActive] = useState<SectionId | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
          setActive((current) =>
            entry.isIntersecting ? id : current === id ? null : current,
          );
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

  useEffect(() => {
    if (!menuOpen) return;
    const desktop = window.matchMedia("(min-width: 64rem)");
    const close = () => setMenuOpen(false);
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && close();
    const onResize = () => desktop.matches && close();
    document.documentElement.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);
    return () => {
      document.documentElement.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
    };
  }, [menuOpen]);

  const sectionLink = (id: SectionId) => ({
    href: `#${id}`,
    "aria-current": active === id ? ("location" as const) : undefined,
  });

  const languageToggle = (
    <div className="flex rounded-full border border-text/15 p-0.5 text-[0.7rem] font-semibold tracking-[0.2em] uppercase">
      {locales.map((code) =>
        code === locale ? (
          <span
            key={code}
            aria-current="true"
            className="rounded-full bg-accent/15 px-2.5 py-1 text-accent"
          >
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
            className="rounded-full px-2.5 py-1 text-text/60 transition-colors hover:text-text"
          >
            {code}
          </a>
        ),
      )}
    </div>
  );

  return (
    <>
      <header
        className={`animate-rise fixed inset-x-0 top-0 z-50 border-b transition-[translate,background-color,border-color] duration-500 ease-ember ${
          scrolled && !menuOpen
            ? "border-line/60 bg-bg/70 backdrop-blur-md"
            : "border-transparent"
        } ${hidden && !menuOpen ? "-translate-y-full" : ""}`}
      >
        <nav
          aria-label={dict.label}
          className="grid h-16 grid-cols-[1fr_auto_1fr] items-center gap-4 px-(--gutter)"
        >
          <a
            href="#top"
            aria-label="Barbora Ohnoutková"
            className="justify-self-start text-lg font-semibold"
          >
            B.
          </a>

          <ul className="hidden items-center gap-8 text-sm text-muted lg:flex">
            {sectionIds.map((id) => (
              <li key={id}>
                <a
                  {...sectionLink(id)}
                  className="transition-colors duration-300 hover:text-text aria-[current]:text-text"
                >
                  {dict.sections[id]}
                </a>
              </li>
            ))}
          </ul>

          <div className="col-start-3 flex items-center gap-3 justify-self-end">
            <div className="hidden lg:flex">{languageToggle}</div>

            <button
              type="button"
              aria-expanded={menuOpen}
              aria-controls="menu"
              aria-label={menuOpen ? dict.closeMenu : dict.openMenu}
              onClick={() => setMenuOpen((open) => !open)}
              className="grid size-10 place-items-center rounded-[0.625rem] border border-text/15 text-text transition-colors duration-300 hover:border-text/30 lg:hidden"
            >
              {menuOpen ? (
                <CloseIcon className="size-[1.1rem]" />
              ) : (
                <MenuIcon className="size-[1.1rem]" />
              )}
            </button>
          </div>
        </nav>
      </header>

      <div
        id="menu"
        inert={!menuOpen}
        className={`fixed inset-0 z-40 bg-bg/95 backdrop-blur-2xl transition-[opacity,visibility] duration-500 ease-ember lg:hidden ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <ul className="px-(--gutter) pt-24">
          {sectionIds.map((id, i) => (
            <li
              key={id}
              style={{
                transitionDelay: menuOpen ? `${100 + i * 60}ms` : "0ms",
              }}
              className={`border-b border-line/70 transition-[opacity,translate] duration-700 ease-ember ${
                menuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              <a
                {...sectionLink(id)}
                onClick={() => setMenuOpen(false)}
                className="flex items-baseline gap-5 py-5 font-serif text-4xl text-text transition-colors duration-300 hover:text-accent aria-[current]:text-accent"
              >
                <span className="font-sans text-[0.7rem] font-semibold tracking-[0.2em] text-faint tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {dict.sections[id]}
              </a>
            </li>
          ))}
        </ul>
        <div className="absolute bottom-[max(2rem,env(safe-area-inset-bottom))] left-(--gutter)">
          {languageToggle}
        </div>
      </div>
    </>
  );
}
