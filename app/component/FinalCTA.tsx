

import { submitRSVP } from "@/app/actions/rsvp";

export default function FinalCTA(): JSX.Element {
  return (
    <section className="relative w-full overflow-hidden">
      <img
        src="/Mask group.svg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <p className="text-white text-sm mb-4 font-Satoshi Variable">Space is limited.</p>

        <form
          action={submitRSVP}
          className="flex flex-col sm:flex-row gap-4 max-w-xl bg-[#E7E7E7] p-3 rounded-md"
        >
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your work email to confirm your attendance"
            className="flex-1 px-4 py-3 rounded-md text-sm"
          />

          <button
            type="submit"
            className="bg-orange-400 text-white px-6 py-3 rounded-md font-semibold"
          >
            RSVP Now
          </button>
        </form>
      </div>
    </section>
  );
}

