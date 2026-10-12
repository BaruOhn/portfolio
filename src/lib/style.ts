import type { CSSProperties } from "react";

/** Sets `--i`, which animations multiply into a staggered delay. */
export const stagger = (i: number) => ({ "--i": i }) as CSSProperties;
