import {
  Target,
  Eye,
  Heart,
  Users,
  Sparkles,
  Lightbulb,
  Trophy,
  ShieldCheck,
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Sisterhood",
    description: "Building supportive relationships and uplifting one another.",
  },
  {
    icon: Sparkles,
    title: "Self-expression",
    description: "Encouraging girls to express themselves freely and confidently.",
  },
  {
    icon: ShieldCheck,
    title: "Inclusivity",
    description: "Creating spaces where everyone feels welcome and valued.",
  },
  {
    icon: Lightbulb,
    title: "Creativity",
    description: "Inspiring innovation, imagination and new possibilities.",
  },
  {
    icon: Trophy,
    title: "Leadership",
    description: "Developing confidence and leadership through sport.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Strengthening communities through connection and collaboration.",
  },
];

export default function Purpose() {
  return (
    <section id="purpose" className="bg-[#351653] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-[#F4D323] uppercase tracking-[0.25em] font-bold">
            Our Purpose
          </p>

          <h2 className="text-4xl md:text-6xl font-extrabold mt-4">
            Driven by Purpose.
            <br />
            United by Skateboarding.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">

          <div className="bg-white/10 rounded-3xl p-10">
            <Target size={36} className="text-[#F4D323] mb-5" />

            <h3 className="text-3xl font-bold mb-4">Our Mission</h3>

            <p className="text-white/80 leading-8">
              To champion and cultivate excellence in Kenya's women's
              skateboarding while enriching lives and uplifting communities.
            </p>
          </div>

          <div className="bg-white/10 rounded-3xl p-10">
            <Eye size={36} className="text-[#F4D323] mb-5" />

            <h3 className="text-3xl font-bold mb-4">Our Vision</h3>

            <p className="text-white/80 leading-8">
              An inclusive and thriving skateboarding community where
              every girl and woman has the opportunity to participate,
              lead and excel.
            </p>
          </div>

        </div>

        <div>
          <h3 className="text-center text-3xl font-bold mb-12">
            The Values That Move Us
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition"
                >
                  <Icon size={30} className="text-[#F4D323] mb-4" />

                  <h4 className="text-xl font-bold mb-3">
                    {value.title}
                  </h4>

                  <p className="text-white/70 leading-7">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}