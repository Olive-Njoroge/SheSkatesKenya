import {
  Users,
  Heart,
  Award,
  Globe,
} from "lucide-react";

const impactAreas = [
  {
    icon: Users,
    title: "Growing Participation",
    description:
      "Encouraging more girls and young women to participate in skateboarding.",
  },
  {
    icon: Heart,
    title: "Building Confidence",
    description:
      "Creating opportunities to build confidence, resilience and self-expression.",
  },
  {
    icon: Award,
    title: "Developing Leaders",
    description:
      "Supporting girls and women to develop leadership skills and discover their potential.",
  },
  {
    icon: Globe,
    title: "Strengthening Communities",
    description:
      "Using skateboarding to create meaningful connections and positive community change.",
  },
];

export default function Impact() {
  return (
    <section id="impact" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="uppercase tracking-widest font-bold text-[#5B2A86]">
            Our Impact
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#351653] mt-4">
            Creating Change, One Skate at a Time.
          </h2>

          <p className="text-gray-600 leading-8 mt-6">
            Every opportunity to skate, learn, connect and lead
            contributes to a stronger and more inclusive community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {impactAreas.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="flex gap-6 p-8 rounded-3xl bg-[#FFFDF7] border border-purple-100"
              >
                <div className="shrink-0">
                  <div className="w-14 h-14 bg-[#F4D323] rounded-2xl flex items-center justify-center">
                    <Icon size={28} className="text-[#351653]" />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#351653] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-7">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}