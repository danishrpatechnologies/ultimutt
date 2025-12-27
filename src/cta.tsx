import React from "react";
import call from "/images/call.svg";
import whatsapp from "/images/whatsapp.svg";
import Button from "./UI/button";

const cta = () => {
  return (
    <div className="mx-auto flex max-w-full items-center justify-between py-4 md:px-[100px] px-[20px]">
      <h2 className="text-[25px] font-semibold">
        Book Your Dog’s Appointment Instantly
      </h2>
      <div className="flex items-center gap-x-[5px]">
        <Button variant="secondary">
          <img src={call} alt="" /> Call
        </Button>

        <Button variant="whatsapp">
          <img src={whatsapp} alt="" />
          WhatsApp
        </Button>
      </div>
    </div>
  );
};

export default cta;
