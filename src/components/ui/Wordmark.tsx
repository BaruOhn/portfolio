/**
 * Backdrop wordmark for the hero and footer section.
 */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none mx-auto w-full max-w-6xl px-4 select-none sm:px-6 ${className}`}>
      <p className="@container">
        <span className="mb-[-8.8cqw] ml-[-0.93cqw] block font-serif text-[31.23cqw] leading-none text-text/[0.035]">
          Barbora
        </span>
      </p>
    </div>
  );
}
