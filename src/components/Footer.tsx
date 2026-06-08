import { Logo } from "./Logo";
import { Reveal } from "./Reveal";
import { ArrowRight } from "./icons";

export function Footer() {
  return (
    <footer className="relative z-10 overflow-hidden bg-gradient-to-br from-teal to-teal-ink text-white">
      {/* oversized soft glow */}
      <div
        aria-hidden="true"
        className="blob pointer-events-none absolute right-[-6rem] top-1/4 h-[36rem] w-[36rem] -translate-y-1/3 rounded-full bg-marigold/25 blur-3xl"
      />

      {/* Closing call-to-action */}
      <div className="relative mx-auto max-w-3xl px-5 pt-28 pb-20 text-center">
        <Reveal as="h2" delay={0} className="text-[clamp(2.25rem,5.5vw,4rem)] text-white">
          Take the next small step today.
        </Reveal>
        <Reveal as="p" delay={120} className="mx-auto mt-6 max-w-xl text-xl leading-relaxed text-white/85">
          You don&apos;t have to figure all of this out at once. Start with one
          guide, one conversation, one circle.
        </Reveal>
        <Reveal delay={240} className="mt-9">
          <a
            href="#resources"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-teal-ink transition-transform hover:scale-[1.03]"
          >
            Explore the care guides
            <ArrowRight className="h-5 w-5" />
          </a>
        </Reveal>
      </div>

      {/* Footer body */}
      <div className="relative mx-auto max-w-6xl px-5 pb-12">
        <div className="flex flex-col gap-10 border-t border-white/20 pt-12 md:flex-row md:justify-between">
          <div className="max-w-sm space-y-3">
            <div className="[&_.text-ink]:text-white [&_.text-teal-ink]:text-marigold [&_.text-teal]:text-marigold">
              <Logo />
            </div>
            <p className="text-[0.95rem] leading-relaxed text-white/75">
              Empathetic, vetted, and culturally-grounded guidance for Pakistani
              families caring for a loved one with dementia.
            </p>
          </div>

          <nav aria-label="Footer" className="flex gap-14 text-[0.95rem]">
            <ul className="space-y-2.5">
              <li className="mb-1 font-display text-lg text-white">Care</li>
              <li><a className="text-white/75 hover:text-white" href="#resources">Daily Care Guide</a></li>
              <li><a className="text-white/75 hover:text-white" href="#resources">Crisis Protocol</a></li>
              <li><a className="text-white/75 hover:text-white" href="#resources">Home Safety</a></li>
            </ul>
            <ul className="space-y-2.5">
              <li className="mb-1 font-display text-lg text-white">Yaadbaan</li>
              <li><a className="text-white/75 hover:text-white" href="#about">About us</a></li>
              <li><a className="text-white/75 hover:text-white" href="#community">Support Circles</a></li>
              <li><a className="text-white/75 hover:text-white" href="#why">Why us</a></li>
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/20 pt-6 text-xs text-white/65 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Yaadbaan. In partnership with Alzheimer&apos;s Pakistan.</p>
          <p>Guidance here supports but does not replace professional medical advice.</p>
        </div>
      </div>
    </footer>
  );
}
