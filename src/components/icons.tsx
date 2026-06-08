/**
 * Small, hand-rolled stroke icons (no external icon dependency).
 * Inherit `currentColor`; decorative by default (aria-hidden).
 */
type IconProps = { className?: string };

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function ArrowRight({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function AlertTriangle({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
      <path d="M12 9v4M12 17h.01" />
    </svg>
  );
}

export function Heart({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M19 5.5a4.5 4.5 0 0 0-7 1 4.5 4.5 0 0 0-7-1 4.7 4.7 0 0 0 0 6.6L12 19l7-6.9a4.7 4.7 0 0 0 0-6.6Z" />
    </svg>
  );
}

export function MessageCircle({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M21 11.5a8 8 0 0 1-11.5 7.2L3 21l2.3-6.5A8 8 0 1 1 21 11.5Z" />
    </svg>
  );
}

export function ShieldCheck({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3 5 6v5c0 4.5 3 7.7 7 9 4-1.3 7-4.5 7-9V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function Users({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M16 19v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 17.5V19" />
      <circle cx="10" cy="8" r="3.2" />
      <path d="M20 19v-1.5a3.5 3.5 0 0 0-2.6-3.4M15.5 5.1a3.2 3.2 0 0 1 0 6" />
    </svg>
  );
}

export function Search({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.2-3.2" />
    </svg>
  );
}

export function Check({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="m5 12 4.5 4.5L19 7" />
    </svg>
  );
}

export function Phone({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M6.6 3.5h-2A1.5 1.5 0 0 0 3.1 5.2C3.5 14 10 20.5 18.8 20.9a1.5 1.5 0 0 0 1.7-1.5v-2a1.5 1.5 0 0 0-1.3-1.5l-2.3-.3a1.5 1.5 0 0 0-1.4.6l-.7.9a12 12 0 0 1-5.4-5.4l.9-.7a1.5 1.5 0 0 0 .6-1.4l-.3-2.3a1.5 1.5 0 0 0-1.5-1.3Z" />
    </svg>
  );
}
