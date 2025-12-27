import React from "react";
import appStore from "@/assets/app-store.svg";
import playStore from "@/assets/play-store.svg";

const home = () => {
  return (
    <div className='bg-[url("/images/dog-img.png")] bg-no-repeat bg-left min-h-[550px] flex items-center justify-center bg-[#f2e999] relative'>
      <div className="flex mx-auto flex-col items-center text-center gap-y-4 max-w-[750px] w-full">
        <h2 className="text-[48px] font-semibold">
          10,000+ Stays, 1,000+ Grooming's
        </h2>
        <span className="text-[26px] font-medium">
          Best Pet Services - right at click of a button, Booking 5 star Hotel ,
          Spa and grooming at home for your pet at a click
        </span>
        <div className="flex gap-[8px]">
          <img src={playStore} className="aspect-[12/4] w-[120px]" alt="" />
          <img src={appStore} className="aspect-[12/4] w-[120px]" alt="" />
        </div>
      </div>
      <img
        src="src/assets/i-phone-mockup.png"
        className="absolute right-[40px]"
        alt=""
      />
    </div>
  );
};

export default home;
