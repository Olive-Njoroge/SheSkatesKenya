
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

const slides = [
  {
    type: "image",
    src: "https://res.cloudinary.com/drihxa6h5/image/upload/v1795783283/WhatsApp_Image_2026-11-27_at_3.37.34_PM_2_dhhgdx.jpg",
    headline: "Skateboarding. Empowerment. Sisterhood.",
    subtext:
      "Empowering girls and young women in Kenya through skateboarding, mentorship, and community.",
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/drihxa6h5/image/upload/v1795783269/WhatsApp_Image_2026-11-27_at_3.37.46_PM_sho0el.jpg",
    headline: "Breaking Barriers, One Skate at a Time",
    subtext:
      "Creating opportunities for girls to challenge limits, discover their potential, and thrive.",
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/drihxa6h5/image/upload/v1795783538/WhatsApp_Image_2026-11-27_at_3.45.15_PM_qfpjtq.jpg",
    headline: "Stronger Together. Rolling Together.",
    subtext:
      "Building a community rooted in sisterhood, creativity, inclusion, and self-expression.",
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/drihxa6h5/image/upload/v1795783241/WhatsApp_Image_2026-11-27_at_3.38.28_PM_pwfauz.jpg",
    headline: "Beyond the Skateboard",
    subtext:
      "Developing confidence, leadership, resilience, and life skills through sport and mentorship.",
  },
  {
  type: "image",
  src: "https://res.cloudinary.com/drihxa6h5/image/upload/v1795784908/Screenshot_2026-11-27_160802_wlrgtb.png",
  headline: "Creativity in Every Form",
  subtext:
    "Celebrating creativity, self-expression, and the unique talents within our skateboarding community.",
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/drihxa6h5/image/upload/v1795783314/WhatsApp_Image_2026-11-27_at_3.37.34_PM_qt1jie.jpg",
    headline: "Together, We Shape the Future",
    subtext:
      "Building a future where every girl has the opportunity to skate, lead, and excel.",
  },
];

// Cache media that has already loaded during this session.
const loadedCache = new Set();

export default function Home()  {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(
    loadedCache.has(slides[0].src)
  );

  const intervalRef = useRef(null);
  const videoRef = useRef(null);

  // Start or restart the slideshow timer.
  const startInterval = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5000);
  };

  // Start slideshow and clean up timer on unmount.
  useEffect(() => {
    startInterval();

    return () => clearInterval(intervalRef.current);
  }, []);

  // Update loading state when the active slide changes.
  useEffect(() => {
    setLoaded(loadedCache.has(slides[current].src));
  }, [current]);

  // Preload the next slide.
  useEffect(() => {
    const next = slides[(current + 1) % slides.length];

    if (loadedCache.has(next.src)) return;

    if (next.type === "image") {
      const img = new Image();

      img.src = next.src;

      img.onload = () => {
        loadedCache.add(next.src);
      };
    } else {
      const vid = document.createElement("video");

      vid.preload = "metadata";
      vid.muted = true;
      vid.src = next.src;

      vid.oncanplaythrough = () => {
        loadedCache.add(next.src);
      };
    }
  }, [current]);

  // Advance automatically when a video finishes playing.
  useEffect(() => {
    const vid = videoRef.current;

    if (!vid) return;

    const onEnded = () => {
      clearInterval(intervalRef.current);

      setCurrent((c) => (c + 1) % slides.length);

      startInterval();
    };

    vid.addEventListener("ended", onEnded);

    return () => vid.removeEventListener("ended", onEnded);
  }, [current]);

  // Navigate to a selected slide.
  const goTo = (index) => {
    clearInterval(intervalRef.current);

    setCurrent(index);

    startInterval();
  };

  const slide = slides[current];

  // Mark the current media as loaded.
  const markLoaded = () => {
    loadedCache.add(slide.src);
    setLoaded(true);
  };

  // Handle media loading errors so the spinner doesn't stay forever.
  const handleError = () => {
    setLoaded(true);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">

      {/* Background media */}
      <AnimatePresence mode="sync">
        {slide.type === "image" ? (
          <motion.img
            key={slide.src}
            src={slide.src}
            alt={`${slide.headline}. ${slide.subtext}`}
            loading="eager"
            onLoad={markLoaded}
            onError={handleError}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{
              opacity: loaded ? 1 : 0,
              scale: 1,
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        ) : (
          <motion.video
            key={slide.src}
            ref={videoRef}
            src={slide.src}
            onCanPlay={markLoaded}
            onError={handleError}
            initial={{ opacity: 0 }}
            animate={{ opacity: loaded ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-0 w-full h-full object-cover object-center"
            autoPlay
            muted
            playsInline
            preload={loadedCache.has(slide.src) ? "auto" : "metadata"}
          />
        )}
      </AnimatePresence>

      {/* Loading spinner */}
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-10 h-10 border-4 border-white/30 border-t-white rounded-full animate-spin" />
        </div>
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Hero text */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-white text-center pt-16">

        {/* Rotating headline */}
        <AnimatePresence mode="wait">
          <motion.h1
            key={slide.headline}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="text-3xl md:text-6xl font-extrabold leading-tight max-w-4xl drop-shadow-lg"
          >
            {slide.headline}
          </motion.h1>
        </AnimatePresence>

        {/* Rotating subtext */}
        <AnimatePresence mode="wait">
          <motion.p
            key={slide.subtext}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="text-sm md:text-xl font-medium text-white/90 max-w-2xl mt-5 drop-shadow-md"
          >
            {slide.subtext}
          </motion.p>
        </AnimatePresence>

      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current
                ? "bg-white w-5"
                : "bg-white/50 w-2 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

    </div>
  );
}
