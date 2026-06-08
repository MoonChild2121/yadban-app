import { createFileRoute } from "@tanstack/react-router";
import { Users, MessageCircle, Calendar, MapPin, Phone, Heart } from "lucide-react";

export const Route = createFileRoute("/support-circles")({
  head: () => ({
    meta: [
      { title: "Support Circles — YAADBAAN" },
      {
        name: "description",
        content:
          "Join YAADBAAN's caregiver community. Virtual meetings, city-based WhatsApp groups, and expert Q&A sessions.",
      },
      {
        property: "og:title",
        content: "Support Circles — YAADBAAN",
      },
      {
        property: "og:description",
        content:
          "Join YAADBAAN's caregiver community. Virtual meetings, city-based WhatsApp groups, and expert Q&A sessions.",
      },
    ],
  }),
  component: SupportCirclesPage,
});

function SupportCirclesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 md:py-20">
      <div className="space-y-12">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Users className="h-8 w-8 text-primary" />
          </div>
          <h1 className="mt-6 text-4xl font-bold text-foreground md:text-5xl">
            Support Circles
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            You don't have to do this alone. Connect with other caregivers who
            understand.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <SupportCard
            icon={Calendar}
            title="Weekly Virtual Meetings"
            description="Join our facilitated Zoom support groups every Tuesday and Thursday evening. Share experiences, ask questions, and find solidarity."
          />

          <SupportCard
            icon={MessageCircle}
            title="City WhatsApp Groups"
            description="Connect with caregivers in your city — Karachi, Lahore, Islamabad, and more. Share local doctor recommendations, respite care options, and urgent advice."
          />

          <SupportCard
            icon={Phone}
            title="Expert Q&A Sessions"
            description="Monthly live sessions with Alzheimer's Pakistan clinicians. Get your questions answered by dementia specialists who understand our context."
          />

          <SupportCard
            icon={MapPin}
            title="In-Person Gatherings"
            description="Quarterly meetups in major cities. Sometimes just being in a room with people who get it is the best medicine."
          />
        </div>

        <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm md:p-10">
          <Heart className="mx-auto h-10 w-10 text-primary" />
          <h2 className="mt-4 text-2xl font-bold text-card-foreground">
            Ready to Join?
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-muted-foreground">
            Our community is moderated, confidential, and free. No judgment, no
            pressure — just people helping people.
          </p>
          <div className="mt-6 space-y-4">
            <a
              href="https://wa.me/yadban-support"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <MessageCircle className="h-4 w-4" />
              Join WhatsApp Community
            </a>
            <p className="text-sm text-muted-foreground">
              Or email us at{" "}
              <a
                href="mailto:community@yadban.org"
                className="text-primary hover:underline"
              >
                community@yadban.org
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SupportCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
      <Icon className="h-8 w-8 text-primary" />
      <h3 className="mt-4 text-xl font-semibold text-card-foreground">
        {title}
      </h3>
      <p className="mt-2 text-muted-foreground">{description}</p>
    </div>
  );
}
