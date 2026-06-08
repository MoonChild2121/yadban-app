"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Why us", href: "#why" },
  { label: "Resources", href: "#resources" },
  { label: "Community", href: "#community" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-bg/75 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5">
        <Link href="#top" aria-label="Yaadbaan home" className="rounded-md">
          <Logo />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 rounded-full border border-border/60 bg-surface/60 px-2 py-1 backdrop-blur-sm md:flex"
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-[0.95rem] font-medium text-muted transition-colors hover:bg-ink/5 hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#community"
          className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-bg transition-transform hover:scale-[1.03]"
        >
          Get support
        </a>
      </div>
    </header>
  );
}
