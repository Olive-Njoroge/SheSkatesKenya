
import {
  Activity,
  Users,
  GraduationCap,
  Heart,
  Megaphone,
  Trophy,
} from "lucide-react";

const programs = [
  {
    icon: Activity,
    title: "Skateboarding Training",
    description:
      "Providing opportunities for girls and young women to learn, practise and grow their skateboarding skills.",
    type: "video",
    media:
      "https://res.cloudinary.com/drihxa6h5/video/upload/v1795797744/WhatsApp_Video_2026-11-27_at_7.37.57_PM_lruuge.mp4",
  },
  {
    icon: Users,
    title: "Mentorship & Leadership",
    description:
      "Building confidence, leadership, teamwork and personal development through mentorship.",
  },
  {
    icon: Trophy,
    title: "Skate Jams & Events",
    description:
      "Bringing the skate community together through skate jams, events and shared experiences.",
  },
  {
    icon: GraduationCap,
    title: "Workshops & Outreach",
    description:
      "Engaging schools and communities through educational and empowerment activities.",
  },
  {
    icon: Heart,
    title: "Wellness & Development",
    description:
      "Promoting holistic wellbeing, positive relationships and personal growth.",
  },
  {
    icon: Megaphone,
    title: "Advocacy & Inclusion",
    description:
      "Championing equality and increasing opportunities for girls and women in skateboarding.",
  },
];

export default function Programs() {
  return (
    <section
      id="programs"
      className="py-24 px-6 bg-[#FFFDF7]"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <p className="text-[#5B2A86] uppercase tracking-widest font-bold">
            What We Do
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#351653] mt-4">
            More Than Skateboarding.
          </h2>

          <p className="text-gray-600 text-lg mt-6 leading-8">
            We use skateboarding as a platform for empowerment,
            connection, creativity and growth.
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

          {programs.map((program, index) => {
            const Icon = program.icon;

            return (
              <article
                key={index}
                className="p-8 rounded-3xl bg-white border border-purple-100 hover:shadow-xl transition duration-300"
              >

                {/* Program Icon */}
                <div className="w-16 h-16 rounded-2xl bg-[#F4D323]/20 flex items-center justify-center mb-6">
                  <Icon
                    size={28}
                    strokeWidth={1.8}
                    className="text-[#5B2A86]"
                  />
                </div>

                {/* Program Media */}
                {program.media && (
                  <div className="w-full h-52 rounded-2xl overflow-hidden mb-6 bg-gray-100">

                    {program.type === "video" ? (
                      <video
                        src={program.media}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img
                        src={program.media}
                        alt={program.title}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    )}

                  </div>
                )}

                {/* Program Title */}
                <h3 className="text-2xl font-serif font-bold text-[#123F40] mb-3">
                  {program.title}
                </h3>

                {/* Program Description */}
                <p className="text-gray-600 text-sm leading-7">
                  {program.description}
                </p>

              </article>
            );
          })}

        </div>
      </div>
    </section>
  );
}
