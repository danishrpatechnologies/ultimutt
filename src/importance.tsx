import React from "react";
import petParents from "@/assets/pet-parents.png";
import modernFacilities from "@/assets/modern-facilities.png";
import professionalPet from "@/assets/professional-pet.png";
import trainedPets from "@/assets/trained-pets.png";

const Importance = () => {
  return (
    <div
      className='mx-auto max-w-full bg-[url("/images/bg-2.png")] bg-no-repeat bg-cover bg-top
      px-4 py-8
      sm:px-6
      md:px-[100px]
      min-h-[224px]'
    >
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-10">
        {/* Item */}
        <div className="flex flex-col items-center gap-3 text-center">
          <img
            src={petParents}
            className="w-20 h-20 md:w-[100px] md:h-[100px]"
            alt=""
          />
          <p className="text-sm md:text-[19px] font-semibold text-[#252525]">
            Run by Pet Parents
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 text-center">
          <img
            src={modernFacilities}
            className="w-20 h-20 md:w-[100px] md:h-[100px]"
            alt=""
          />
          <p className="text-sm md:text-[19px] font-semibold text-[#252525]">
            Modern Facilities curated specifically for pets
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 text-center">
          <img
            src={trainedPets}
            className="w-20 h-20 md:w-[100px] md:h-[100px]"
            alt=""
          />
          <p className="text-sm md:text-[19px] font-semibold text-[#252525]">
            Expert groomers – Trained internally with perfection
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 text-center">
          <img
            src={professionalPet}
            className="w-20 h-20 md:w-[100px] md:h-[100px]"
            alt=""
          />
          <p className="text-sm md:text-[19px] font-semibold text-[#252525]">
            Only professional pet boarding chain in NCR
          </p>
        </div>
      </div>
    </div>
  );
};

export default Importance;
