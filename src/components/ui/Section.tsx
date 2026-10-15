import type { SectionId } from "@/content/sections";
import { RevealText } from "./RevealText";

export function Section({ id, children }: { id: SectionId; children: React.ReactNode }) {
  return (
    <section id={id} className="flex w-full flex-col justify-center px-(--gutter) py-28 md:min-h-svh md:py-44">
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
    <header className="mb-10 md:mb-14">
      <h2 className="max-w-[18ch] font-serif text-[clamp(2.5rem,7vw,6rem)] leading-[1.02] text-balance">
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
