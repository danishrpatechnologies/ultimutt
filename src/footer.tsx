import React from "react";
import telegram from "/images/telegram-link.svg";
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
      <div className="mx-auto flex max-w-full items-center justify-between py-4 md:px-[100px] px-[20px] pt-12">
        {/* Left Section */}
        <div className="flex flex-col gap-4 max-w-[420px]">
          <img
            src={footerLogo}
            alt="Ultimutt Logo"
            className="h-[88px] w-[83px]"
          />

          <p className="md:text-[15px] sm:text-[14px] text-white/80">
            We provide dedicated, expert dog-only care with advanced veterinary
            support, grooming, training, and daycare services all designed to
            keep your dog healthy, happy, and safe every day
          </p>

          {/* Social Links */}
          <div className="flex gap-[12px] pt-2">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="Instagram" className="h-8 w-8" />
            </a>

            <a
              href="https://wa.me/918787004236"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={whatsapp} alt="WhatsApp" className="h-8 w-8" />
            </a>

            <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
              <img src={telegram} alt="Telegram" className="h-8 w-8" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-[1px] h-[180px] bg-white/20 mx-8" />

        {/* Middle Section */}
        <div className="flex flex-col gap-4 max-w-[360px]">
          <h3 className="text-[18px] font-semibold">Download Our App</h3>

          <p className="md:text-[16px] sm:text-[14px] text-white/70">
            Instant booking and updates from our app
          </p>

          <div className="flex gap-3 pt-2">
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

        {/* Divider */}
        <div className="hidden md:block w-[1px] h-[180px] bg-white/20 mx-8" />

        {/* Right Section */}
        <div className="flex flex-col gap-4 max-w-[320px]">
          <h3 className="text-[18px] font-semibold">Contact Us</h3>

          <p className="md:text-[16px] sm:text-[14px] text-white/70 leading-[22px]">
            Faridabad - Gurgaon Near CNG pump, Gwal Pahari, Gurugram, Bandhwari,
            Haryana 122003
          </p>

          {/* Call Links */}
          <div className="flex flex-col gap-2 pt-2 text-[14px]">
            <a
              href="tel:8787004236"
              className="flex items-center gap-2 hover:text-white"
            >
              <img src={call} alt="Call" className="h-4 w-4" />
              8787004236
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
      <div className="border-t-[1px] border-t-white/20">
        <div className="mx-auto flex max-w-full flex-col md:flex-row items-center justify-between px-[20px] md:px-[100px] py-[14px] text-white/70">
          <span className="md:text-[16px] sm:text-[14px]">
            Copyright © 2024 Ultimutt. All Rights Reserved.
          </span>

          <div className="flex gap-6 pt-2 md:pt-0">
            <a
              href="/privacy-policy"
              className="hover:text-white md:text-[16px] sm:text-[14px]"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-use"
              className="hover:text-white md:text-[16px] sm:text-[14px]"
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
