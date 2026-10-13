import type { Technology } from "@/content/profile";

/** Renders a technology icon that is missing from the default simple icon set */
export function TechIcon({ icon }: Pick<Technology, "icon">) {
  if ("paths" in icon) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="size-4 shrink-0"
      >
        {icon.paths.map((d) => (
          <path key={d} d={d} />
        ))}
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 shrink-0 fill-current">
      <path d={icon.path} />
    </svg>
  );
}
