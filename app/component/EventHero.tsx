export default function EventHero() {
  return (
    <section
      className="  relative mx-auto overflow-hidden rounded-lg border-2 border-cyan-400
    w-full "
      style={{
        backgroundImage: "url('/simpli1.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/15" />

      {/* Content */}
      <div
            className="
                relative z-10 text-white
                px-4 py-6
                sm:px-6 sm:py-10
                md:px-12 md:py-16
            "
                        >
            {/* Logo */}
            <img
                src="/logo.svg"
                alt="Simplilearn"
                className="
                mb-4 sm:mb-6
                w-[160px] sm:w-[200px] md:w-[280px]
                h-auto
                "
            />

        {/* Badge Row */}
        <div className="flex items-center gap-4 mb-6">
          <span className="bg-cyan-400 text-black px-4 py-1 text-md font-satoshi Variable">
            Invite-Only
          </span>
          <span className="text-cyan-300 text-md underline font-satoshi Variable">
            An Executive Roundtable · Lunch
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-4xl font:bold font-satoshi Variable text-amber-400 leading-snug max-w-3xl">
          The Skills That Matter Next:
        </h1>

        <p className="mt-2 text-xl md:text-2xl text-amber-300 max-w-3xl font-satoshi Variable">
          Preparing Your Workforce <br className="hidden md:block font-satoshi Variable" />
          & Leaders for the AI Era
        </p>

        {/* Meta */}
        <div className="mt-8 space-y-3 text-white/90">
          <div className="flex items-center gap-3">
           <span className="text-lg"></span>
           <p>📅 February 20, 2026</p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-lg">📍</span>
            
            <span>Chamberlain’s Steak & Fish House, Dallas</span>
          </div>
        </div>
      </div>
    </section>
  );
}
