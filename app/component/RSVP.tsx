

import { submitRSVP } from "@/app/actions/rsvp";

export default function RSVPSection()  {
  return (
    <section className="bg-white py-0 px-4 sm:px-6 lg:px-12">
      
      {/* RSVP Form */}
      <form
        action={submitRSVP}
        className="max-w-xl mx-auto bg-gradient-to-b from-gray-200 to-gray-300 p-6 sm:p-8 rounded-md shadow-md flex flex-col sm:flex-row items-center gap-4"
      >
        <input
          type="email"
          name="email"               
          required                  
          placeholder="Enter your work email to confirm your attendance"
          className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        <button
          type="submit"
          className="px-6 py-3 bg-orange-500 text-white font-semibold font-Satoshi Variable rounded-md hover:bg-orange-600 transition"
        >
          RSVP Now
        </button>
      </form>

      {/* Text Content */}
      <div className="mt-10 max-w-3xl mx-auto text-center">
        <p className="text-gray-500 mb-6 font-Satoshi Variable">
          AI is accelerating change across every operational layer. Roles are shifting.
          Leadership models are collapsing and reforming. Frontline and mid-level
          managers will soon lead teams of people and intelligent agents.
        </p>

        <p className="text-gray-500 mb-6 font-Satoshi Variable">
          But even the most advanced enterprises are asking the same question:
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 font-Satoshi Variable">
          Which capabilities will matter most,
          <br className="hidden sm:block font-Satoshi Variable" />
          and how do we build them at scale?
        </h2>

        <p className="text-gray-500 py-6 font-Satoshi Variable">
          This invite-only roundtable gathers CHROs, CLOs, and enterprise workforce
          leaders for a candid, senior-level discussion on what’s coming next.
        </p>
      </div>
    </section>
  );
}
