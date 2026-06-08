"use client";

import { useEffect, useState } from "react";

/**
 * Fixed full-page background made of stacked gradient layers — one per
 * section. As a section crosses the viewport centre it becomes "active"
 * and its layer crossfades in (opacity transition), so the page colour
 * shifts smoothly instead of snapping at section edges.
 */
const LAYERS: { id: string; gradient: string }[] = [
  { id: "hero", gradient: "linear-gradient(180deg, #fbf6ec 0%, #faf3e8 100%)" },
  { id: "about", gradient: "linear-gradient(180deg, #faf3e8 0%, #f6eede 100%)" },
  { id: "why", gradient: "linear-gradient(180deg, #f6eede 0%, #f4ecdb 100%)" },
  { id: "resources", gradient: "linear-gradient(180deg, #f4ecdb 0%, #f1e8d6 100%)" },
  { id: "community", gradient: "linear-gradient(180deg, #f1e8d6 0%, #f4ecdb 100%)" },
];

export function ScrollBackground() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const sections = LAYERS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      // a section is "active" while it occupies the vertical centre band
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10">
      {LAYERS.map((layer) => (
        <div
          key={layer.id}
          className="absolute inset-0 transition-opacity duration-[900ms] ease-in-out"
          style={{
            background: layer.gradient,
            opacity: active === layer.id ? 1 : 0,
          }}
        />
      ))}
    </div>
  );
}
