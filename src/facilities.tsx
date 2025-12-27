import { useState } from "react";
import { motion } from "framer-motion";
import leftArrow from "@/assets/left-arrow.svg";
import rightArrow from "@/assets/right-arrow.svg";
import Button from "./UI/button";
import { IoCallOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { CiLocationArrow1 } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";

const DATA = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

export default function App() {
  const [index, setIndex] = useState(0);

  // cards per view based on breakpoint
  const maxIndex = DATA.length - 1;

  const next = () => {
    if (index < maxIndex) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="w-full bg-gray-50 py-12">
      <h2 className="text-[48px] font-semibold w-full text-center pb-2">
        Our Facilities
      </h2>
      <section className="relative mx-auto max-w-[1705px] px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Left Arrow */}
        <button
          onClick={prev}
          disabled={index === 0}
          className="absolute left-2 top-1/2 z-10 -translate-y-1/2 h-[50px] w-[50px] flex items-center justify-center rounded-full bg-white p-3 shadow-md disabled:opacity-40"
        >
          <img src={leftArrow} alt="" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={next}
          disabled={index === maxIndex}
          className="absolute right-2 top-1/2 z-10 -translate-y-1/2 h-[50px] w-[50px] flex items-center justify-center rounded-full bg-white p-3 shadow-md disabled:opacity-40"
        >
          <img src={rightArrow} alt="" />
        </button>

        {/* Carousel */}
        <motion.div
          className="flex gap-6"
          animate={{
            x: `-${index * 100}%`,
          }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
        >
          {DATA.map((item) => (
            <Card key={item.id} />
          ))}
        </motion.div>
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
            <IoCallOutline /> Call
          </Button>

          <Button variant="whatsapp">
            <FaWhatsapp />
            WhatsApp
          </Button>
          <Button variant="direction">
            <CiLocationArrow1 />
            Direction
          </Button>
        </div>
      </div>
    </div>
  );
}
