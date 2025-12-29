import React from "react";
import call from "/images/call.svg";
import whatsapp from "/images/whatsapp.svg";
import Button from "./UI/button";

const Cta = () => {
  return (
    <div
      className="mx-auto max-w-full
      px-4 py-6
      sm:px-6
      md:px-[100px]
      flex flex-col gap-4
      md:flex-row md:items-center md:justify-between"
    >
      <h2 className="text-center md:text-left text-[16px] sm:text-[18px] md:text-[25px] font-semibold">
        Book Your Dog’s Appointment Instantly
      </h2>

      <div className="flex items-center justify-center md:justify-end gap-2">
        <a href="tel:08069069783">
          <Button variant="secondary" className="flex items-center gap-2">
            <img src={call} alt="Call" />
            Call
          </Button>
        </a>

        <a
          href="https://wa.me/c/918826022355"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="whatsapp" className="flex items-center gap-2">
            <img src={whatsapp} alt="WhatsApp" />
            WhatsApp
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Cta;
