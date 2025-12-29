import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Pratibha Kodesia",
    subtitle: "Zaaru’s pawrent",
    rating: 5,
    text: "I am so glad that I discovered Ultimut. Had to look for a day boarding for my baby and can’t express how stress free we are now after we found Ultimut. My baby loves spending the day there. He’s well taken care of, loved, pampered. He’s picked up from home and dropped back in a school bus 🐾 🐾 🚌. My friends and family are so amused watching his videos which are sent across from time to time. He has a disciplined schedule at the centre. All I can say is god bless the people out there who take care of my baby when we are at work. Also, my boy has found love ❤️ at the centre 🥰 Those who are looking for a school for their furry baby… your search ends here at Ultimut.",
  },
  {
    name: "Anshika Kashyap",
    subtitle: "Oscar’s parent",
    rating: 5,
    text: "This was my first time keeping my pets at boarding. I was very skeptical and anxious for my pet Oscar, but when I visited and met the staff I was relieved. Ultimutt pet boarding is just amazing. They took good care of my pet and also gave every single update from time to time whether my pet ate or pooped, peed and fun-time videos whenever I asked. Seeing photos of my pet I was sure my pet feels very comfortable at their place like their second home. I highly recommend it.",
  },
  {
    name: "Priyanka Rana",
    subtitle: "Home grooming",
    rating: 5,
    text: "Amazing home grooming experience with Ultimutt! My dog was calm and happy throughout the session. A special thank you to Anuj for being so gentle, skilled, and friendly. Will definitely book again.",
  },
  {
    name: "Raja Jethani",
    subtitle: "Grooming Salon",
    rating: 5,
    text: "We had a great experience with our dog’s haircut at Ultimutt. The location is very convenient and the premises are spacious and well maintained. The groomers were professional and took the time to ask us about the preferred coat length and the specific services we wanted. Our dog looked absolutely cute after grooming and was treated with a lot of care and patience. Highly recommended.",
  },
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateView = () => {
      setCardsPerView(window.innerWidth >= 1024 ? 3 : 1);
    };
    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  /** Autoplay with pause on hover */
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered]);

  /** Drag handling */
  const handleDragEnd = (_, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset < -80 || velocity < -300) {
      setIndex((prev) => (prev + 1) % testimonials.length);
    } else if (offset > 80 || velocity > 300) {
      setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    }
  };

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

      {/* Slider */}
      <div
        ref={containerRef}
        className="overflow-hidden w-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          animate={{ x: `-${(index * 100) / cardsPerView}%` }}
          transition={{ type: "tween", duration: 0.6 }}
          className="flex cursor-grab active:cursor-grabbing"
        >
          {[...testimonials, ...testimonials].map((item, i) => (
            <div key={i} className="w-full lg:w-1/3 px-4 flex-shrink-0">
              <div className="bg-white p-6 h-[380px] shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  {/* Profile Initial */}
                  <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-lg font-semibold">
                    {item.name.charAt(0)}
                  </div>

                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.subtitle}</p>
                    <p className="text-yellow-400 text-sm">
                      {"★".repeat(item.rating)}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 text-base leading-relaxed h-[230px] overflow-y-auto">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-8 gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full ${
              i === index % testimonials.length ? "bg-black" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
