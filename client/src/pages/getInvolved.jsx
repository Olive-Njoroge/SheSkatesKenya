import {
  Heart,
  Users,
  Handshake,
  ArrowRight,
} from "lucide-react";

const ways = [
  {
    icon: Users,
    title: "Join Our Community",
    description:
      "Be part of a growing community of girls and women who skate, support and inspire one another.",
  },
  {
    icon: Heart,
    title: "Volunteer",
    description:
      "Share your time, skills and passion to help us create meaningful experiences.",
  },
  {
    icon: Handshake,
    title: "Partner With Us",
    description:
      "Collaborate with She Skates Kenya to create opportunities and drive positive change.",
  },
];

export default function GetInvolved() {
  return (
    <section
      id="get-involved"
      className="py-24 px-6 bg-[#F4D323]"
    >
      <div className="max-w-7xl mx-auto">

        <div className="max-w-3xl mb-14">
          <p className="uppercase tracking-widest font-bold text-[#351653]">
            Get Involved
          </p>

          <h2 className="text-4xl md:text-6xl font-extrabold text-[#351653] mt-4">
            There Is a Place for You Here.
          </h2>

          <p className="text-[#351653]/80 text-lg mt-6 leading-8">
            Whether you skate, volunteer, support or collaborate,
            you can be part of the movement.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {ways.map((way, index) => {
            const Icon = way.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-sm"
              >
                <Icon size={36} className="text-[#5B2A86] mb-6" />

                <h3 className="text-2xl font-bold text-[#351653] mb-4">
                  {way.title}
                </h3>

                <p className="text-gray-600 leading-7 mb-8">
                  {way.description}
                </p>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 font-bold text-[#5B2A86] hover:gap-3 transition-all"
                >
                  Get in touch
                  <ArrowRight size={18} />
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}