import React, { useState } from "react";
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

const CARD_WIDTH = 367;
const CARD_HEIGHT = 514;
const OVERLAP = 120;

export default function OverlapCenteredCarousel() {
  const [active, setActive] = useState(0);
  const total = images.length;

  const next = () => {
    setActive((prev) => (prev + 1) % total);
  };

  const prev = () => {
    setActive((prev) => (prev - 1 + total) % total);
  };

  return (
    <div className="mx-auto flex max-w-full items-center justify-between py-4 md:px-[100px] px-[20px]">
      <div className="relative w-full max-w-[1709px] overflow-hidden flex flex-row items-center justify-center gap-4">
        {/* Left */}
        <button
          onClick={prev}
          className="z-50 h-12 w-12 flex items-center border justify-center rounded-full bg-white shadow hover:scale-105 transition"
        >
          <ChevronLeft />
        </button>

        {/* Carousel */}
        <div className="relative h-[560px] w-full flex items-center justify-center overflow-hidden rounded">
          {images.map((src, index) => {
            // 🔑 Circular offset (prevents jump)
            let offset = index - active;

            if (offset > total / 2) offset -= total;
            if (offset < -total / 2) offset += total;

            return (
              <motion.div
                key={index}
                className="absolute"
                animate={{
                  x: offset * (CARD_WIDTH - OVERLAP),
                  zIndex: offset === 0 ? 100 : 50 - Math.abs(offset),
                }}
                transition={{
                  duration: 0.45,
                  ease: "easeInOut",
                }}
              >
                <img
                  src={src}
                  alt="carousel item"
                  className="object-cover"
                  style={{
                    width: CARD_WIDTH,
                    height: CARD_HEIGHT,
                    borderRadius: "10px",
                    boxShadow:
                      offset === 0
                        ? "0 0px 10px rgba(0,0,0,0.55)"
                        : "0 0px 10px rgba(0,0,0,0.18)",
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Right */}
        <button
          onClick={next}
          className="z-50 h-12 w-12 flex items-center border justify-center rounded-full bg-white shadow hover:scale-105 transition"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
