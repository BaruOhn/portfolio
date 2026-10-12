const bases = {
  /* Lighter at the top, fading into the page colour at the bottom */
  hero: "bg-[linear-gradient(to_bottom,#27254b,#1e1f3e_55%,var(--color-bg))]",
  band: "bg-[linear-gradient(160deg,#27254b,#1e2141)]",
};

export function Glow({ variant = "hero" }: { variant?: keyof typeof bases }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${bases[variant]}`}>
      <div className="animate-drift absolute top-[-35%] left-[-15%] size-260 max-w-none rounded-full bg-[radial-gradient(closest-side,rgb(144_126_230/0.36),transparent)]" />
      <div className="animate-drift absolute top-0 right-[-20%] size-260 max-w-none rounded-full bg-[radial-gradient(closest-side,rgb(112_138_222/0.28),transparent)] [animation-delay:-9s]" />
      <div className="animate-drift absolute top-[25%] left-[30%] size-260 max-w-none rounded-full bg-[radial-gradient(closest-side,rgb(186_190_245/0.09),transparent)] [animation-delay:-4s]" />
    </div>
  );
}
