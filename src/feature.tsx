import React from "react";
import featureMockupLeft from "@/assets/feature-mockup-left.png";
import featureMockupRight from "@/assets/feature-mockup-right.png";
import checkmarkSquare from "@/assets/checkmark-square.png";

const feature = () => {
  return (
    <div
      id="features"
      className='mx-auto flex max-w-full items-center justify-between py-8 md:px-[100px] px-[20px] bg-[url("/images/feature-bg.png")] bg-no-repeat bg-cover max-h-[550px]'
    >
      <div className="flex items-start justify-between w-full gap-4 h-full">
        <div className="relative flex flex-col h-full min-h-[455px]">
          <h2 className="md:text-[48px] sm:text-[32px] font-semibold">
            App Features
          </h2>

          <div className="flex flex-col gap-4 min-h-[calc(100%-72px)] h-full justify-center flex-[1]">
            <div className="flex items-center justify-center gap-4">
              <div className="flex flex-row gap-[8px] rounded-full bg-white py-[10px] px-[24px] w-auto">
                <img
                  src={checkmarkSquare}
                  className="aspect-square w-[24px] h-[24px]"
                  alt=""
                />{" "}
                Get timely updates on the app
              </div>
              <div className="flex flex-row gap-[8px] rounded-full bg-white py-[10px] px-[24px] w-auto">
                <img
                  src={checkmarkSquare}
                  className="aspect-square w-[24px] h-[24px]"
                  alt=""
                />{" "}
                Time for your furry friend’s glow-up
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="flex flex-row gap-[8px] rounded-full bg-white py-[10px] px-[24px] w-auto">
                <img
                  src={checkmarkSquare}
                  className="aspect-square w-[24px] h-[24px]"
                  alt=""
                />{" "}
                Boarding, daycare, and grooming — all in one place
              </div>
              <div className="flex flex-row gap-[8px] rounded-full bg-white py-[10px] px-[24px] w-auto">
                <img
                  src={checkmarkSquare}
                  className="aspect-square w-[24px] h-[24px]"
                  alt=""
                />{" "}
                At-your-doorstep pet services
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="flex flex-row gap-[8px] rounded-full bg-white py-[10px] px-[24px] w-auto">
                <img
                  src={checkmarkSquare}
                  className="aspect-square w-[24px] h-[24px]"
                  alt=""
                />{" "}
                Activity Tracking for Boarding Services
              </div>
              <div className="flex flex-row gap-[8px] rounded-full bg-white py-[10px] px-[24px] w-auto">
                <img
                  src={checkmarkSquare}
                  className="aspect-square w-[24px] h-[24px]"
                  alt=""
                />{" "}
                Pickup and drop service available
              </div>
            </div>
          </div>
        </div>
        <div className="right flex flex-row gap-[0px] ml-[50px]">
          <img src={featureMockupLeft} alt="" />
          <img
            src={featureMockupRight}
            className="relative left-[-80px]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default feature;
