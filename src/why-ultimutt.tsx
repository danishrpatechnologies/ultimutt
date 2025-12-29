import React from "react";
import lovePets from "/images/love-pets.png";
import pawsomeFood from "/images/pawsome-food.png";
import monitoring from "/images/monitoring.png";
import dayCare from "/images/day-care.png";
import playGroom from "/images/play-groom.png";
import swimmingPool from "/images/swimming-pool.png";

const Why = () => {
  return (
    <div className="mx-auto max-w-full py-12 px-[20px] md:px-[100px]">
      {/* Heading */}
      <div className="flex flex-col gap-2 text-center mb-12">
        <h2 className="text-[28px] sm:text-[32px] md:text-[48px] font-semibold">
          Why Choose Ultimutt?
        </h2>
        <span className="text-[16px] sm:text-[18px] md:text-[26px] font-medium">
          Your baby will have the time of their life with us
        </span>
      </div>

      {/* Grid */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-y-10
          gap-x-8
          place-items-center
        "
      >
        {/* Card */}
        <div className="text-center flex flex-col items-center max-w-[245px]">
          <img
            src={lovePets}
            className="mb-3 w-[100px] h-[100px] sm:w-[172px] sm:h-[153px]"
            alt="We Love Pets"
          />
          <p className="text-[20px] font-semibold">We Love Pets</p>
          <span className="text-[15px] font-medium">
            Our staff is trained to handle pets and everyone is a pet lover!
          </span>
        </div>

        <div className="text-center flex flex-col items-center max-w-[245px]">
          <img
            src={pawsomeFood}
            className="mb-3 w-[100px] h-[100px] sm:w-[172px] sm:h-[153px]"
            alt="PawSome Food"
          />
          <p className="text-[20px] font-semibold">PawSome Food</p>
          <span className="text-[15px] font-medium">
            We provide fresh home meals cooked with love and care
          </span>
        </div>

        <div className="text-center flex flex-col items-center max-w-[245px]">
          <img
            src={monitoring}
            className="mb-3 w-[100px] h-[100px] sm:w-[172px] sm:h-[153px]"
            alt="24hrs Monitoring"
          />
          <p className="text-[20px] font-semibold">24hrs Monitoring</p>
          <span className="text-[15px] font-medium">
            Our care takers constantly monitor your loved one.
          </span>
        </div>

        <div className="text-center flex flex-col items-center max-w-[245px]">
          <img
            src={dayCare}
            className="mb-3 w-[100px] h-[100px] sm:w-[172px] sm:h-[153px]"
            alt="Dog Boarding"
          />
          <p className="text-[20px] font-semibold">Dog Boarding / Day Care</p>
          <span className="text-[15px] font-medium">
            Keep your pet with us for many days. We’ll take care of them as you
            do.
          </span>
        </div>

        <div className="text-center flex flex-col items-center max-w-[245px]">
          <img
            src={playGroom}
            className="mb-3 w-[100px] h-[100px] sm:w-[172px] sm:h-[153px]"
            alt="Play Train Groom"
          />
          <p className="text-[20px] font-semibold">Play, Train & Groom</p>
          <span className="text-[15px] font-medium">
            Exercise sessions, basic obedience training and socialization.
          </span>
        </div>

        <div className="text-center flex flex-col items-center max-w-[245px]">
          <img
            src={swimmingPool}
            className="mb-3 w-[100px] h-[100px] sm:w-[172px] sm:h-[153px]"
            alt="Swimming Pool"
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

export default Why;
