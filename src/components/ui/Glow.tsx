const variants = {
  hero: {
    base: "bg-[linear-gradient(to_bottom,#27254b,#1e1f3e_55%,var(--color-bg))]",
    lights: [
      "-top-[35%] -left-[15%] size-[65rem] bg-[radial-gradient(closest-side,rgb(144_126_230/0.36),transparent)]",
      "top-0 -right-[20%] size-[60rem] bg-[radial-gradient(closest-side,rgb(112_138_222/0.28),transparent)] [animation-delay:-9s]",
      "top-[25%] left-[30%] size-[40rem] bg-[radial-gradient(closest-side,rgb(186_190_245/0.09),transparent)] [animation-delay:-4s]",
    ],
  },
  band: {
    base: "bg-[radial-gradient(75%_60%_at_50%_50%,#232448,transparent),linear-gradient(to_bottom,var(--color-bg),#181933_30%,#1b1c3b_50%,#181933_70%,var(--color-bg))] [mask-image:linear-gradient(transparent,#000_35%,#000_65%,transparent)]",
    lights: [
      "top-[10%] -left-[22%] size-[52rem] bg-[radial-gradient(closest-side,rgb(144_126_230/0.22),transparent)]",
      "top-[25%] -right-[24%] size-[50rem] bg-[radial-gradient(closest-side,rgb(112_138_222/0.18),transparent)] [animation-delay:-9s]",
      "top-[22%] left-[25%] size-[38rem] bg-[radial-gradient(closest-side,rgb(186_190_245/0.06),transparent)] [animation-delay:-4s]",
    ],
  },
};

export function Glow({ variant = "hero" }: { variant?: keyof typeof variants }) {
  const { base, lights } = variants[variant];
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${base}`}>
      {lights.map((light) => (
        <div key={light} className={`animate-drift absolute max-w-none rounded-full ${light}`} />
      ))}
    </div>
  );
}
