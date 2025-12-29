import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/images/team-1.jpeg",
  "/images/team-2.png",
  "/images/team-3.png",
  "/images/team-4.png",
  "/images/team-5.png",
  "/images/team-6.png",
  "/images/team-7.png",
  "/images/team-8.png",
  "/images/team-9.png",
  "/images/team-10.png",
];

const CARD_WIDTH = 340;
const CARD_HEIGHT = 500;
const GAP = 60;
const AUTOPLAY_DELAY = 4000;

export default function CleanTeamCarousel() {
  const [active, setActive] = useState(0);
  const total = images.length;
  const hovering = useRef(false);

  const next = () => setActive((p) => (p + 1) % total);
  const prev = () => setActive((p) => (p - 1 + total) % total);

  /* Autoplay */
  useEffect(() => {
    const id = setInterval(() => {
      if (!hovering.current) next();
    }, AUTOPLAY_DELAY);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="mx-auto max-w-full py-12 px-[20px] md:px-[100px]">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-semibold">Meet Our Team</h2>
        <p className="mt-2 text-lg md:text-xl text-black/60">
          The passionate pet lovers behind our care
        </p>
      </div>

      <div
        className="relative flex items-center justify-center overflow-hidden"
        onMouseEnter={() => (hovering.current = true)}
        onMouseLeave={() => (hovering.current = false)}
      >
        {/* Left Arrow (ALL screens) */}
        <button
          onClick={prev}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30
          h-11 w-11 sm:h-12 sm:w-12
          flex items-center justify-center
          rounded-full bg-white border transition hover:scale-105"
        >
          <ChevronLeft />
        </button>

        {/* Slides */}
        <div className="relative h-[520px] w-full flex items-center justify-center">
          {images.map((src, index) => {
            let offset = index - active;
            if (offset > total / 2) offset -= total;
            if (offset < -total / 2) offset += total;

            if (Math.abs(offset) > 3) return null;

            return (
              <motion.div
                key={index}
                animate={{
                  x: offset * (CARD_WIDTH + GAP),
                  scale: offset === 0 ? 1 : 0.88,
                }}
                transition={{
                  type: "spring",
                  stiffness: 140,
                  damping: 24,
                }}
                className="absolute"
                style={{
                  width: CARD_WIDTH,
                  height: CARD_HEIGHT,
                  zIndex: 10 - Math.abs(offset),
                }}
              >
                <img
                  src={src}
                  alt="team"
                  className="h-full w-full object-cover rounded-xl md:rounded-2xl"
                />
              </motion.div>
            );
          })}
        </div>

        {/* Right Arrow (ALL screens) */}
        <button
          onClick={next}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30
          h-11 w-11 sm:h-12 sm:w-12
          flex items-center justify-center
          rounded-full bg-white border transition hover:scale-105"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}
