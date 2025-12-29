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
      md:px-[100px]
      bg-[url("/images/feature-bg.png")] bg-no-repeat bg-cover
      md:max-h-[550px]'
    >
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full gap-6 md:gap-4">
        {/* LEFT */}
        <div className="relative flex flex-col h-full md:min-h-[455px] w-full md:w-auto sm:min-h-[auto]">
          <h2 className="text-[32px] md:text-[48px] font-semibold text-center md:text-left mb-3">
            App Features
          </h2>

          {/* FEATURES */}
          <div className="flex flex-col gap-4 justify-center md:flex-1 ">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex flex-row gap-[8px] rounded-full bg-white py-[10px] px-[24px] w-auto items-center ">
                <img
                  src={checkmarkSquare}
                  alt=""
                  className="h-[24px] w-[24px]"
                />
                Get timely updates on the app
              </div>
              <div className="flex flex-row gap-[8px] rounded-full bg-white py-[10px] px-[24px] w-auto items-center ">
                <img
                  src={checkmarkSquare}
                  alt=""
                  className="h-[24px] w-[24px]"
                />
                Time for your furry friend’s glow-up
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex flex-row gap-[8px] rounded-full bg-white py-[10px] px-[24px] w-auto items-center ">
                <img
                  src={checkmarkSquare}
                  alt=""
                  className="h-[24px] w-[24px]"
                />
                Boarding, daycare, and grooming — all in one place
              </div>
              <div className="flex flex-row gap-[8px] rounded-full bg-white py-[10px] px-[24px] w-auto items-center ">
                <img
                  src={checkmarkSquare}
                  alt=""
                  className="h-[24px] w-[24px]"
                />
                At-your-doorstep pet services
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex flex-row gap-[8px] rounded-full bg-white py-[10px] px-[24px] w-auto items-center ">
                <img
                  src={checkmarkSquare}
                  alt=""
                  className="h-[24px] w-[24px]"
                />
                Activity Tracking for Boarding Services
              </div>
              <div className="flex flex-row gap-[8px] rounded-full bg-white py-[10px] px-[24px] w-auto items-center ">
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

        {/* RIGHT IMAGES */}
        <div className="right flex flex-row gap-0 md:ml-[50px] mt-8 md:mt-0">
          <img
            src={featureMockupLeft}
            className="w-[180px] sm:w-[220px] md:w-auto"
            alt=""
          />
          <img
            src={featureMockupRight}
            className="relative
            left-0
            md:left-[-80px]
            w-[180px] sm:w-[220px] md:w-auto"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Feature;
