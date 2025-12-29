import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import leftArrow from "@/assets/left-arrow.svg";
import rightArrow from "@/assets/right-arrow.svg";
import Button from "./UI/button";
import call from "/images/call.svg";
import whatsapp from "/images/whatsapp.svg";
import navigation from "/images/navigation.svg";
import { FaLocationDot } from "react-icons/fa6";

/* -------------------- DATA (min 10 cards) -------------------- */

const RAW_DATA = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
const MIN_CARDS = 10;

const DATA =
  RAW_DATA.length >= MIN_CARDS
    ? RAW_DATA
    : Array.from({ length: MIN_CARDS }, (_, i) => ({
        id: i + 1,
      }));

/* -------------------- RESPONSIVE HOOK -------------------- */

function useVisibleCards() {
  const [visible, setVisible] = useState(1);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) setVisible(3); // lg
      else if (window.innerWidth >= 640) setVisible(2); // sm
      else setVisible(1); // mobile
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

  const maxIndex = Math.max(0, DATA.length - visibleCards);

  const next = () => {
    setIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prev = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  /* Clamp index on resize */
  useEffect(() => {
    if (index > maxIndex) setIndex(maxIndex);
  }, [maxIndex, index]);

  return (
    <div id="facilities" className="w-full bg-gray-50 py-12">
      <h2 className="md:text-[48px] sm:text-[32px] font-semibold text-center pb-2">
        Our Facilities
      </h2>

      <section className="relative mx-auto max-w-[1705px] px-4 overflow-hidden">
        {/* Left Arrow */}
        <button
          onClick={prev}
          disabled={index === 0}
          className="absolute left-2 top-1/2 z-10 -translate-y-1/2 h-[50px] w-[50px] flex items-center justify-center rounded-full bg-white p-3 shadow-md disabled:opacity-40"
          aria-label="Previous"
        >
          <img src={leftArrow} alt="Previous" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={next}
          disabled={index === maxIndex}
          className="absolute right-2 top-1/2 z-10 -translate-y-1/2 h-[50px] w-[50px] flex items-center justify-center rounded-full bg-white p-3 shadow-md disabled:opacity-40"
          aria-label="Next"
        >
          <img src={rightArrow} alt="Next" />
        </button>

        {/* Carousel */}
        <motion.div
          className="flex gap-6"
          animate={{ x: `-${(index * 100) / visibleCards}%` }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {DATA.map((item) => (
            <Card key={item.id} />
          ))}
        </motion.div>

        {/* Dots */}
        <div className="flex justify-center mt-6 gap-4">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="relative w-2.5 h-2.5 rounded-full bg-gray-300"
            >
              {index === i && (
                <motion.div
                  layoutId="activeDot"
                  className="absolute inset-0 rounded-full bg-gray-900"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
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
    <div
      className="
        min-w-full
        sm:min-w-[calc(50%-12px)]
        lg:min-w-[calc(33.333%-16px)]
        bg-white
        rounded-2xl
        shadow-lg
        overflow-hidden
      "
    >
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

        <div className="flex items-center gap-x-[5px] pt-4">
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
  );
}
