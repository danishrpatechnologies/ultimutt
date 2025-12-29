import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import leftArrow from "@/assets/left-arrow.svg";
import rightArrow from "@/assets/right-arrow.svg";
import Button from "./UI/button";
import call from "/images/call.svg";
import whatsapp from "/images/whatsapp.svg";
import navigation from "/images/navigation.svg";
import { FaLocationDot } from "react-icons/fa6";

/* -------------------- DATA -------------------- */

const RAW_DATA = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
const MIN_CARDS = 10;

const DATA =
  RAW_DATA.length >= MIN_CARDS
    ? RAW_DATA
    : Array.from({ length: MIN_CARDS }, (_, i) => ({ id: i + 1 }));

/* -------------------- RESPONSIVE HOOK -------------------- */

function useVisibleCards() {
  const [visible, setVisible] = useState(1);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) setVisible(3);
      else if (window.innerWidth >= 640) setVisible(2);
      else setVisible(1);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return visible;
}

/* -------------------- APP -------------------- */

export default function App() {
  const [index, setIndex] = useState(0);
  const visibleCards = useVisibleCards();
  const containerRef = useRef(null);

  const maxIndex = Math.max(0, DATA.length - visibleCards);
  const SWIPE_THRESHOLD = 80;

  const next = () => setIndex((i) => Math.min(i + 1, maxIndex));
  const prev = () => setIndex((i) => Math.max(i - 1, 0));

  useEffect(() => {
    if (index > maxIndex) setIndex(maxIndex);
  }, [maxIndex, index]);

  return (
    <div id="facilities" className="w-full bg-gray-50 py-12">
      <h2 className="md:text-[48px] sm:text-[32px] text-[28px] font-semibold text-center pb-6">
        Our Facilities
      </h2>

      <section
        ref={containerRef}
        className="relative mx-auto max-w-[1705px] px-4 overflow-hidden"
      >
        {/* Left Arrow */}
        <button
          onClick={prev}
          disabled={index === 0}
          className="absolute left-2 top-[40%] z-10 -translate-y-1/2 h-[50px] w-[50px] flex items-center justify-center rounded-full bg-white p-3 shadow-md disabled:opacity-40"
        >
          <img src={leftArrow} alt="Previous" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={next}
          disabled={index === maxIndex}
          className="absolute right-2 top-[40%] z-10 -translate-y-1/2 h-[50px] w-[50px] flex items-center justify-center rounded-full bg-white p-3 shadow-md disabled:opacity-40"
        >
          <img src={rightArrow} alt="Next" />
        </button>

        {/* Carousel */}
        <motion.div
          className="flex cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={(_, info) => {
            if (info.offset.x < -SWIPE_THRESHOLD) next();
            else if (info.offset.x > SWIPE_THRESHOLD) prev();
          }}
          animate={{ x: `-${index * (100 / visibleCards)}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {DATA.map((item) => (
            <Card key={item.id} />
          ))}
        </motion.div>

        {/* Dots */}
        <div className="flex justify-center mt-6 gap-3">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className="relative w-2.5 h-2.5 rounded-full bg-gray-300"
            >
              {index === i && (
                <motion.div
                  layoutId="activeDot"
                  className="absolute inset-0 rounded-full bg-gray-900"
                />
              )}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}

/* -------------------- CARD -------------------- */

function Card() {
  return (
    <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-3">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden pointer-events-auto">
        <img
          src="/images/facility-1.jpg"
          alt="Urban Tails Pet Hotel"
          className="h-[220px] w-full object-cover"
        />

        <div className="p-4">
          <h3 className="text-lg font-semibold">Urban Tails Pet Hotel</h3>

          <p className="flex items-center gap-2 mt-1 text-sm text-gray-500">
            <FaLocationDot />
            220, Sikender Pur Vashisht Complex, M G Road
          </p>

          <div className="flex items-center gap-2 pt-4 flex-wrap">
            <Button variant="secondary">
              <img src={call} alt="" /> Call
            </Button>

            <a
              href="https://wa.me/c/918826022355"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="whatsapp">
                <img src={whatsapp} alt="" />
                WhatsApp
              </Button>
            </a>

            <Button variant="direction">
              <img src={navigation} alt="" />
              Direction
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
