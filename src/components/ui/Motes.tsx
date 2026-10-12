import type { CSSProperties } from "react";

// [left %, size px, duration s, delay s, rise px, sway px, phase, peak opacity] 
const motes = [
  [8, 2, 4.2, 0.3, 22, -3, 0.1, 0.85],
  [19, 3, 5.1, 2.4, 28, 4, 0.6, 0.7],
  [31, 2, 3.8, 1.1, 18, -4, 0.3, 0.9],
  [44, 2, 4.8, 3.2, 26, 3, 0.8, 0.6],
  [56, 3, 4.4, 0.8, 24, -3, 0.45, 0.8],
  [68, 2, 5.4, 2.0, 30, 4, 0.2, 0.75],
  [79, 2, 4.0, 3.6, 20, -2, 0.7, 0.9],
  [91, 3, 4.6, 1.6, 27, 3, 0.95, 0.65],
] as const;

type Props = {
  children: React.ReactNode;
  /** Multiplies how far (and how large) the specks rise – 1 for buttons */
  scale?: number;
  /** Start the specks on the outline of a circle instead of the top edge */
  circle?: boolean;
  className?: string;
};

/** Wraps an element and lets a few specks of light drift up from its top edge. */
export function Motes({ children, scale = 1, circle = false, className = "inline-flex" }: Props) {
  return (
    <span className={`relative ${className}`}>
      <span aria-hidden="true" className="pointer-events-none absolute inset-0">
        {motes.map(([left, size, duration, delay, rise, sway, phase, peak]) => (
          <span
            key={left}
            className="mote"
            style={
              {
                left: `${left}%`,
                // Top of the circle at this horizontal position, measured from the bottom
                bottom: circle ? `${50 + Math.sqrt(50 ** 2 - (left - 50) ** 2)}%` : undefined,
                width: size * Math.sqrt(scale),
                height: size * Math.sqrt(scale),
                "--duration": `${duration * Math.sqrt(scale)}s`,
                "--delay": `-${delay}s`,
                "--rise": `${rise * scale}px`,
                "--sway": `${sway}px`,
                "--phase": phase,
                "--peak": peak,
              } as CSSProperties
            }
          />
        ))}
      </span>
      {children}
    </span>
  );
}
