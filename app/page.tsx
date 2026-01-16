import EventHero from "./component/EventHero";
import RSVP from "./component/RSVP";
import WhatWeExplore from "./component/WhatWeExplore";
import FeaturedSpeakers from "./component/FeaturedSpeakers";
import InsightsAndAgenda from "./component/InsightsAndAgenda";
import FinalCTA from "./component/FinalCTA";

export default function HomePage(): JSX.Element {
  return (
    <main className="min-h-screen bg-gray-900">
      <EventHero />
      <RSVP />
      <WhatWeExplore />
      <FeaturedSpeakers />
      <InsightsAndAgenda />
      <FinalCTA />
    </main>
  );
}
