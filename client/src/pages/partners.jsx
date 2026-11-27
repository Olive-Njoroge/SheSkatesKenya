
const partners = [
  {
    name: "Skateboarding Society of Kenya",
    logo: "https://res.cloudinary.com/drihxa6h5/image/upload/v1795799747/Screenshot_2026-11-27_201530_ijhtkj.png",
  },
  {
    name: "Growing Alexandra Club",
  },
  {
    name: "Skateistan South Africa",
    logo: "https://res.cloudinary.com/drihxa6h5/image/upload/v1795800493/Screenshot_2026-11-27_202754_se41c3.png",
  },
  {
    name: "FCity Market",
  },
  {
    name: "Uganda Skateboard Society",
    logo: "https://res.cloudinary.com/drihxa6h5/image/upload/v1795799736/Screenshot_2026-11-27_201324_bqicur.png",
  },
  {
    name: "Youthing Africa",
    logo: "https://res.cloudinary.com/drihxa6h5/image/upload/v1795800788/Screenshot_2026-11-27_203248_ngcsei.png",
  },
  {
    name: "Mindful Minds Kenya",
    logo: "https://res.cloudinary.com/drihxa6h5/image/upload/v1795800347/Screenshot_2026-11-27_202527_gqyko7.png",
  },
  {
    name: "The Garbage Initiative",
    logo: "https://res.cloudinary.com/drihxa6h5/image/upload/v1795800073/Screenshot_2026-11-27_202041_aatojp.png",
  },
  {
    name: "Game Changers Marketing Agency",
    logo: "https://res.cloudinary.com/drihxa6h5/image/upload/v1795801093/Screenshot_2026-11-27_203755_g3kanf.png",
  },
  {
    name: "St. Patrick's Special School for Children with Disabilities",
    logo: "https://res.cloudinary.com/drihxa6h5/image/upload/v1795800957/Screenshot_2026-11-27_203539_a1ecrl.png",
  },
  {
    name: "Tumshangilie Mtoto Children's Home",
  },
];

export default function Partners() {
  return (
    <section id="partners" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-[#5B2A86] uppercase tracking-widest font-bold">
            Our Partners
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#351653] mt-4">
            Stronger Together.
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mt-6 leading-8">
            Collaboration helps us create opportunities, build
            connections and make skateboarding more inclusive.
          </p>
        </div>

        {/* Partner Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {partners.map((partner, index) => (
            <div
              key={index}
              className="group min-h-64 flex flex-col items-center justify-center text-center p-6 rounded-3xl bg-[#FFFDF7] border border-purple-100 hover:border-[#5B2A86] hover:shadow-lg transition duration-300"
            >

              {/* Partner Logo */}
              <div className="w-full h-36 flex items-center justify-center mb-5">

                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    loading="lazy"
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition duration-300"
                  />
                ) : (
                  <div className="w-20 h-20 rounded-2xl bg-[#F4D323]/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#5B2A86]">
                      {partner.name
                        .split(" ")
                        .filter(Boolean)
                        .slice(0, 2)
                        .map((word) => word[0])
                        .join("")}
                    </span>
                  </div>
                )}

              </div>

              {/* Partner Name */}
              <h3 className="font-semibold text-[#351653] text-sm md:text-base leading-6">
                {partner.name}
              </h3>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
