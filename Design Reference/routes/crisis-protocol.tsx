import { createFileRoute } from "@tanstack/react-router";
import { Phone, AlertTriangle, Brain, Shield, Siren } from "lucide-react";

export const Route = createFileRoute("/crisis-protocol")({
  head: () => ({
    meta: [
      { title: "Crisis Protocol — YAADBAAN" },
      {
        name: "description",
        content:
          "Step-by-step de-escalation guidance for agitation, wandering, and medical emergencies in dementia care.",
      },
      {
        property: "og:title",
        content: "Crisis Protocol — YAADBAAN",
      },
      {
        property: "og:description",
        content:
          "Step-by-step de-escalation guidance for agitation, wandering, and medical emergencies in dementia care.",
      },
    ],
  }),
  component: CrisisProtocolPage,
});

function CrisisProtocolPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 md:py-20">
      <div className="space-y-12">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
            <Siren className="h-8 w-8 text-destructive" />
          </div>
          <h1 className="mt-6 text-4xl font-bold text-foreground md:text-5xl">
            Crisis Protocol
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            When situations escalate, knowing what to do can save a life. Follow
            these vetted de-escalation steps.
          </p>
        </div>

        <div className="rounded-2xl border-2 border-destructive/20 bg-destructive/5 p-6 text-center">
          <p className="font-semibold text-destructive">
            In a life-threatening emergency, call 1122 (Rescue 1122) or your
            nearest hospital immediately.
          </p>
        </div>

        <div className="space-y-8">
          <CrisisSection
            icon={AlertTriangle}
            title="Agitation & Aggression"
            steps={[
              "Stay calm. Your anxiety will escalate theirs.",
              "Speak slowly in a low, soothing tone.",
              "Do not argue or try to reason. Validate their feelings: 'I can see you're upset.'",
              "Give space. Step back and remove anything they could throw.",
              "Offer a distraction: a favorite snack, music, or a walk.",
              "If physical harm is imminent, call a family member for backup. Do not restrain unless absolutely necessary.",
            ]}
          />

          <CrisisSection
            icon={Brain}
            title="Wandering & Getting Lost"
            steps={[
              "Check common places first: the kitchen, garden, or a neighbor's house.",
              "Alert neighbors and local shopkeepers immediately — they often spot wanderers first.",
              "Keep a recent photo and medical ID card on hand for authorities.",
              "Prevention: install simple door alarms and keep a daily routine to reduce anxiety.",
            ]}
          />

          <CrisisSection
            icon={Shield}
            title="Medical Emergencies"
            steps={[
              "Fall: Do not move them immediately. Check for bleeding or broken bones. Call 1122.",
              "Choking: Encourage coughing. If they cannot breathe, perform back blows and abdominal thrusts.",
              "Seizure: Clear the area. Place something soft under their head. Do not put anything in their mouth. Time the seizure.",
              "Unresponsive: Check breathing. If none, begin CPR and call 1122.",
            ]}
          />

          <CrisisSection
            icon={Phone}
            title="When to Call for Help"
            steps={[
              "Physical aggression that you cannot de-escalate alone.",
              "Any fall with head impact, loss of consciousness, or suspected fracture.",
              "Difficulty breathing, chest pain, or signs of stroke (face drooping, arm weakness, speech difficulty).",
              "Seizure lasting more than 5 minutes, or repeated seizures without recovery.",
            ]}
          />
        </div>
      </div>
    </div>
  );
}

function CrisisSection({
  icon: Icon,
  title,
  steps,
}: {
  icon: React.ElementType;
  title: string;
  steps: string[];
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
      <div className="flex items-center gap-3">
        <Icon className="h-6 w-6 text-primary" />
        <h2 className="text-xl font-bold text-card-foreground">{title}</h2>
      </div>
      <ol className="mt-6 space-y-4">
        {steps.map((step, i) => (
          <li key={i} className="flex items-start gap-4">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
              {i + 1}
            </span>
            <span className="text-muted-foreground">{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
