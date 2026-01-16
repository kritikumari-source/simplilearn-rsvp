

export default function InsightsWithAgenda()  {
  return (
    <>
      
      <section className="bg-white px-6 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="order-2 lg:order-1">
            <h2 className="text-orange-500 font-semibold text-lg mb-2 font-Satoshi Variable">
              Go behind the curtain with real
            </h2>
            <h3 className="text-orange-500 font-semibold text-lg mb-6 font-Satoshi Variable">
              examples and high-scale insights
            </h3>

            <p className="text-gray-900 font-medium mb-4 font-Satoshi Variable">
              You’ll walk away with:
            </p>

            {/* Bullet List */}
            <div className="border-l-4 border-orange-400 pl-6 space-y-4 text-gray-400 text-sm font-Satoshi Variable">
              <p>
                A clear view of the leadership & workforce capabilities that will
                matter most over the next 24–36 months.
              </p>

              <p>
                Insights from high-scale operating environments including the
                former CLO of McDonald’s on what truly scales and what breaks
                under pressure.
              </p>

              <p>
                Signals for where capability gaps may already be forming in your
                organization.
              </p>

              <p>
                Peer-validated perspectives from leaders running workforce,
                talent, and transformation ecosystems at scale.
              </p>

              <p>
                Actionable insights you can take straight into your next exec
                meeting.
              </p>
            </div>

            {/* RSVP */}
            <p className="mt-8 text-gray-700 text-sm font-Satoshi Variable">
              You may RSVP by emailing{" "}
              <a
                href="mailto:shiham.aba@simplilearn.net"
                className="font-medium text-black underline"
              >
                shiham.aba@simplilearn.net
              </a>{" "}
              or by clicking the button below to send your confirmation.
            </p>

            {/* SEND EMAIL BUTTON */}
            <a
              href="mailto:shiham.aba@simplilearn.net?subject=RSVP%20Confirmation&body=Hello%2C%0A%0AI%20would%20like%20to%20RSVP%20for%20the%20event.%0A%0AThank%20you."
              className="inline-block mt-4 bg-orange-400 hover:bg-orange-500 transition text-white text-sm font-semibold px-6 py-3 rounded-md font-Satoshi Variable"
            >
              SEND RSVP EMAIL
            </a>
          </div>

          {/* RIGHT IMAGE */}
          <div className="order-1 lg:order-2 flex justify-center">
            <img
              src="/chess.svg"
              alt="Chess Strategy"
              className="max-w-sm w-full"
            />
          </div>
        </div>
      </section>

      <section className="bg-cyan-100 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-blue-500 font-bold text-lg mb-10 font-Satoshi Variable">
            Event Agenda
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-Satoshi Variable">
            <AgendaCard
              title="Welcome & Opening"
              speaker="Sudipto Mitra, CRO Simplilearn"
              description="Why capability-building is now a board-level issue and what’s changing in the workforce landscape."
            />

            <AgendaCard
              title="Keynote: What Enterprise Leaders Are Seeing on the Ground"
              speaker="Rob Lauber, Former CLO McDonald’s"
              description="A grounded view of how AI and AI agents are reshaping work, workflows, and leadership across industries."
            />

            <AgendaCard
              title="Lunch & Executive Conversation"
              speaker="Industry Experts Invited"
              description="What large enterprise talent ecosystems are learning about capability-building at scale."
            />
          </div>
        </div>
      </section>
    </>
  );
}

/* ================= AGENDA CARD ================= */
type AgendaCardProps = {
  title: string;
  speaker: string;
  description: string;
};

function AgendaCard({
  title,
  speaker,
  description,
}: AgendaCardProps)  {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm opacity-80">
      <h3 className="text-blue-500 font-semibold mb-2 text-sm font-Satoshi Variable">
        {title}
      </h3>

      <p className="text-gray-700 text-sm font-medium mb-3 font-Satoshi Variable">
        {speaker}
      </p>

      <p className="text-gray-500 text-sm leading-relaxed font-Satoshi Variable">
        {description}
      </p>
    </div>
  );
}

