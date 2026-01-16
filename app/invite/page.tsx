import EventHerosend from "./EventHerosend";
import Rsvp from "./Rsvp";
import WhatWeExplore from "./WhatWeExplore";
import FeaturedSpeakers from "./FeaturedSpeakers";
import InsightsWithAgenda from "./InsightsWithAgenda";
import FinalCTA from "./FinalCTA";

export default function HomePage()  {
  return (
    <main className="min-h-screen bg-gray-900">
      <EventHerosend />
      <Rsvp />
      <WhatWeExplore />
      <FeaturedSpeakers />
      <InsightsWithAgenda />
      <FinalCTA />
    </main>
  );
}
