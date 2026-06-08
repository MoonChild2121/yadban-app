import { createFileRoute } from "@tanstack/react-router";
import { Heart, Shield, Users, Globe } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — YAADBAAN" },
      {
        name: "description",
        content:
          "Learn about YAADBAAN's mission to support Pakistani families managing dementia, in partnership with Alzheimer's Pakistan.",
      },
      {
        property: "og:title",
        content: "About Us — YAADBAAN",
      },
      {
        property: "og:description",
        content:
          "Learn about YAADBAAN's mission to support Pakistani families managing dementia, in partnership with Alzheimer's Pakistan.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 md:py-20">
      <div className="space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground md:text-5xl">
            About YAADBAAN
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            A caregiver support platform built for the realities of Pakistani
            families.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-8 shadow-sm md:p-10">
          <h2 className="text-2xl font-bold text-card-foreground">Our Story</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            YAADBAAN was born from a simple observation: caregivers in Pakistan
            were drowning in generic advice that ignored their cultural context,
            language needs, and family structures. We set out to change that.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            In partnership with <strong>Alzheimer's Pakistan</strong>, the
            country's leading dementia care organization, we built a platform that
            combines clinical expertise with cultural sensitivity. Every guide,
            checklist, and tip on YAADBAAN has been reviewed by dementia
            specialists and adapted for South Asian households.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {[
            {
              icon: Heart,
              title: "Empathy First",
              desc: "We understand that caregiving is emotional, exhausting, and deeply personal. Every resource is written with compassion.",
            },
            {
              icon: Shield,
              title: "Clinically Vetted",
              desc: "All content is reviewed by Alzheimer's Pakistan clinicians to ensure accuracy and safety.",
            },
            {
              icon: Users,
              title: "Community Driven",
              desc: "Built with feedback from hundreds of Pakistani caregivers who told us what they actually needed.",
            },
            {
              icon: Globe,
              title: "Culturally Grounded",
              desc: "We account for multigenerational homes, language barriers, and local healthcare realities.",
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

        <div className="rounded-2xl border border-border bg-primary/5 p-8 text-center md:p-10">
          <h2 className="text-2xl font-bold text-foreground">
            Our Partnership with Alzheimer's Pakistan
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Alzheimer's Pakistan has been at the forefront of dementia awareness
            and care in the country for over two decades. Their clinical team
            reviews all YAADBAAN content to ensure it meets the highest standards
            of accuracy and cultural relevance.
          </p>
        </div>
      </div>
    </div>
  );
}
