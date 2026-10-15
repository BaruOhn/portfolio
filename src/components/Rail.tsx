"use client";

import { Children, type CSSProperties, useEffect, useRef, useState } from "react";
import { ArrowRightIcon } from "./ui/Icons";

type Props = { children: React.ReactNode; prevLabel: string; nextLabel: string };

export function Rail({ children, prevLabel, nextLabel }: Props) {
  const count = Children.count(children);
  const list = useRef<HTMLUListElement>(null);
  const [edges, setEdges] = useState({ atStart: true, atEnd: false });

  useEffect(() => {
    const el = list.current;
    if (!el) return;
    const update = () =>
      setEdges({
        atStart: el.scrollLeft <= 4,
        atEnd: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
      });
    const frame = requestAnimationFrame(update);
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollByCard = (direction: 1 | -1) => {
    const el = list.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (el && card) el.scrollBy({ left: direction * (card.offsetWidth + 16), behavior: "smooth" });
  };

  const arrowClass =
    "grid size-10 place-items-center rounded-full border border-line text-muted transition-colors duration-300 hover:border-accent/40 hover:text-text disabled:pointer-events-none disabled:opacity-30";

  return (
    <div className="rail @container/rail" data-count={count} style={{ "--rail-count": count } as CSSProperties}>
      <div className="rail-arrows mb-6 flex justify-end gap-2">
        <button type="button" onClick={() => scrollByCard(-1)} disabled={edges.atStart} aria-label={prevLabel} className={arrowClass}>
          <ArrowRightIcon className="size-4 rotate-180" />
        </button>
        <button type="button" onClick={() => scrollByCard(1)} disabled={edges.atEnd} aria-label={nextLabel} className={arrowClass}>
          <ArrowRightIcon className="size-4" />
        </button>
      </div>
      <ul
        ref={list}
        className="rail-list -mx-(--gutter) flex snap-x snap-mandatory scroll-px-(--gutter) gap-4 overflow-x-auto px-(--gutter) pb-6 scrollbar-none [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </ul>
    </div>
  );
}
