import type { CSSProperties } from "react";

type Props = {
  text: string;
  /** "load" animates right away (hero); "scroll" waits for <ScrollReveal /> */
  mode?: "load" | "scroll";
  /** Delay before the first word, for "load" */
  baseDelay?: number;
};

export function RevealText({ text, mode = "scroll", baseDelay = 0 }: Props) {
  const words = text.trim().split(/\s+/);

  return (
    <span data-reveal={mode === "scroll" ? "words" : undefined}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((word, i) => (
          <span key={i}>
            {i > 0 && " "}
            <span className="mb-[-0.14em] inline-block overflow-hidden pb-[0.14em] align-bottom">
              <span
                className={`word inline-block ${mode === "load" ? "animate-unmask" : ""}`}
                style={{ "--i": i, "--base": `${baseDelay}ms` } as CSSProperties}
              >
                {word}
              </span>
            </span>
          </span>
        ))}
      </span>
    </span>
  );
}
