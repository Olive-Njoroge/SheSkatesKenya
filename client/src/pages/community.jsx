import { Camera, ArrowRight } from "lucide-react";

export default function Community() {
  return (
    <section id="community" className="py-24 px-6 bg-[#FFFDF7]">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-12">

          <div>
            <p className="text-[#5B2A86] uppercase tracking-widest font-bold">
              Our Community
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold text-[#351653] mt-4">
              The People. The Energy. The Skate.
            </h2>

            <p className="text-gray-600 mt-5 max-w-2xl leading-8">
              Every session, every connection and every moment
              tells a story of growth, sisterhood and possibility.
            </p>
          </div>

          <Camera className="text-[#5B2A86] w-12 h-12 shrink-0" />
        </div>

        {/* Gallery will be added here using real She Skates photos */}

        <div className="rounded-3xl bg-[#351653] text-white p-12 text-center">
          <Camera size={40} className="text-[#F4D323] mx-auto mb-5" />

          <h3 className="text-2xl font-bold mb-4">
            Our Story in Motion
          </h3>

          <p className="text-white/70 max-w-xl mx-auto leading-7">
            From skate sessions to community events, discover
            the moments that bring our community together.
          </p>

          <p className="text-[#F4D323] font-semibold mt-6">
            Gallery coming soon
          </p>
        </div>

      </div>
    </section>
  );
}