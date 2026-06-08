/**
 * Yaadbaan logo lockup.
 * Mark: a vigil flame ("keeping memory alight") cradled in a cupping
 * curve that reads as care / protection. Wordmark in Fraunces with the
 * Urdu spelling یادبان as a culturally-grounded subscript.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      role="img"
      aria-label="Yaadbaan"
      fill="none"
    >
      {/* cupping curve — care */}
      <path
        d="M7 24c2.5 6.5 7.2 10 13 10s10.5-3.5 13-10"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        opacity="0.55"
      />
      {/* flame — memory kept alight */}
      <path
        d="M20 4c4.2 4.6 6.6 8.2 6.6 12.2A6.6 6.6 0 0 1 20 23a6.6 6.6 0 0 1-6.6-6.8C13.4 12.2 15.8 8.6 20 4Z"
        fill="currentColor"
      />
      {/* inner glow */}
      <path
        d="M20 11.5c1.9 2.2 2.9 3.9 2.9 5.6a2.9 2.9 0 1 1-5.8 0c0-1.7 1-3.4 2.9-5.6Z"
        fill="var(--color-bg)"
        opacity="0.85"
      />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <LogoMark className="h-9 w-9 text-teal" />
      <span className="flex items-baseline gap-2">
        <span className="font-display text-[1.7rem] font-semibold leading-none tracking-[-0.01em] text-ink">
          Yaadbaan
        </span>
        <span
          className="text-base leading-none text-teal-ink"
          lang="ur"
          dir="rtl"
          aria-hidden="true"
        >
          یادبان
        </span>
      </span>
    </span>
  );
}
