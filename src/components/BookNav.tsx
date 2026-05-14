import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const chapters = [
  "Prologue",
  "About",
  "Education",
  "Skills",
  "Projects",
  "Experience",
  "Certifications",
  "Contact",
];

const BookNav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);

      const sections = document.querySelectorAll(".book-page");
      sections.forEach((section, i) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
          setActiveIndex(i);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (index: number) => {
    const sections = document.querySelectorAll(".book-page");
    sections[index]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
      transition={{ duration: 0.3 }}
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-end gap-3"
    >
      {chapters.map((ch, i) => (
        <button
          key={i}
          onClick={() => scrollTo(i)}
          className="group flex items-center gap-3"
        >
          <span
            className={`text-xs font-sans tracking-wide transition-all duration-300 opacity-0 group-hover:opacity-100
              ${activeIndex === i ? "!opacity-100 text-ink" : "text-ink-light"}`}
          >
            {ch}
          </span>
          <span
            className={`block rounded-full transition-all duration-300
              ${activeIndex === i
                ? "w-3 h-3 bg-gold"
                : "w-1.5 h-1.5 bg-page-edge group-hover:bg-gold"
              }`}
          />
        </button>
      ))}
    </motion.nav>
  );
};

export default BookNav;
