import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import leftArrow from "@/assets/left-arrow.svg";
import rightArrow from "@/assets/right-arrow.svg";

const testimonials = [
  {
    name: "Sarthak Srivastava",
    rating: 5,
    text: "There’s no other program that walks you through exactly what you need to know to start an online store fast, written by someone who has built several 7-figure ecommerce businesses from scratch. What’s more, everything has been broken down in step-by-step detail with real action plans including finding your niche.",
    date: "22.03.2021",
  },
  {
    name: "Sarthak Srivastava",
    rating: 5,
    text: "There’s no other program that walks you through exactly what you need to know to start an online store fast, written by someone who has built several 7-figure ecommerce businesses from scratch. What’s more, everything has been broken down in step-by-step detail with real action plans including finding your niche.",
    date: "22.03.2021",
  },
  {
    name: "Sarthak Srivastava",
    rating: 5,
    text: "There’s no other program that walks you through exactly what you need to know to start an online store fast, written by someone who has built several 7-figure ecommerce businesses from scratch. What’s more, everything has been broken down in step-by-step detail with real action plans including finding your niche.",
    date: "22.03.2021",
  },
  {
    name: "Sarthak Srivastava",
    rating: 5,
    text: "There’s no other program that walks you through exactly what you need to know to start an online store fast, written by someone who has built several 7-figure ecommerce businesses from scratch. What’s more, everything has been broken down in step-by-step detail with real action plans including finding your niche.",
    date: "22.03.2021",
  },
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);

  // Detect screen size
  useEffect(() => {
    const updateView = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(3); // desktop
      } else {
        setCardsPerView(1); // mobile
      }
    };

    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  const maxIndex = testimonials.length - cardsPerView;

  const next = () => setIndex((prev) => Math.min(prev + 1, maxIndex));
  const prev = () => setIndex((prev) => Math.max(prev - 1, 0));

  return (
    <section
      id="testimonials"
      className="bg-[#F3F5F6] py-16 px-5 md:px-[100px]"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-semibold">
          We Are Happy To Hear From Pet Parents
        </h2>
        <p className="text-lg md:text-2xl mt-2">
          Tell us how we can make your pet’s life even happier
        </p>
      </div>

      <div className="relative flex items-center">
        {/* Left Arrow */}
        <button
          onClick={prev}
          disabled={index === 0}
          className="z-10 h-[50px] w-[50px] flex items-center justify-center bg-white p-3 rounded-full shadow disabled:opacity-30"
        >
          <img src={leftArrow} alt="Left arrow" />
        </button>

        {/* Slider */}
        <div className="overflow-hidden w-full">
          <motion.div
            animate={{ x: `-${(index * 100) / cardsPerView}%` }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="flex"
          >
            {testimonials.map((item, i) => (
              <div key={i} className="w-full lg:w-1/3 px-4 flex-shrink-0">
                <div className="bg-white p-6 h-[380px] shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gray-200" />
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-yellow-400 text-sm">
                        {"★".repeat(item.rating)}{" "}
                        <span className="text-gray-500">5.0</span>
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-base leading-relaxed h-[250px] overflow-y-auto">
                    {item.text}
                  </p>

                  <p className="text-xs text-gray-400 mt-4">{item.date}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={next}
          disabled={index >= maxIndex}
          className="z-10 bg-white h-[50px] w-[50px] p-3 flex items-center justify-center rounded-full shadow disabled:opacity-30"
        >
          <img src={rightArrow} alt="Right arrow" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full ${
              i === index ? "bg-black" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
