

export default function InviteIntro()  {
  return (
    <section className="bg-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        {/* RSVP Info */}
        <p className="text-gray-700 text-sm mb-4 font-Satoshi Variable">
          You may RSVP by emailing{" "}
          <a
            href="mailto:shiham.aba@simplilearn.net"
            className="font-medium text-gray-900 underline font-Satoshi Variable"
          >
            shiham.aba@simplilearn.net
          </a>{" "}
          or by clicking the button below to send your confirmation.
        </p>

        {/* CTA Button */}
        <a
          href="mailto:shiham.aba@simplilearn.net?subject=RSVP%20Confirmation&body=Hello%2C%0A%0AI%20would%20like%20to%20RSVP%20for%20the%20event.%0A%0AThank%20you."
          className="inline-block mb-10 bg-orange-400 hover:bg-orange-500 transition text-white text-sm font-semibold px-6 py-3 rounded-md font-Satoshi Variable"
        >
          SEND RSVP EMAIL
        </a>

        {/* Description */}
        <p className="text-gray-800 text-sm leading-relaxed mb-6 font-Satoshi Variable">
          AI is accelerating change across every operational layer. Roles are
          shifting. Leadership models are collapsing and reforming. Frontline
          and mid-level managers will soon lead teams of people and intelligent
          agents.
        </p>

        <p className="text-gray-800 text-sm leading-relaxed mb-8 font-Satoshi Variable">
          But even the most advanced enterprises are asking the same question:
        </p>

        {/* Highlight Question */}
        <h2 className="text-center text-black font-bold text-xl mb-6 font-Satoshi Variable">
          Which capabilities will matter most,
          <br />
          and how do we build them at scale?
        </h2>

        {/* Closing */}
        <p className="text-gray-700 text-sm leading-relaxed text-center font-Satoshi Variable">
          This invite-only roundtable gathers CHROs, CLOs, and enterprise
          workforce leaders for a candid, senior-level discussion on what’s
          coming next.
        </p>
      </div>
    </section>
  );
}

