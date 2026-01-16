

import { submitRSVP } from "@/app/actions/rsvp";

export default function InsightsAndAgenda(): JSX.Element {
  return (
    <>
      {/* ================= INSIGHTS SECTION ================= */}
      <section className="bg-white px-6 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center font-Satoshi Variable">
          
          {/* LEFT CONTENT */}
          <div className="order-2 lg:order-1">
            <h2 className="text-orange-500 font-semibold text-lg mb-2 font-Satoshi Variable">
              Go behind the curtain with real
            </h2>
            <h3 className="text-orange-500 font-semibold text-lg mb-6 font-Satoshi Variable">
              examples and high-scale insights
            </h3>

            <p className="text-gray-900 mb-4 font-medium font-Satoshi Variable">
              You’ll walk away with:
            </p>

            <div className="border-l-4 border-orange-400 pl-6 space-y-4">
              <p className="text-gray-700 text-sm font-Satoshi Variable">
                A clear view of the leadership & workforce capabilities that will
                matter most over the next 24–36 months.
              </p>
              <p className="text-gray-700 text-sm font-Satoshi Variable">
                Insights from high-scale operating environments including the
                former CLO of McDonald’s on what truly scales and what breaks
                under pressure.
              </p>
              <p className="text-gray-700 text-sm font-Satoshi Variable">
                Signals for where capability gaps may already be forming in your
                organization.
              </p>
              <p className="text-gray-700 text-sm font-Satoshi Variable">
                Peer-validated perspectives from leaders running workforce,
                talent, and transformation ecosystems at scale.
              </p>
              <p className="text-gray-700 text-sm font-Satoshi Variable">
                Actionable insights you can take straight into your next exec
                meeting.
              </p>
            </div>

            {/* RSVP FORM (NO DESIGN CHANGE) */}
            <form
              action={submitRSVP}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your work email to confirm your attendance"
                className="flex-1 px-4 py-3 border rounded-md text-sm"
              />

              <button
                type="submit"
                className="bg-orange-400 text-white px-6 py-3 rounded-md font-semibold"
              >
                RSVP Now
              </button>
            </form>
          </div>

          {/* RIGHT IMAGE */}
          <div className="order-1 lg:order-2 flex justify-center mb-8 lg:mb-0">
            <img
              src="/chess.svg"
              alt="Chess Strategy"
              className="max-w-sm"
            />
          </div>
        </div>
      </section>
    </>
  );
}
