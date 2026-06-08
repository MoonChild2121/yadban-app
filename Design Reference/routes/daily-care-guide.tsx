import { createFileRoute } from "@tanstack/react-router";
import { Sun, Moon, Droplets, Utensils, Bath, BedDouble, Activity } from "lucide-react";

export const Route = createFileRoute("/daily-care-guide")({
  head: () => ({
    meta: [
      { title: "Daily Care Guide — YAADBAAN" },
      {
        name: "description",
        content:
          "Practical daily care routines for bathing, feeding, sleep, and hygiene adapted for home dementia care in Pakistan.",
      },
      {
        property: "og:title",
        content: "Daily Care Guide — YAADBAAN",
      },
      {
        property: "og:description",
        content:
          "Practical daily care routines for bathing, feeding, sleep, and hygiene adapted for home dementia care in Pakistan.",
      },
    ],
  }),
  component: DailyCareGuidePage,
});

function DailyCareGuidePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 md:py-20">
      <div className="space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground md:text-5xl">
            Daily Care Guide
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Simple, structured routines that reduce confusion and maintain
            dignity for your loved one.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <CareCard
            icon={Sun}
            title="Morning Routine"
            tips={[
              "Wake at the same time daily to reinforce circadian rhythm.",
              "Offer warm water or chai first thing — dehydration is common.",
              "Bathe early when they are most cooperative. Keep it brief.",
              "Lay out clothes in order to reduce decision fatigue.",
            ]}
          />

          <CareCard
            icon={Utensils}
            title="Mealtime Tips"
            tips={[
              "Serve familiar foods. New textures can cause refusal or choking.",
              "Use contrasting colored plates (white rice on dark plate) to help them see food.",
              "Cut food into small bites. Avoid tough meats and dry foods.",
              "Eat together. They mirror behavior — if you eat, they are more likely to eat.",
            ]}
          />

          <CareCard
            icon={Bath}
            title="Bathing & Hygiene"
            tips={[
              "Use a shower chair and handheld showerhead for safety.",
              "Warm the bathroom beforehand — cold rooms trigger resistance.",
              "Be matter-of-fact, not apologetic. Preserve dignity.",
              "If full baths are stressful, sponge baths work just as well.",
            ]}
          />

          <CareCard
            icon={BedDouble}
            title="Sleep & Nighttime"
            tips={[
              "Limit naps to 30 minutes before 3 PM.",
              "Reduce caffeine after 2 PM.",
              "Keep evenings calm — loud TV or visitors can cause sundowning.",
              "A small warm milk or chamomile tea before bed can help.",
            ]}
          />

          <CareCard
            icon={Activity}
            title="Exercise & Mobility"
            tips={[
              "Short walks in the garden or courtyard maintain strength and mood.",
              "Simple seated stretches if walking is difficult.",
              "Encourage participation in light household tasks — folding clothes, watering plants.",
              "Avoid prolonged sitting. It weakens muscles and increases fall risk.",
            ]}
          />

          <CareCard
            icon={Moon}
            title="Evening Wind-Down"
            tips={[
              "Dim lights after sunset to signal the body it's nighttime.",
              "Play familiar music or recite prayers they grew up with.",
              "A warm foot soak relaxes and signals bedtime.",
              "If they resist sleep, don't argue. Offer a warm drink and try again in 20 minutes.",
            ]}
          />
        </div>

        <div className="rounded-2xl border border-border bg-primary/5 p-8 text-center">
          <Droplets className="mx-auto h-8 w-8 text-primary" />
          <h3 className="mt-4 text-xl font-bold text-foreground">
            Hydration Reminder
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
            People with dementia often forget to drink. Leave small cups of water
            or lassi in visible places throughout the day.
          </p>
        </div>
      </div>
    </div>
  );
}

function CareCard({
  icon: Icon,
  title,
  tips,
}: {
  icon: React.ElementType;
  title: string;
  tips: string[];
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <Icon className="h-6 w-6 text-primary" />
        <h2 className="text-xl font-bold text-card-foreground">{title}</h2>
      </div>
      <ul className="mt-4 space-y-3">
        {tips.map((tip, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
            <span className="text-muted-foreground">{tip}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
