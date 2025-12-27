import React, { useEffect, useState } from "react";
import siteLogo from "@/assets/ultimutt-logo.svg";

const SECTIONS = ["home", "features", "facilities", "testimonials"];

const Header = () => {
  const [activeSection, setActiveSection] = useState<string>("home");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const headerOffset = 90;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  const closeMobileMenu = () => {
    (
      document.getElementById("mobile-menu") as HTMLDialogElement | null
    )?.close();
  };

  // 🔥 Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }
    );

    SECTIONS.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const linkClass = (id: string) =>
    `text-sm transition font-${
      activeSection === id ? "bold" : "normal"
    } text-gray-900`;

  return (
    <header
      className="bg-white sticky top-0 z-150"
      style={{ boxShadow: "0px 1px 3px rgba(0,0,0,0.15)" }}
    >
      <nav className="flex items-center justify-between py-4 px-5 md:px-[100px]">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-3"
        >
          <img src={siteLogo} alt="Ultimutt" className="h-[58px]" />
          <span className="text-left">
            NCR's most trusted <br />
            pet services partner
          </span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-12">
          <button
            onClick={() => scrollToSection("home")}
            className={linkClass("home")}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("features")}
            className={linkClass("features")}
          >
            App Features
          </button>
          <button
            onClick={() => scrollToSection("facilities")}
            className={linkClass("facilities")}
          >
            Our Facilities
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className={linkClass("testimonials")}
          >
            Testimonials
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() =>
            (
              document.getElementById("mobile-menu") as HTMLDialogElement | null
            )?.showModal()
          }
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      <dialog id="mobile-menu" className="lg:hidden backdrop:bg-black/30">
        <div className="fixed right-0 top-0 h-full w-full max-w-sm bg-white p-6">
          <button onClick={closeMobileMenu} className="mb-6">
            ✕
          </button>

          <div className="space-y-4">
            {SECTIONS.map((id) => (
              <button
                key={id}
                onClick={() => {
                  scrollToSection(id);
                  closeMobileMenu();
                }}
                className={`block text-left text-lg font-${
                  activeSection === id ? "bold" : "normal"
                }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </dialog>
    </header>
  );
};

export default Header;
