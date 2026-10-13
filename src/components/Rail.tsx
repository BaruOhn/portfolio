"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRightIcon } from "./ui/Icons";

type Props = { children: React.ReactNode; prevLabel: string; nextLabel: string };

/** Horizontally scrollable list of cards with buttons to scroll left and right. */
export function Rail({ children, prevLabel, nextLabel }: Props) {
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
    <div>
      <div className="mb-6 flex justify-end gap-2">
        <button type="button" onClick={() => scrollByCard(-1)} disabled={edges.atStart} aria-label={prevLabel} className={arrowClass}>
          <ArrowRightIcon className="size-4 rotate-180" />
        </button>
        <button type="button" onClick={() => scrollByCard(1)} disabled={edges.atEnd} aria-label={nextLabel} className={arrowClass}>
          <ArrowRightIcon className="size-4" />
        </button>
      </div>
      <ul
        ref={list}
        className="-ml-4 mr-[calc(50%-50vw)] flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto pr-6 pb-6 pl-4 scrollbar-none sm:-ml-6 sm:scroll-px-6 sm:pl-6 [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </ul>
    </div>
  );
}
