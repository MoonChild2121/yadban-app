import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Ear, Eye, Heart, Volume2, Hand } from "lucide-react";

export const Route = createFileRoute("/communication-tips")({
  head: () => ({
    meta: [
      { title: "Communication Tips — YAADBAAN" },
      {
        name: "description",
        content:
          "How to speak, listen, and connect with a loved one when words fail in dementia care.",
      },
      {
        property: "og:title",
        content: "Communication Tips — YAADBAAN",
      },
      {
        property: "og:description",
        content:
          "How to speak, listen, and connect with a loved one when words fail in dementia care.",
      },
    ],
  }),
  component: CommunicationTipsPage,
});

function CommunicationTipsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 md:py-20">
      <div className="space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground md:text-5xl">
            Communication Tips
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Connection doesn't always need words. Here's how to reach your loved
            one even as language fades.
          </p>
        </div>

        <div className="space-y-8">
          <TipSection
            icon={Eye}
            title="Use Visual Cues"
            tips={[
              "Point to objects while naming them. 'Here is your shawl' + point.",
              "Demonstrate actions rather than explaining them. Show how to brush teeth.",
              "Use photos of family members with names labeled underneath.",
              "Keep a visual daily schedule — pictures of breakfast, bath, walk, lunch.",
            ]}
          />

          <TipSection
            icon={Volume2}
            title="Simplify Your Speech"
            tips={[
              "Use short, simple sentences. One idea at a time.",
              "Speak slowly and clearly, but do not speak down to them.",
              "Ask yes/no questions instead of open-ended ones.",
              "Give them time to respond — silence is okay.",
            ]}
          />

          <TipSection
            icon={Ear}
            title="Listen with Your Whole Body"
            tips={[
              "Get on their eye level. Sit beside them, not over them.",
              "Nod and smile to show you understand, even if their words don't make sense.",
              "Their emotions are real, even if the facts are not. Validate the feeling.",
              "Sometimes holding hands says more than any sentence could.",
            ]}
          />

          <TipSection
            icon={Heart}
            title="Redirect, Don't Correct"
            tips={[
              "If they ask for a deceased relative, don't remind them they're gone. Ask about a memory instead.",
              "If they insist it's morning at 8 PM, go with it. Arguing causes distress.",
              "Use 'therapeutic fibs' to reduce anxiety. 'The doctor said you can rest today' works better than 'we don't have an appointment.'",
              "Their reality is their truth. Meet them there.",
            ]}
          />

          <TipSection
            icon={Hand}
            title="Non-Verbal Connection"
            tips={[
              "Gentle touch — holding hands, a light shoulder rub — can be deeply comforting.",
              "Familiar music from their youth often triggers recognition when words fail.",
              "Prayers or religious verses they memorized as children often remain accessible long into dementia.",
              "The smell of familiar foods (chai, biryani, rose water) can ground them in positive memories.",
            ]}
          />

          <TipSection
            icon={MessageCircle}
            title="What to Avoid"
            tips={[
              "'Do you remember?' — It forces them to admit failure.",
              "'I just told you that.' — They genuinely don't remember.",
              "'You're wrong.' — It creates conflict and humiliation.",
              "Talking about them in front of them as if they're not there.",
            ]}
          />
        </div>
      </div>
    </div>
  );
}

function TipSection({
  icon: Icon,
  title,
  tips,
}: {
  icon: React.ElementType;
  title: string;
  tips: string[];
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
      <div className="flex items-center gap-3">
        <Icon className="h-6 w-6 text-primary" />
        <h2 className="text-xl font-bold text-card-foreground">{title}</h2>
      </div>
      <ul className="mt-6 space-y-4">
        {tips.map((tip, i) => (
          <li key={i} className="flex items-start gap-4">
            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
            <span className="text-muted-foreground">{tip}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
