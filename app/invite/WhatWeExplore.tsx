

import { JSX } from "react";

type CardProps = {
  imageSrc: string;
  title: string;
  description: string;
  highlight?: boolean;
};

export default function WhatWeExplore (): JSX.Element {
  return (
    <section className="bg-[#EEF4FF] py-24 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl font-bold text-orange-900 mb-4 font-Satoshi Variable">
          What We’ll Explore
        </h2>

        <p className="text-gray-900 mb-12 font-Satoshi Variable">
          The critical shifts every enterprise must plan for:
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 font-Satoshi Variable">
          <Card
           imageSrc="/skills.svg"
            title="Skills Decay"
            description="every 2–3 years faster for technical skills"
            highlight
          />

          <Card
           imageSrc="/manager.svg"
            title="Manager Role Shift"
            description="orchestrating people + AI agents"
          />

          <Card
            imageSrc="/Leaders.svg"
            title="Leaders + AI Co-Pilots"
            description="requires sensemaking and systems thinking"
          />

          <Card
            imageSrc="/Frontline.svg"
            title="Frontline Capability"
            description="now depends on digital fluency"
          />

          <Card
            imageSrc="/core.svg"
            title="Core Human Capabilities"
            description="analytical reasoning and scenario planning"
          />

          <Card
            imageSrc="/winning.svg"
            title="Winning Organizations"
            description="predict skills ahead of demand"
          />
        </div>
      </div>
    </section>
  );
}

function Card({
  imageSrc,
  title,
  description,
  highlight = false,
}: CardProps): JSX.Element {
  return (
    <div
      className={`bg-white rounded-xl p-6 shadow-md
        ${highlight ? "ring-2 ring-orange-500" : ""}
      `}
    >
      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-50 mb-4 font-Satoshi Variable">
       <img
          src={imageSrc}
          alt={title}
          className="w-6 h-6 object-contain"
        />
      </div>

      <h3 className="font-semibold text-gray-900 mb-2 font-Satoshi Variable">
        {title}
      </h3>

      <p className="text-gray-700 text-sm leading-relaxed font-Satoshi Variable">
        {description}
      </p>
    </div>
  );
}

