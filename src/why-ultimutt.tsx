import React from "react";
import lovePets from "/images/love-pets.png";
import pawsomeFood from "/images/pawsome-food.png";
import monitoring from "/images/monitoring.png";
import dayCare from "/images/day-care.png";
import playGroom from "/images/play-groom.png";
import swimmingPool from "/images/swimming-pool.png";

const why = () => {
  return (
    <div className="mx-auto flex flex-col gap-8 max-w-full items-center justify-between py-12 md:px-[100px] px-[20px]">
      <div className="flex flex-col gap-2 w-full text-center">
        <h2 className="md:text-[48px] sm:text-[32px] text-[28px] font-semibold">
          Why Choose Ultimutt?
        </h2>
        <span className="md:text-[26px] sm:text-[18px] font-medium">
          Your baby will have the time of their life with us
        </span>
      </div>
      <div className="flex flex-wrap gap-4 lg:gap-x-[18vw] lg:gap-y-[6vw] md:gap-x-[10vw] md:gap-y-[5vw] sm:gap-x-[50px] sm:gap-y-[30px] why-flex justify-center">
        <div className="text-center flex flex-col items-center max-w-[245px] w-full">
          <img
            src={lovePets}
            className="h-[153px] w-[172px] mb-[12px]"
            alt=""
          />
          <p className="text-[20px] font-semibold">We Love Pets</p>
          <span className="text-[15px] font-medium">
            Our staff is trained to handle pets and everyone is a pet lover!
          </span>
        </div>
        <div className="text-center flex flex-col items-center max-w-[245px] w-full">
          <img
            src={pawsomeFood}
            className="h-[153px] w-[172px] mb-[12px]"
            alt=""
          />
          <p className="text-[20px] font-semibold">PawSome Food</p>
          <span className="text-[15px] font-medium">
            We provide fresh home meals cooked with love and care
          </span>
        </div>
        <div className="text-center flex flex-col items-center max-w-[245px] w-full">
          <img
            src={monitoring}
            className="h-[153px] w-[172px] mb-[12px]"
            alt=""
          />
          <p className="text-[20px] font-semibold">24hrs monitoring</p>
          <span className="text-[15px] font-medium">
            Our care takers constantly monitor your loved one.
          </span>
        </div>
        <div className="text-center flex flex-col items-center max-w-[245px] w-full">
          <img src={dayCare} className="h-[153px] w-[172px] mb-[12px]" alt="" />
          <p className="text-[20px] font-semibold">Dog Boarding / Day Care</p>
          <span className="text-[15px] font-medium">
            Keep your pet with us for many days. We’ll take care of them as you
            do.
          </span>
        </div>
        <div className="text-center flex flex-col items-center max-w-[245px] w-full">
          <img
            src={playGroom}
            className="h-[153px] w-[172px] mb-[12px]"
            alt=""
          />
          <p className="text-[20px] font-semibold">Play, Train & Groom</p>
          <span className="text-[15px] font-medium">
            Exercise sessions, basic obedience training and socialization.
          </span>
        </div>
        <div className="text-center flex flex-col items-center max-w-[245px] w-full">
          <img
            src={swimmingPool}
            className="h-[153px] w-[172px] mb-[12px]"
            alt=""
          />
          <p className="text-[20px] font-semibold">Swimming Pool</p>
          <span className="text-[15px] font-medium">
            Beat the heat with pawsome swimming sessions in summers
          </span>
        </div>
      </div>
    </div>
  );
};

export default why;
