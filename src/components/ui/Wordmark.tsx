export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none w-full px-(--gutter) select-none ${className}`}>
      <p className="@container">
        <span className="mb-[-8.8cqw] ml-[-0.93cqw] block font-serif text-[31.23cqw] leading-none text-text/[0.035]">
          Barbora
        </span>
      </p>
    </div>
  );
}
