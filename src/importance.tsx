import React from "react";
import petParents from "@/assets/pet-parents.png";
import modernFacilities from "@/assets/modern-facilities.png";
import professionalPet from "@/assets/professional-pet.png";
import trainedPets from "@/assets/trained-pets.png";

const importance = () => {
  return (
    <div className='mx-auto flex max-w-full items-center justify-between py-4 md:px-[100px] px-[20px] bg-[url("/images/bg-2.png")] bg-no-repeat bg-cover bg-top-left min-h-[224px]'>
      <div className="flex flex-col align-items-center content-center gap-[10px] max-w-[102px] text-center">
        <img
          src={petParents}
          className="w-[100px] h-[100px] aspect-square mx-auto"
          alt=""
        />
        <p className="text-[19px] font-semibold color-[#252525]">
          Run by Pet Parents
        </p>
      </div>
      <div className="flex flex-col align-items-center content-center gap-[10px] max-w-[238px] text-center">
        <img
          src={modernFacilities}
          className="w-[100px] h-[100px] aspect-square mx-auto"
          alt=""
        />
        <p className="text-[19px] font-semibold color-[#252525]">
          Modern Facilities curated specifically for pets
        </p>
      </div>
      <div className="flex flex-col align-items-center content-center gap-[10px] max-w-[262px] text-center">
        <img
          src={trainedPets}
          className="w-[100px] h-[100px] aspect-square mx-auto"
          alt=""
        />
        <p className="text-[19px] font-semibold color-[#252525]">
          Expert groomers- Trained internally with perfection
        </p>
      </div>
      <div className="flex flex-col align-items-center content-center gap-[10px] max-w-[206px] text-center">
        <img
          src={professionalPet}
          className="w-[100px] h-[100px] aspect-square mx-auto"
          alt=""
        />
        <p className="text-[19px] font-semibold color-[#252525]">
          Only professional pet boarding chain in NCR
        </p>
      </div>
    </div>
  );
};

export default importance;
