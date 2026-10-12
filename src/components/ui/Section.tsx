import type { SectionId } from "@/content/sections";
import { RevealText } from "./RevealText";

export function Section({ id, children }: { id: SectionId; children: React.ReactNode }) {
  return (
    // At least a full screen tall so scrolling moves through the page in even steps
    <section id={id} className="mx-auto flex min-h-svh w-full max-w-6xl flex-col justify-center px-4 py-24 sm:px-6 md:py-32">
      {children}
    </section>
  );
}

export function Label({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`text-[0.7rem] font-semibold tracking-[0.2em] text-faint uppercase ${className}`}>{children}</p>
  );
}

export function SectionHeading({ title, text }: { title: string; text?: string }) {
  return (
    <header className="mb-12 md:mb-16">
      <h2 className="max-w-[18ch] font-serif text-4xl leading-[1.05] text-balance md:text-6xl">
        <RevealText text={title} />
      </h2>
      {text && (
        <p data-reveal className="mt-5 max-w-xl text-muted">
          {text}
        </p>
      )}
    </header>
  );
}
