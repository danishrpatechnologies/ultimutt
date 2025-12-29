import React from "react";
import location from "/images/pin-location.png";
import instagram from "/images/instagram-link.svg";
import whatsapp from "/images/whatsapp-link.svg";
import playstore from "/images/google-play.svg";
import appstore from "/images/app-store.svg";
import footerLogo from "/images/footer-logo.svg";
import call from "/images/call.svg";

const Footer = () => {
  return (
    <footer className="bg-[#1F1F1F] text-white">
      {/* Top Section */}
      <div
        className="
          mx-auto max-w-full
          px-4
          md:px-[100px]
          pt-12 pb-6
          flex flex-col
          md:flex-row
          md:items-start
          md:justify-between
          gap-0
        "
      >
        {/* Left */}
        <div className="fflex flex-col gap-4 w-full md:max-w-[420px] text-center md:text-left">
          <img
            src={footerLogo}
            alt="Ultimutt Logo"
            className="h-[88px] w-[83px] mx-auto md:mx-0"
          />

          <p className="text-[14px] md:text-[15px] text-white/80">
            We provide dedicated, expert dog-only care with advanced veterinary
            support, grooming, training, and daycare services all designed to
            keep your dog healthy, happy, and safe every day
          </p>

          <div className="flex gap-3 pt-2 justify-center md:justify-start">
            <a
              href="https://instagram.com/ultimutt_petresort?igshid=NzZlODBkYWE4Ng=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="Instagram" className="h-8 w-8" />
            </a>
            <a
              href="https://wa.me/c/918826022355"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={whatsapp} alt="WhatsApp" className="h-8 w-8" />
            </a>
            <a
              href="https://maps.app.goo.gl/P92m9eAyfHjyvcpa8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={location} alt="Location" className="h-8 w-8" />
            </a>
          </div>
        </div>

        {/* Divider (desktop only) */}
        <div className="hidden md:block w-[1px] h-[180px] bg-white/20 mx-6" />

        {/* Middle */}
        <div className="flex flex-col gap-4 w-full md:max-w-[360px] text-center md:text-left">
          <h3 className="text-[18px] font-semibold">Download Our App</h3>

          <p className="text-[14px] md:text-[16px] text-white/70">
            Instant booking and updates from our app
          </p>

          <div className="flex gap-3 pt-2 justify-center md:justify-start">
            <a
              href="https://play.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={playstore} alt="Google Play" className="h-[44px]" />
            </a>
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={appstore} alt="App Store" className="h-[44px]" />
            </a>
          </div>
        </div>

        {/* Divider (desktop only) */}
        <div className="hidden md:block w-[1px] h-[180px] bg-white/20 mx-6" />

        {/* Right */}
        <div className="flex flex-col gap-4 w-full md:max-w-[320px] text-center md:text-left">
          <h3 className="text-[18px] font-semibold">Contact Us</h3>

          <p className="text-[14px] md:text-[15px] text-white/80">
            Dedicated support for your dog’s health, safety, and happiness.
          </p>

          <div className="flex flex-col gap-2 pt-2 text-[14px] items-center md:items-start">
            <a
              href="tel:08069069783"
              className="flex items-center gap-2 hover:text-white"
            >
              <img src={call} alt="Call" className="h-4 w-4" />
              08069069783
            </a>
            <a
              href="tel:08069061326"
              className="flex items-center gap-2 hover:text-white"
            >
              <img src={call} alt="Call" className="h-4 w-4" />
              08069061326
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div
          className="
            mx-auto max-w-full
            px-4
            md:px-[100px]
            py-4
            flex flex-col
            md:flex-row
            items-center
            justify-between
            gap-3
            text-white/70
          "
        >
          <span className="text-[14px] md:text-[16px] text-center md:text-left">
            Copyright © 2026 Ultimutt. All Rights Reserved.
          </span>

          <div className="flex gap-6">
            <a
              href="/privacy-policy"
              className="hover:text-white text-[14px] md:text-[16px]"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-use"
              className="hover:text-white text-[14px] md:text-[16px]"
            >
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
