export type OutlineIcon = { paths: readonly string[] };

export const csharpIcon: OutlineIcon = {
  // Hexagon with a "C", after the C# logo
  paths: ["M12 2 20.66 7v10L12 22l-8.66-5V7z", "M14.6 9.4a3.6 3.6 0 1 0 0 5.2"],
};

export const sqlIcon: OutlineIcon = {
  // Database cylinder
  paths: ["M3 5a9 3 0 1 0 18 0a9 3 0 1 0-18 0", "M3 5v14a9 3 0 0 0 18 0V5", "M3 12a9 3 0 0 0 18 0"],
};

export const wireframeIcon: OutlineIcon = {
  // Page layout
  paths: ["M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z", "M3 9h18", "M9 21V9"],
};

export const prototypeIcon: OutlineIcon = {
  // Pointer clicking
  paths: [
    "M14 4.1 12 6",
    "m5.1 8-2.9-.8",
    "m6 12-1.9 2",
    "M7.2 2.2 8 5.1",
    "M9.04 9.69a.5.5 0 0 1 .65-.65l11 4.5a.5.5 0 0 1-.07.95l-4.35 1.04a1 1 0 0 0-.74.74l-1.04 4.35a.5.5 0 0 1-.95.07z",
  ],
};
