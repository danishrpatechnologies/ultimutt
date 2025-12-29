import React from "react";
import featureMockupLeft from "@/assets/feature-mockup-left.png";
import featureMockupRight from "@/assets/feature-mockup-right.png";
import checkmarkSquare from "@/assets/checkmark-square.png";

const Feature = () => {
  return (
    <div
      id="features"
      className='mx-auto max-w-full
      py-8
      px-4
      lg:px-[100px]
      bg-[url("/images/feature-bg.png")] bg-no-repeat bg-cover
      lg:max-h-[550px]'
    >
      {/* MAIN LAYOUT */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between w-full gap-6 lg:gap-4">
        {/* FEATURES (TOP on <1024px, LEFT on ≥1024px) */}
        <div className="relative flex flex-col h-full lg:min-h-[455px] w-full lg:w-auto">
          <h2 className="text-[32px] lg:text-[48px] font-semibold text-center lg:text-left mb-3">
            App Features
          </h2>

          {/* FEATURES LIST */}
          <div className="flex flex-col gap-4 justify-center lg:flex-1">
            {/* Row 1 */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-4">
              <div className="flex gap-[8px] rounded-full bg-white py-[10px] px-[24px] items-center max-w-full text-center">
                <img
                  src={checkmarkSquare}
                  alt=""
                  className="h-[24px] w-[24px]"
                />
                Get timely updates on the app
              </div>
              <div className="flex gap-[8px] rounded-full bg-white py-[10px] px-[24px] items-center max-w-full text-center">
                <img
                  src={checkmarkSquare}
                  alt=""
                  className="h-[24px] w-[24px]"
                />
                Time for your furry friend’s glow-up
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-4">
              <div className="flex gap-[8px] rounded-full bg-white py-[10px] px-[24px] items-center max-w-full text-center">
                <img
                  src={checkmarkSquare}
                  alt=""
                  className="h-[24px] w-[24px]"
                />
                Boarding, daycare, and grooming — all in one place
              </div>
              <div className="flex gap-[8px] rounded-full bg-white py-[10px] px-[24px] items-center max-w-full text-center">
                <img
                  src={checkmarkSquare}
                  alt=""
                  className="h-[24px] w-[24px]"
                />
                At-your-doorstep pet services
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-4">
              <div className="flex gap-[8px] rounded-full bg-white py-[10px] px-[24px] items-center max-w-full text-center">
                <img
                  src={checkmarkSquare}
                  alt=""
                  className="h-[24px] w-[24px]"
                />
                Activity Tracking for Boarding Services
              </div>
              <div className="flex gap-[8px] rounded-full bg-white py-[10px] px-[24px] items-center max-w-full text-center">
                <img
                  src={checkmarkSquare}
                  alt=""
                  className="h-[24px] w-[24px]"
                />
                Pickup and drop service available
              </div>
            </div>
          </div>
        </div>

        {/* MOCKUPS (BOTTOM on <1024px, RIGHT on ≥1024px) */}
        <div className="flex flex-row gap-0 mt-8 lg:mt-0 justify-center lg:justify-end">
          <img
            src={featureMockupLeft}
            className="relative right-[-40px] lg:right-[-80px] w-[180px] sm:w-[220px] lg:w-auto"
            alt=""
          />
          <img
            src={featureMockupRight}
            className="relative right-[40px] lg:right-0 w-[180px] sm:w-[220px] lg:w-auto"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Feature;
