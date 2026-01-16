type Speaker = {
  name: string;
  role: string;
  description: string;
  image: string;
};

const speakers: Speaker[] = [
  {
    name: "Rob Lauber",
    role: "SVP and Chief Learning Officer, McDonald’s",
    description:
      "Rob Lauber is a global workforce and capability-building leader with over 25 years of experience helping organizations prepare leaders and frontline workers for change. Most recently, he served as SVP and Chief Learning Officer at McDonald’s, leading learning and development across 37,000+ restaurants worldwide. His perspective is especially relevant as organizations rethink leadership and capability models in the age of AI.",
    image: "/Mask group.jpg",
  },
  {
    name: "Krishna Kumar",
    role: "Founder and CEO, Simplilearn",
    description:
      "Krishna Kumar is the Founder and CEO of Simplilearn, working closely with enterprises navigating workforce transformation driven by AI and digital change. At the center of the learning and skills ecosystem, he brings a unique perspective on how roles, leadership expectations, and capabilities are evolving across industries.",
    image: "/krishna.jpg",
  },
  {
    name: "Sudipto Mitra",
    role: "Chief Revenue Officer, Simplilearn",
    description:
      "Sudipto Mitra is a senior transformation and growth leader with over 20 years of experience helping enterprises navigate large-scale change across technology, operations, and talent. As Chief Revenue Officer at Simplilearn, he works with executive teams to address workforce capability gaps as AI reshapes roles and operating models.",
    image: "/RobLauber 1.jpg",
  },
];

export default function FeaturedSpeakers(): JSX.Element {
  return (
    <section className="bg-gradient-to-b from-blue-600 to-blue-800 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-orange-400 font-semibold mb-10 font-Satoshi Variable">
          Featured Speakers
        </h2>

        {/* Speakers */}
        <div className="space-y-10 font-Satoshi Variable">
          {speakers.map((speaker) => (
            <div
              key={speaker.name}
              className="flex flex-col sm:flex-row gap-6 items-start font-Satoshi Variable"
            >
              {/* Image */}
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-24 h-24 rounded-md object-cover shrink-0"
              />

              {/* Content */}
              <div>
                <h3 className="text-cyan-300 font-semibold text-lg mb-1 font-Satoshi Variable">
                  {speaker.name}
                </h3>

                <p className="text-blue-100 text-sm mb-3 font-Satoshi Variable">
                  {speaker.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Info Box */}
        <div className="mt-14 bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-lg">
          <h4 className="text-cyan-300 font-semibold mb-2 font-Satoshi Variable">
            Additional Expert Perspectives
          </h4>
          <p className="text-blue-100 text-sm font-Satoshi Variable">
            Invited experts from leading consulting and enterprise learning
            organizations will contribute short perspectives, offering insight
            into how large organizations are evolving skills and leadership
            models in the AI era.
          </p>
        </div>
      </div>
    </section>
  );
}
