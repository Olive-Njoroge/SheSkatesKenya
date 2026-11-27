
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../assets/SheSkatesLogo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Our Purpose", href: "#purpose" },
  { label: "Programs", href: "#programs" },
  { label: "Impact", href: "#impact" },
  { label: "Community", href: "#community" },
  { label: "Partners", href: "#partners" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scrolling while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close menu with Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const navbarBackground = scrolled
    ? "bg-[#351653]/95 backdrop-blur-md shadow-lg"
    : "bg-black/60 backdrop-blur-sm";

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] text-white px-4 sm:px-6 py-3 transition-all duration-300 ${navbarBackground}`}
      >
        <div className="max-w-7xl mx-auto flex items-center gap-4 sm:gap-6">

          {/* LOGO */}
          <a
            href="#home"
            onClick={closeMenu}
            className="flex items-center gap-2 sm:gap-3 shrink-0"
          >
            <img
              src={logo}
              alt="She Skates Kenya logo"
              className="h-12 w-12 sm:h-14 sm:w-14 object-contain"
            />

            <div className="leading-tight">
              <span className="block text-sm sm:text-base font-extrabold uppercase tracking-wide">
                She Skates
              </span>

              <span className="block text-xs font-medium text-[#F4D323] tracking-wider">
                Kenya
              </span>
            </div>
          </a>

          {/* DESKTOP NAVIGATION */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-8 ml-auto">
            {navLinks.map((link) => (
              <li key={link.label} className="group">
                <a
                  href={link.href}
                  className="relative inline-block py-2 text-sm font-medium text-white/90 hover:text-white transition-colors whitespace-nowrap"
                >
                  {link.label}

                  <span className="absolute left-0 bottom-0 h-0.5 w-full bg-[#F4D323] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />
                </a>
              </li>
            ))}
          </ul>

          {/* DESKTOP CTA */}
          <a
            href="#get-involved"
            className="hidden lg:inline-flex items-center justify-center ml-2 px-5 py-2.5 rounded-full bg-[#F4D323] text-[#351653] font-bold text-sm hover:bg-white transition-colors duration-300 shrink-0"
          >
            Get Involved
          </a>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="lg:hidden ml-auto relative z-[110] flex flex-col justify-center gap-1.5 p-2"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <motion.span
              className="block w-6 h-0.5 bg-white rounded-full"
              animate={
                menuOpen
                  ? { rotate: 45, y: 8 }
                  : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.25 }}
            />

            <motion.span
              className="block w-6 h-0.5 bg-white rounded-full"
              animate={{ opacity: menuOpen ? 0 : 1 }}
              transition={{ duration: 0.2 }}
            />

            <motion.span
              className="block w-6 h-0.5 bg-white rounded-full"
              animate={
                menuOpen
                  ? { rotate: -45, y: -8 }
                  : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.25 }}
            />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-0 z-[90] bg-gradient-to-br from-[#160820] via-[#351653] to-[#5B2A86] overflow-y-auto"
          >
            {/* Decorative glow */}
            <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 bg-[#F4D323]/10 rounded-full blur-3xl" />

            <div className="pointer-events-none absolute bottom-0 left-0 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl" />

            <div className="relative min-h-full flex flex-col px-7 pt-28 pb-10">

              {/* Mobile links */}
              <ul className="flex flex-col">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.05 + index * 0.05,
                    }}
                    className="border-b border-white/10"
                  >
                    <a
                      href={link.href}
                      onClick={closeMenu}
                      className="flex items-center gap-5 py-5 text-2xl font-bold text-white/90 hover:text-[#F4D323] transition-colors"
                    >
                      <span className="text-xs font-mono text-[#F4D323]/60">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{
                  duration: 0.3,
                  delay: 0.4,
                }}
                className="mt-auto pt-10"
              >
                <a
                  href="#get-involved"
                  onClick={closeMenu}
                  className="flex items-center justify-center w-full bg-[#F4D323] text-[#351653] py-4 rounded-full font-bold text-lg hover:bg-white transition-colors"
                >
                  Get Involved
                </a>

                <p className="text-center text-white/40 text-xs mt-6 tracking-widest uppercase">
                  Skate • Empower • Inspire
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
