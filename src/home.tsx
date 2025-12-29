import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import appStore from "@/assets/app-store-white.svg";
import playStore from "@/assets/play-store-white.svg";

const Home = () => {
  const location = useLocation();

  // 🔁 Scroll to section after redirect
  useEffect(() => {
    const scrollTo = location.state?.scrollTo;
    if (!scrollTo) return;

    const element = document.getElementById(scrollTo);
    if (!element) return;

    const headerOffset = 90;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  }, [location]);

  return (
    <div
      id="home"
      className='relative
        bg-[url("/images/dog-img.png")]
        bg-no-repeat
        bg-center md:bg-left
        bg-[#f2e999]
        min-h-[425px] md:min-h-[550px]
        flex flex-col
        items-center
        justify-center
        px-4
        md:px-0'
    >
      {/* MOBILE BACKGROUND OPACITY (50%) */}
      <div className="absolute inset-0 bg-white/50 md:hidden" />

      {/* CONTENT */}
      <div className="flex mx-auto flex-col items-center text-center gap-y-5 md:gap-y-4 max-w-[750px] w-full z-10">
        <h2 className="text-[28px] leading-tight md:text-[48px] font-semibold">
          10,000+ Stays,
          <br /> 1,000 + Grooming Sesions
        </h2>

        <span className="text-[16px] leading-relaxed md:text-[26px] font-medium">
          Best Pet Services - right at click of a button, Booking 5 star Hotel,
          Spa and grooming at home for your pet at a click
        </span>

        <div className="flex gap-3 justify-center mt-2 md:mt-0">
          <a href=" " target="_blank" rel="noopener noreferrer">
            <img
              src={playStore}
              alt="Google Play"
              className="aspect-[12/4] w-[120px] md:w-[120px] lg:w-[140px]"
            />
          </a>

          <a href=" " rel="noopener noreferrer">
            <img
              src={appStore}
              alt="App Store"
              className="aspect-[12/4] w-[120px] md:w-[120px] lg:w-[140px]"
            />
          </a>
        </div>
      </div>

      {/* DESKTOP PHONE MOCKUP */}
      <img
        src="src/assets/i-phone-mockup.png"
        alt=""
        className="
          hidden
          md:block
          absolute
          right-[40px]
        "
      />
    </div>
  );
};

export default Home;
