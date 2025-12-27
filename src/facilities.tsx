import { useState } from "react";
import { motion } from "framer-motion";
import leftArrow from "@/assets/left-arrow.svg";
import rightArrow from "@/assets/right-arrow.svg";
import Button from "./UI/button";
import call from "/images/call.svg";
import whatsapp from "/images/whatsapp.svg";
import navigation from "/images/navigation.svg";
import { FaLocationDot } from "react-icons/fa6";

const DATA = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

export default function App() {
  const [index, setIndex] = useState(0);
  const maxIndex = DATA.length - 1;

  const next = () => {
    if (index < maxIndex) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div id="facilities" className="w-full bg-gray-50 py-12">
      <h2 className="md:text-[48px] sm:text-[32px] font-semibold w-full text-center pb-2">
        Our Facilities
      </h2>
      <section className="relative mx-auto max-w-[1705px] px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Left Arrow */}
        <button
          onClick={prev}
          disabled={index === 0}
          className="absolute left-2 top-1/2 z-10 -translate-y-1/2 h-[50px] w-[50px] flex items-center justify-center rounded-full bg-white p-3 shadow-md disabled:opacity-40"
          aria-label="Previous"
        >
          <img src={leftArrow} alt="Left arrow" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={next}
          disabled={index === maxIndex}
          className="absolute right-2 top-1/2 z-10 -translate-y-1/2 h-[50px] w-[50px] flex items-center justify-center rounded-full bg-white p-3 shadow-md disabled:opacity-40"
          aria-label="Next"
        >
          <img src={rightArrow} alt="Right arrow" />
        </button>

        {/* Carousel */}
        <motion.div
          className="flex gap-6"
          animate={{ x: `-${index * 100}%` }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {DATA.map((item) => (
            <Card key={item.id} />
          ))}
        </motion.div>

        {/* Dots */}
        <div className="flex justify-center mt-6 gap-4">
          {DATA.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="relative w-4 h-4 rounded-full bg-gray-300"
            >
              {index === i && (
                <motion.div
                  layoutId="activeDot"
                  className="absolute top-0 left-0 w-4 h-4 rounded-full bg-gray-900"
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
          <FaLocationDot /> 220, Sikender Pur Vashisht Complex, M G Road
        </p>

        <div className="flex items-center gap-x-[5px] pt-4">
          <Button variant="secondary">
            <img src={call} alt="" /> Call
          </Button>

          <Button variant="whatsapp">
            <img src={whatsapp} alt="" />
            WhatsApp
          </Button>
          <Button variant="direction">
            <img src={navigation} alt="" />
            Direction
          </Button>
        </div>
      </div>
    </div>
  );
}
