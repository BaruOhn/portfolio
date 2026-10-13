"use client";

import { useId, useRef, useState } from "react";

type Tab = { id: string; label: string; content: React.ReactNode };

export function Tabs({ tabs, label }: { tabs: Tab[]; label: string }) {
  const [selected, setSelected] = useState(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();

  const select = (index: number) => {
    const next = (index + tabs.length) % tabs.length;
    setSelected(next);
    buttons.current[next]?.focus();
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label={label}
        className="relative inline-grid rounded-full border border-line bg-surface/60 p-1"
        style={{ gridTemplateColumns: `repeat(${tabs.length}, minmax(0, 1fr))` }}
      >
        {/* Sliding highlight behind the selected tab */}
        <span
          aria-hidden="true"
          className="absolute inset-y-1 left-1 rounded-full bg-accent/15 ring-1 ring-accent/25 transition-transform duration-500 ease-ember"
          style={{ width: `calc((100% - 0.5rem) / ${tabs.length})`, transform: `translateX(${selected * 100}%)` }}
        />
        {tabs.map((tab, i) => (
          <button
            key={tab.id}
            ref={(el) => {
              buttons.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`${baseId}-tab-${tab.id}`}
            aria-selected={selected === i}
            aria-controls={`${baseId}-panel-${tab.id}`}
            tabIndex={selected === i ? 0 : -1}
            onClick={() => setSelected(i)}
            onKeyDown={(event) => {
              if (event.key === "ArrowRight") select(i + 1);
              if (event.key === "ArrowLeft") select(i - 1);
            }}
            className="relative px-6 py-2 text-sm font-medium text-muted transition-colors duration-300 aria-selected:text-text"
          >
            {tab.label}
          </button>
        ))}
      </div>

      {tabs.map((tab, i) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`${baseId}-panel-${tab.id}`}
          aria-labelledby={`${baseId}-tab-${tab.id}`}
          hidden={selected !== i}
          className="animate-rise mt-10"
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
}
