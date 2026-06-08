import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { ScrollBackground } from "@/components/ScrollBackground";
import {
  AlertTriangle,
  ArrowRight,
  Check,
  Heart,
  MessageCircle,
  Search,
  ShieldCheck,
  Users,
} from "@/components/icons";

export default function Home() {
  return (
    <>
      <ScrollBackground />
      <Header />
      <main id="main">
        <span id="top" className="sr-only" />
        <Hero />
        <Trust />
        <Why />
        <Resources />
        <Community />
      </main>
      <Footer />
    </>
  );
}

/* ---------------------------------------------------------------- Hero */
function Hero() {
  return (
    <section id="hero" className="screen relative overflow-hidden">
      {/* CSS atmosphere — smooth, slowly-flowing mesh (no photos) */}
      <div aria-hidden="true" className="hero-mesh pointer-events-none absolute inset-0 opacity-80" />

      <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center px-5 py-24 text-center">
        <Reveal as="p" delay={0} className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-surface px-4 py-2 text-sm font-semibold text-teal-ink">
          <span className="h-2 w-2 rounded-full bg-teal" />
          In partnership with Alzheimer&apos;s Pakistan
        </Reveal>

        <Reveal as="h1" delay={250} className="mt-7 font-display text-[clamp(3rem,9vw,5.5rem)] font-medium leading-[0.95] text-ink">
          You are not alone
          <br />
          in <span className="text-teal">this</span>.
        </Reveal>

        <Reveal as="p" delay={350} className="mt-7 max-w-xl text-xl leading-relaxed text-muted">
          Caring for a loved one with dementia is one of the hardest things a
          family can face. Yaadbaan gives you calm, vetted, culturally-grounded
          guidance, so you always know the next step.
        </Reveal>

        <Reveal delay={450} className="mt-9 flex flex-wrap justify-center gap-4">
          <a
            href="#resources"
            className="inline-flex items-center gap-2 rounded-full bg-teal px-7 py-4 text-base font-semibold text-white transition-transform hover:scale-[1.03]"
          >
            Find care guidance
            <ArrowRight className="h-5 w-5" />
          </a>
          <a
            href="#community"
            className="inline-flex items-center gap-2 rounded-full border-2 border-ink px-7 py-4 text-base font-semibold text-ink transition-colors hover:bg-ink hover:text-bg"
          >
            Join a Support Circle
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- Trust */
function Trust() {
  return (
    <section id="about" className="screen scroll-mt-20">
      <div className="relative z-10 mx-auto w-full max-w-4xl px-5 py-24 text-center">
        <Reveal as="p" delay={0} className="font-display text-base uppercase tracking-[0.25em] text-teal-ink">
          Who we are
        </Reveal>
        <Reveal as="h2" delay={120} className="mx-auto mt-5 max-w-3xl text-[clamp(2rem,4.5vw,3.25rem)] text-ink">
          Built with the people who know dementia best.
        </Reveal>
        <Reveal as="p" delay={240} className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-muted">
          Yaadbaan is developed in partnership with{" "}
          <strong className="highlight font-semibold text-ink">
            Alzheimer&apos;s Pakistan
          </strong>
          , the country&apos;s leading authority on dementia care. Every guide is
          reviewed by clinicians and written for the realities of South Asian
          households, from joint families to language.
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- Why */
const WHY = [
  {
    icon: Search,
    title: "Search overwhelms",
    desc: "Online results are generic, contradictory, and rarely speak to Pakistani families or Urdu-speaking households.",
    chip: "bg-coral/15 text-coral",
  },
  {
    icon: Check,
    title: "Ours is vetted",
    desc: "Every guide is reviewed by Alzheimer's Pakistan clinicians and adapted for our culture, never copied from elsewhere.",
    chip: "bg-teal/15 text-teal-ink",
  },
  {
    icon: Users,
    title: "You're never alone",
    desc: "Connect with caregivers who face the same days, in the same language, across the same cities.",
    chip: "bg-marigold/20 text-ink",
  },
];

function Why() {
  return (
    <section id="why" className="screen scroll-mt-20">
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 py-24">
        <div className="max-w-3xl">
          <Reveal as="h2" delay={0} className="text-[clamp(2rem,5vw,3.5rem)] text-ink">
            Why Yaadbaan,
            <br className="hidden sm:block" /> and not a quick search?
          </Reveal>
          <Reveal as="p" delay={120} className="mt-5 text-xl text-muted">
            When you&apos;re exhausted and worried, you need one trustworthy
            answer, not fifty conflicting ones.
          </Reveal>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {WHY.map((item, i) => (
            <Reveal
              key={item.title}
              as="article"
              delay={200 + i * 120}
              className="card rounded-2xl border border-border p-8"
            >
              <span className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${item.chip}`}>
                <item.icon className="h-7 w-7" />
              </span>
              <h3 className="mt-6 text-2xl text-ink">{item.title}</h3>
              <p className="mt-3 text-lg leading-relaxed text-muted">{item.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- Resources */
const TILES = [
  {
    icon: AlertTriangle,
    title: "Crisis Protocol",
    desc: "Calm, step-by-step de-escalation for agitation, wandering, and emergencies.",
    tint: "bg-coral/10 border-coral/30",
    iconBg: "bg-coral text-white",
  },
  {
    icon: Heart,
    title: "Daily Care Guide",
    desc: "Bathing, feeding, sleep, and hygiene routines adapted for care at home.",
    tint: "bg-teal/10 border-teal/30",
    iconBg: "bg-teal text-white",
  },
  {
    icon: MessageCircle,
    title: "Communication Tips",
    desc: "How to speak, listen, and stay connected, even when words begin to fail.",
    tint: "bg-marigold/15 border-marigold/40",
    iconBg: "bg-marigold text-ink",
  },
  {
    icon: ShieldCheck,
    title: "Home Safety Audit",
    desc: "A room-by-room checklist to prevent falls, burns, and wandering.",
    tint: "bg-plum/10 border-plum/30",
    iconBg: "bg-plum text-white",
  },
];

function Resources() {
  return (
    <section id="resources" className="screen scroll-mt-20">
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal as="h2" delay={0} className="text-[clamp(2rem,5vw,3.5rem)] text-ink">
            What do you need right now?
          </Reveal>
          <Reveal as="p" delay={120} className="mt-5 text-xl text-muted">
            Quick access to the guidance caregivers reach for most.
          </Reveal>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {TILES.map((tile, i) => (
            <Reveal
              key={tile.title}
              as="a"
              delay={200 + i * 110}
              href="#community"
              className={`group flex items-start gap-5 rounded-2xl border p-7 transition-transform hover:-translate-y-1 ${tile.tint}`}
            >
              <span className={`inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl shadow-sm ${tile.iconBg}`}>
                <tile.icon className="h-7 w-7" />
              </span>
              <div>
                <h3 className="text-xl text-ink">{tile.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-muted">{tile.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-ink">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- Community */
const PERKS = [
  { text: "Weekly virtual support meetings", tint: "bg-teal/10 border-teal/30", badge: "bg-teal text-white" },
  { text: "City-based WhatsApp groups", tint: "bg-marigold/15 border-marigold/40", badge: "bg-marigold text-ink" },
  { text: "Live Q&A with Alzheimer's Pakistan clinicians", tint: "bg-coral/10 border-coral/30", badge: "bg-coral text-white" },
  { text: "Resources in both Urdu and English", tint: "bg-plum/10 border-plum/30", badge: "bg-plum text-white" },
];

function Community() {
  return (
    <section id="community" className="screen scroll-mt-20">
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 py-24">
        <div className="grid items-center gap-16 rounded-[2rem] border border-teal/15 bg-teal/5 p-12 shadow-md md:grid-cols-2 md:p-24">
        <div>
          <Reveal as="h2" delay={0} className="text-[clamp(2rem,5vw,3.5rem)] text-ink">
            Join our Support Circles
          </Reveal>
          <Reveal as="p" delay={120} className="mt-5 text-xl leading-relaxed text-muted">
            Share what you&apos;re going through, ask the questions you
            can&apos;t ask anyone else, and find strength in walking this path
            together.
          </Reveal>
          <Reveal delay={240} className="mt-9">
            <a
              href="mailto:hello@yaadbaan.org?subject=Join%20a%20Support%20Circle"
              className="inline-flex items-center gap-2 rounded-full bg-teal px-7 py-4 text-base font-semibold text-white transition-transform hover:scale-[1.03]"
            >
              Find a Support Circle
              <ArrowRight className="h-5 w-5" />
            </a>
          </Reveal>
        </div>

        <ul className="divide-y divide-border border-y border-border">
          {PERKS.map((perk, i) => (
            <Reveal
              key={perk.text}
              as="li"
              delay={200 + i * 110}
              className="flex items-center gap-4 py-5"
            >
              <span className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${perk.badge}`}>
                <Check className="h-5 w-5" />
              </span>
              <span className="text-lg leading-snug text-ink">{perk.text}</span>
            </Reveal>
          ))}
        </ul>
        </div>
      </div>
    </section>
  );
}
