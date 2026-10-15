import type { CSSProperties } from "react";

const orangeCat = [
  "..O........O..",
  "..OO......OO..",
  "..OOOOOOOOOO..",
  "..OOOoOOoOOO..",
  "..OOKOOOOKOO..",
  "..OOOWPPWOOO..",
  "...OWWWWWWO...",
  "....OWWWWO....",
  "...OOWWWWOO...",
  "..OOoWWWWoOO..",
  "..OOOWWWWOOO..",
  ".OOoOWWWWOoOO.",
  ".OOOOWWWWOOOOO",
  ".OOOOWWWWOOO.O",
  ".OOOWWOOWWOOOO",
  "..OOWWOOWWOO..",
];

const whiteCat = [
  "..O........O..",
  "..OO......OO..",
  "..OOOOOOOOOO..",
  "..OOOOWWOOOO..",
  "..WWKWWWWKWW..",
  "..WWWWPPWWWW..",
  "...WWWWWWWW...",
  "....WWWWWW....",
  "...OWWWWWWO...",
  "..OOWWWWWWOO..",
  "..OOWWWWWWOO..",
  ".OOOWWWWWWOOO.",
  ".OOWWWWWWWWOOO",
  ".OWWWWWWWWWO.O",
  ".WWWWWWWWWWWOO",
  "..WWWWWWWWWW..",
];

const colors: Record<string, string> = {
  O: "#eb9a4f",
  o: "#c9773a",
  W: "#f4efe7",
  K: "#1c1b3a",
  P: "#f2a4ae",
};

function toPaths(grid: string[]) {
  const paths: Record<string, string> = {};
  grid.forEach((row, y) => {
    for (let x = 0; x < row.length; ) {
      const char = row[x];
      let end = x;
      while (row[end + 1] === char) end++;
      if (char !== ".") paths[char] = `${paths[char] ?? ""}M${x} ${y}h${end - x + 1}v1H${x}z`;
      x = end + 1;
    }
  });
  return paths;
}

const heart = toPaths([".HH.HH.", "HHHHHHH", "HHHHHHH", ".HHHHH.", "..HHH..", "...H..."]).H;

function Cat({ grid, mirrored = false, blinkDelay }: { grid: string[]; mirrored?: boolean; blinkDelay: string }) {
  const paths = toPaths(grid);
  return (
    <span className="group relative inline-block">
      <svg
        viewBox="0 0 7 6"
        shapeRendering="crispEdges"
        aria-hidden="true"
        className="pointer-events-none absolute -top-4 left-1/2 h-3 w-3.5 -translate-x-1/2 opacity-0 group-hover:animate-heart"
      >
        <path d={heart} fill="#f2a4ae" />
      </svg>
      <svg
        viewBox="0 0 14 16"
        shapeRendering="crispEdges"
        aria-hidden="true"
        className={`h-16 w-14 group-hover:animate-hop ${mirrored ? "-scale-x-100" : ""}`}
      >
        {Object.entries(paths).map(([char, d]) => (
          <path
            key={char}
            d={d}
            fill={colors[char]}
            className={char === "K" ? "animate-blink" : undefined}
            style={char === "K" ? ({ "--delay": blinkDelay } as CSSProperties) : undefined}
          />
        ))}
      </svg>
    </span>
  );
}

export function PixelCats({ label }: { label: string }) {
  return (
    <div role="img" aria-label={label} title={label} className="flex items-end gap-1 pt-4">
      <Cat grid={whiteCat} mirrored blinkDelay="-1.3s" />
      <Cat grid={orangeCat} blinkDelay="-3.1s" />
    </div>
  );
}
