import { createFileRoute, Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  Heart,
  MessageCircle,
  ShieldCheck,
  Users,
  Search,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import heroImage from "../assets/hero-ethereal.jpg";
import handsImage from "../assets/hands-ethereal.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "YAADBAAN — Caregiver Support for Dementia" },
      {
        name: "description",
        content:
          "Empathetic, vetted, and localized guidance for Pakistani families managing dementia.",
      },
      {
        property: "og:title",
        content: "YAADBAAN — Caregiver Support for Dementia",
      },
      {
        property: "og:description",
        content:
          "Empathetic, vetted, and localized guidance for Pakistani families managing dementia.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden bg-background">
        <div className="absolute inset-0 opacity-40">
          <img
            src={heroImage}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-24 md:py-36">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="space-y-8">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
                In partnership with Alzheimer's Pakistan
              </p>
              <h1 className="font-heading text-5xl italic leading-[1.05] text-foreground md:text-6xl lg:text-7xl">
                You are not alone <br />
                <span className="not-italic">in this journey.</span>
              </h1>
              <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
                YAADBAAN offers empathetic, vetted, and culturally-grounded
                guidance for Pakistani families caring for loved ones with
                dementia.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  to="/daily-care-guide"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium tracking-wide text-primary-foreground transition-all hover:scale-[1.02] hover:shadow-lg"
                >
                  Explore Care Guides
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/support-circles"
                  className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-7 py-3.5 text-sm font-medium tracking-wide text-primary transition-colors hover:bg-primary/10"
                >
                  Join Our Community
                </Link>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="absolute -inset-6 rounded-[2rem] bg-primary/10 blur-2xl" />
              <img
                src={heroImage}
                alt="An ethereal impressionist painting of an elderly figure resting in a meadow of wildflowers"
                className="relative aspect-[4/5] w-full rounded-[1.5rem] object-cover shadow-2xl ring-1 ring-primary/20"
                width={640}
                height={800}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Who We Are
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            YAADBAAN is a caregiver support platform developed in partnership with{" "}
            <strong>Alzheimer's Pakistan</strong>, the nation's leading
            authority on dementia care. Every resource we share is vetted by
            clinical experts and adapted for the cultural realities of South
            Asian households.
          </p>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="border-y border-border bg-secondary/20">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <h2 className="text-center text-3xl font-bold text-foreground md:text-4xl">
            Why YAADBAAN vs. a Google Search?
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Search,
                title: "Information Overload",
                desc: "Search results are generic, contradictory, and rarely address Pakistani family structures or language barriers.",
              },
              {
                icon: CheckCircle2,
                title: "Curated & Vetted",
                desc: "Every guide is reviewed by Alzheimer's Pakistan clinicians and written for our cultural context.",
              },
              {
                icon: Users,
                title: "Community Backed",
                desc: "Connect with other caregivers who understand the unique challenges of dementia care in Pakistan.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-card p-6 shadow-sm"
              >
                <item.icon className="h-8 w-8 text-primary" />
                <h3 className="mt-4 text-xl font-semibold text-card-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Action Tiles */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <h2 className="text-center text-3xl font-bold text-foreground md:text-4xl">
          What do you need right now?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground">
          Quick access to the resources caregivers need most — from crisis
          de-escalation to daily routines.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <ActionCard
            icon={AlertTriangle}
            title="Crisis Protocol"
            description="De-escalation steps for agitation, wandering, and medical emergencies."
            href="/crisis-protocol"
            color="bg-destructive/10 text-destructive"
          />
          <ActionCard
            icon={Heart}
            title="Daily Care Guide"
            description="Bathing, feeding, sleep routines, and hygiene adapted for home care."
            href="/daily-care-guide"
            color="bg-primary/10 text-primary"
          />
          <ActionCard
            icon={MessageCircle}
            title="Communication Tips"
            description="How to speak, listen, and connect when words fail."
            href="/communication-tips"
            color="bg-chart-2/20 text-chart-3"
          />
          <ActionCard
            icon={ShieldCheck}
            title="Home Safety Audit"
            description="Room-by-room checklist to prevent falls, burns, and wandering."
            href="/home-safety-audit"
            color="bg-chart-1/20 text-chart-3"
          />
        </div>
      </section>

      {/* Community */}
      <section className="border-t border-border bg-secondary/20">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                Join Our Community
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Our Support Circles connect caregivers across Pakistan. Share
                experiences, ask questions, and find strength in knowing you are
                not walking this path alone.
              </p>
              <ul className="space-y-3">
                {[
                  "Weekly virtual support meetings",
                  "WhatsApp groups by city",
                  "Expert Q&A sessions with Alzheimer's Pakistan clinicians",
                  "Resources in Urdu and English",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/support-circles"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Find a Support Circle
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-border">
              <img
                src={handsImage}
                alt="Impressionist painting of two hands clasped together in tenderness"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
                width={640}
                height={800}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 via-primary/60 to-transparent p-8">
                <p className="font-heading text-4xl italic text-primary-foreground">1,200+</p>
                <p className="mt-1 text-sm text-primary-foreground/85">
                  caregivers connected through YAADBAAN Support Circles
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ActionCard({
  icon: Icon,
  title,
  description,
  href,
  color,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  href: string;
  color: string;
}) {
  return (
    <Link
      to={href}
      className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
    >
      <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg ${color}`}>
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
      <span className="mt-auto pt-4 text-sm font-medium text-primary inline-flex items-center gap-1">
        Learn more
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
