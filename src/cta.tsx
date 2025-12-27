import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import Button from "./UI/button";

const cta = () => {
  return (
    <div className="mx-auto flex max-w-full items-center justify-between py-4 md:px-[100px] px-[20px]">
      <h2 className="text-[25px] font-semibold">
        Book Your Dog’s Appointment Instantly
      </h2>
      <div className="flex items-center gap-x-[5px]">
        <Button variant="secondary">
          <IoCallOutline /> Call
        </Button>

        <Button variant="whatsapp">
          <FaWhatsapp />
          WhatsApp
        </Button>
      </div>
    </div>
  );
};

export default cta;
