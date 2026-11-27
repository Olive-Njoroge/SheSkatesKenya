
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="bg-[#FFFDF7] overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ABOUT TEXT */}
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F4D323]/20 text-[#5B2A86] font-semibold text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-[#F4D323]" />
              WHO WE ARE
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#351653] leading-tight">
              More Than a Sport.
              <span className="block text-[#5B2A86]">
                A Movement.
              </span>
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg mt-7">
              She Skates Kenya is a women-led skateboarding initiative
              founded in 2024 in Nairobi, Kenya, dedicated to empowering
              girls and young women through skateboarding, mentorship,
              creativity, leadership, and community engagement.
            </p>

            <p className="text-gray-600 leading-relaxed mt-5">
              We are committed to creating safe and inclusive spaces for
              young women in sports, providing mentorship and technical
              skateboarding training, promoting holistic wellness, and
              increasing female participation in skateboarding across Kenya.
            </p>

            <p className="text-gray-600 leading-relaxed mt-5">
              We believe skateboarding is more than a sport. It is a
              platform for self-expression, resilience, creativity,
              confidence, and positive social change.
            </p>

            {/* EXPLORE BUTTON */}
            <a
              href="#programs"
              className="inline-flex items-center gap-3 mt-8 px-7 py-4 bg-[#5B2A86] text-white rounded-full font-semibold hover:bg-[#351653] transition-all duration-300 group"
            >
              Explore What We Do

              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>

          {/* COMMUNITY IMAGE */}
          <div className="relative">

            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="https://res.cloudinary.com/drihxa6h5/image/upload/v1795783283/WhatsApp_Image_2026-11-27_at_3.37.34_PM_2_dhhgdx.jpg"
                alt="She Skates Kenya community"
                className="w-full h-[450px] md:h-[550px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#351653]/60 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-sm font-semibold tracking-widest uppercase text-[#F4D323]">
                  Skate • Empower • Inspire
                </p>

                <h3 className="text-2xl md:text-3xl font-bold mt-2">
                  Creating space for every girl to thrive.
                </h3>
              </div>
            </div>

            {/* DECORATIVE ELEMENTS */}
            <div className="absolute -top-5 -right-5 w-24 h-24 bg-[#F4D323] rounded-2xl -z-10 hidden md:block" />

            <div className="absolute -bottom-5 -left-5 w-24 h-24 border-4 border-[#5B2A86] rounded-2xl -z-10 hidden md:block" />

          </div>

        </div>
      </div>

    </section>
  );
}
