import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/images/team-1.png",
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

// Desktop-tuned values (UNCHANGED)
const CARD_WIDTH = 360;
const CARD_HEIGHT = 520;
const OVERLAP = 140;
const SIDE_FADE = 240;

export default function OverlapCenteredCarousel() {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const total = images.length;

  const next = () => setActive((p) => (p + 1) % total);
  const prev = () => setActive((p) => (p - 1 + total) % total);

  // Detect very small screens
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section className="mx-auto max-w-[1700px] px-6 md:px-[100px] pt-20 pb-10">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-[28px] sm:text-[32px] md:text-[48px] font-semibold">
          Meet Our Team
        </h2>
        <p className="text-[16px] sm:text-[18px] md:text-[26px] font-medium text-black/70">
          The passionate pet lovers behind our care
        </p>
      </div>

      {/* Carousel */}
      <div className="relative flex flex-col items-center">
        {/* Desktop arrows */}
        <button
          onClick={prev}
          className="hidden md:flex
    absolute
    left-0
    top-1/2
    -translate-y-1/2
    z-50
    h-12 w-12
    items-center justify-center
    rounded-full border bg-white shadow-md
    transition hover:scale-105"
        >
          <ChevronLeft />
        </button>

        <div className="relative h-[560px] w-full overflow-hidden">
          {/* Edge fades (desktop only) */}
          <div
            className="pointer-events-none absolute left-0 top-0 h-full z-40 hidden md:block"
            style={{
              width: SIDE_FADE,
              background:
                "linear-gradient(to right, white 35%, rgba(255,255,255,0))",
            }}
          />
          <div
            className="pointer-events-none absolute right-0 top-0 h-full z-40 hidden md:block"
            style={{
              width: SIDE_FADE,
              background:
                "linear-gradient(to left, white 35%, rgba(255,255,255,0))",
            }}
          />

          {/* Slides */}
          {images.map((src, index) => {
            let offset = index - active;
            if (offset > total / 2) offset -= total;
            if (offset < -total / 2) offset += total;

            const isActive = offset === 0;

            return (
              <motion.div
                key={index}
                className="absolute left-1/2 top-1/2"
                style={{ width: CARD_WIDTH, height: CARD_HEIGHT }}
                animate={{
                  x: `calc(-50% + ${
                    offset * (CARD_WIDTH - (isMobile ? 0 : OVERLAP))
                  }px)`,
                  y: "-50%",
                  scale: isActive ? 1 : 0.96,
                  zIndex: isActive ? 30 : 20 - Math.abs(offset),
                }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
              >
                <img
                  src={src}
                  alt="team"
                  className="h-full w-full object-cover"
                  style={{
                    borderRadius: 12,
                    boxShadow: isActive
                      ? "0 18px 40px rgba(0,0,0,0.35)"
                      : "0 10px 24px rgba(0,0,0,0.18)",
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        <button
          onClick={next}
          className="hidden md:flex
    absolute
    right-0
    top-1/2
    -translate-y-1/2
    z-50
    h-12 w-12
    items-center justify-center
    rounded-full border bg-white shadow-md
    transition hover:scale-105"
        >
          <ChevronRight />
        </button>

        {/* Mobile arrows (bottom) */}
        <div className="flex md:hidden gap-6 mt-6">
          <button
            onClick={prev}
            className="h-12 w-12 flex items-center justify-center rounded-full border bg-white shadow-md"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={next}
            className="h-12 w-12 flex items-center justify-center rounded-full border bg-white shadow-md"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
