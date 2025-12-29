import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import leftArrow from "@/assets/left-arrow.svg";
import rightArrow from "@/assets/right-arrow.svg";
import Button from "./UI/button";
import call from "/images/call.svg";
import whatsapp from "/images/whatsapp.svg";
import navigation from "/images/navigation.svg";

/* -------------------- DATA -------------------- */

const DATA = [
  {
    id: 1,
    title: "Ultimutt - 5 Star Hotel & Pet Spa",
    subtitle: "Galleria Market",
    pickup: "Pick & Drop available across NCR",
    phone: ["08069069783", "08069061326"],
    whatsapp: "https://wa.me/c/918826022355",
    maps: "https://maps.google.com/?q=Ultimutt+-+5+star+Pet+Hotel+%26+Spa+Galleria+Market",
    image: "/images/facility-1.png",
  },
  {
    id: 2,
    title: "Ultimutt - 5 Star Pet Resort",
    subtitle: "Dog Boarding in Gurgaon & Delhi/NCR",
    pickup: "Pick & Drop available across NCR",
    phone: ["08069069783", "08069061326"],
    whatsapp: "https://wa.me/c/918826022355",
    maps: "https://maps.google.com/?q=Ultimutt+Pet+Resort+Gwal+Pahari",
    image: "/images/facility-2.png",
  },
  {
    id: 3,
    title: "Home Grooming by Ultimutt",
    subtitle: "Dogs & Cats",
    pickup: "Serving Gurgaon & South Delhi",
    phone: ["08069069783", "08069061326"],
    whatsapp: "https://wa.me/c/918826022355",
    maps: "",
    image: "/images/facility-3.png",
  },
];

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

/* -------------------- MAIN COMPONENT -------------------- */

export default function Facilities() {
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
        {/* LEFT ARROW */}
        <button
          onClick={prev}
          disabled={index === 0}
          className="absolute left-2 top-1/2 z-10 -translate-y-1/2 h-[50px] w-[50px] flex items-center justify-center rounded-full bg-white p-3 shadow-md disabled:opacity-40"
        >
          <img src={leftArrow} alt="Previous" />
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={next}
          disabled={index === maxIndex}
          className="absolute right-2 top-1/2 z-10 -translate-y-1/2 h-[50px] w-[50px] flex items-center justify-center rounded-full bg-white p-3 shadow-md disabled:opacity-40"
        >
          <img src={rightArrow} alt="Next" />
        </button>

        {/* CAROUSEL */}
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
          {DATA.map((item, i) => {
            const isActive = i === index;

            return (
              <motion.div
                key={item.id}
                className="flex-shrink-0 px-3"
                style={{ width: `${100 / visibleCards}%` }}
                animate={{
                  opacity: visibleCards === 1 ? (isActive ? 1 : 0) : 1,
                  pointerEvents:
                    visibleCards === 1 && !isActive ? "none" : "auto",
                }}
                transition={{ duration: 0.3 }}
              >
                <Card data={item} />
              </motion.div>
            );
          })}
        </motion.div>

        {/* DOTS */}
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

function Card({ data }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden pointer-events-auto">
      <img
        src={data.image}
        alt={data.title}
        className="h-[220px] w-full object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold">{data.title}</h3>
        <p className="text-sm text-gray-600">{data.subtitle}</p>
        <p className="text-xs text-green-600 mt-1">{data.pickup}</p>

        <div className="flex items-center gap-2 pt-4 flex-wrap">
          <a href={`tel:${data.phone[0]}`}>
            <Button variant="secondary">
              <img src={call} alt="Call" />
              <span className="hidden sm:inline">Call</span>
            </Button>
          </a>

          <a href={data.whatsapp} target="_blank" rel="noopener noreferrer">
            <Button variant="whatsapp">
              <img src={whatsapp} alt="WhatsApp" />
              <span className="hidden sm:inline">WhatsApp</span>
            </Button>
          </a>

          {data.maps && (
            <a href={data.maps} target="_blank" rel="noopener noreferrer">
              <Button variant="direction">
                <img src={navigation} alt="Directions" />
                <span className="hidden sm:inline">Direction</span>
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
