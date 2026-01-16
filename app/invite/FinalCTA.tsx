


export default function FinalCTA()  {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <img
        src="/Mask group.svg"
        alt="Restaurant background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-14 text-white">
        
        {/* Top Text */}
        <p className="text-sm font-medium mb-2 font-Satoshi Variable">
          Space is limited.
        </p>

        <p className="text-sm text-white/90 max-w-xl mb-4 font-Satoshi Variable">
          You may RSVP by emailing{" "}
          <a
            href="mailto:shiham.aba@simplilearn.net"
            className="underline font-medium font-Satoshi Variable"
          >
            shiham.aba@simplilearn.net
          </a>{" "}
          or by clicking the button below to send your confirmation.
        </p>

        {/* SEND RSVP EMAIL BUTTON */}
        <a
          href="mailto:shiham.aba@simplilearn.net?subject=RSVP%20Confirmation&body=Hello%2C%0A%0AI%20would%20like%20to%20RSVP%20for%20the%20event.%0A%0AThank%20you."
          className="inline-block bg-orange-400 hover:bg-orange-500 transition text-white text-sm font-semibold px-6 py-3 rounded-md mb-10"
        >
          SEND RSVP EMAIL
        </a>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-white/80 mt-10 gap-4 font-Satoshi Variable">
          <span className="text-lg font-semibold tracking-wide font-Satoshi Variable">
            simplilearn
          </span>
          <span>
            © 2009–2025. Simplilearn Solutions. All Rights Reserved.
          </span>
        </div>
      </div>
    </section>
  );
}
