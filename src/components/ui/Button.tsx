import type { ComponentProps } from "react";

const variants = {
  primary: "border border-accent/50 bg-accent/30 text-text hover:border-accent/70 hover:bg-accent/40",
  secondary: "border border-text/15 bg-text/[0.06] text-text hover:border-text/25 hover:bg-text/10",
};

export type ButtonVariant = keyof typeof variants;

export const buttonClass = (variant: ButtonVariant = "primary") =>
  `inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium tracking-[0.2px] transition-colors duration-300 ease-ember active:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${variants[variant]}`;

export function ButtonLink({ variant, className = "", ...props }: ComponentProps<"a"> & { variant?: ButtonVariant }) {
  return <a {...props} className={`${buttonClass(variant)} ${className}`} />;
}

export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface-2/60 px-2.5 py-1 text-xs text-muted">
      {children}
    </span>
  );
}

const tones = {
  amber: "text-amber border-amber/30 bg-amber/10",
  violet: "text-violet border-violet/30 bg-violet/10",
  sky: "text-sky border-sky/30 bg-sky/10",
  rose: "text-rose border-rose/30 bg-rose/10",
};

export type Tone = keyof typeof tones;

export function Chip({ tone, children }: { tone: Tone; children: React.ReactNode }) {
  return (
    <span
      className={`inline-flex w-fit items-center rounded-full border px-2.5 py-0.5 text-[0.65rem] font-semibold tracking-[0.18em] uppercase ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
