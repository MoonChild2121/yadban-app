import { createFileRoute } from "@tanstack/react-router";
import { Home, DoorOpen, Flame, Bath, ChefHat, AlertTriangle, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/home-safety-audit")({
  head: () => ({
    meta: [
      { title: "Home Safety Audit — YAADBAAN" },
      {
        name: "description",
        content:
          "Room-by-room checklist to prevent falls, burns, and wandering for dementia care at home in Pakistan.",
      },
      {
        property: "og:title",
        content: "Home Safety Audit — YAADBAAN",
      },
      {
        property: "og:description",
        content:
          "Room-by-room checklist to prevent falls, burns, and wandering for dementia care at home in Pakistan.",
      },
    ],
  }),
  component: HomeSafetyAuditPage,
});

function HomeSafetyAuditPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 md:py-20">
      <div className="space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground md:text-5xl">
            Home Safety Audit
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            A room-by-room checklist to make your home safer for a loved one
            with dementia.
          </p>
        </div>

        <div className="space-y-8">
          <AuditSection
            icon={Home}
            title="Entry & Living Areas"
            items={[
              "Remove loose rugs and mats — major tripping hazard.",
              "Ensure good lighting in hallways and staircases.",
              "Install handrails on both sides of stairs.",
              "Hide or lock away house keys to prevent unsupervised wandering.",
              "Remove decorative items that could be mistaken for food.",
            ]}
          />

          <AuditSection
            icon={Bath}
            title="Bathroom"
            items={[
              "Install grab bars near toilet and shower.",
              "Use non-slip mats inside and outside the shower.",
              "Set water heater to a safe temperature to prevent scalding.",
              "Lock away cleaning chemicals and medicines.",
              "Keep the bathroom door unlocked or use a privacy latch that opens from outside.",
            ]}
          />

          <AuditSection
            icon={ChefHat}
            title="Kitchen"
            items={[
              "Install stove knob covers or a gas cutoff valve.",
              "Remove sharp knives or store them in a locked drawer.",
              "Keep a fire extinguisher accessible and check expiry dates.",
              "Label hot and cold taps clearly.",
              "Never leave cooking unattended.",
            ]}
          />

          <AuditSection
            icon={DoorOpen}
            title="Bedroom"
            items={[
              "Keep a nightlight on after dark.",
              "Ensure the path from bed to bathroom is clear.",
              "Use a low bed to reduce fall injury.",
              "Remove clutter and trailing electrical cords.",
              "Consider a baby monitor to hear if they get up at night.",
            ]}
          />

          <AuditSection
            icon={Flame}
            title="Fire & Chemical Safety"
            items={[
              "Install smoke detectors and check batteries monthly.",
              "Lock away matches, lighters, and incense.",
              "Store all medications in a locked cabinet, not the bedside drawer.",
              "Label all containers clearly. Do not store chemicals in food containers.",
            ]}
          />
        </div>

        <div className="rounded-2xl border border-border bg-primary/5 p-8 text-center">
          <AlertTriangle className="mx-auto h-8 w-8 text-primary" />
          <h3 className="mt-4 text-xl font-bold text-foreground">
            Wandering Prevention
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
            Place a lock high on exit doors (above eye level), use door
            alarms, and consider an ID bracelet or GPS tracker for your loved
            one.
          </p>
        </div>
      </div>
    </div>
  );
}

function AuditSection({
  icon: Icon,
  title,
  items,
}: {
  icon: React.ElementType;
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
      <div className="flex items-center gap-3">
        <Icon className="h-6 w-6 text-primary" />
        <h2 className="text-xl font-bold text-card-foreground">{title}</h2>
      </div>
      <ul className="mt-6 space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <span className="text-muted-foreground">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
