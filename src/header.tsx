import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import siteLogo from "@/assets/ultimutt-logo.svg";

const SECTIONS = ["home", "features", "facilities", "testimonials"];

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const openMenu = () => {
    setIsMounted(true);
    requestAnimationFrame(() => setIsOpen(true));
  };

  const closeMenu = () => {
    setIsOpen(false);
    setTimeout(() => setIsMounted(false), 300);
  };

  const scrollToSection = (id: string) => {
    // ✅ Already on homepage → scroll
    if (location.pathname === "/") {
      const element = document.getElementById(id);
      if (!element) return;

      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
    // 🔁 Not on homepage → redirect first
    else {
      navigate("/", { state: { scrollTo: id } });
    }
  };

  // 🔥 Intersection Observer (only on homepage)
  useEffect(() => {
    if (location.pathname !== "/") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    SECTIONS.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  // 🔒 Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

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
          {SECTIONS.map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`text-sm transition ${
                activeSection === id ? "font-bold" : "font-normal"
              }`}
            >
              {id === "features"
                ? "App Features"
                : id === "facilities"
                ? "Our Facilities"
                : id === "testimonials"
                ? "Testimonials"
                : "Home"}
            </button>
          ))}
        </div>

        {/* Hamburger */}
        <button className="lg:hidden text-2xl" onClick={openMenu}>
          ☰
        </button>
      </nav>

      {/* Mobile Sidebar */}
      {isMounted && (
        <div className="fixed inset-0 z-200 lg:hidden">
          <div
            className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={closeMenu}
          />

          <div
            className={`absolute right-0 top-0 h-full w-full max-w-sm bg-white p-6
            transform transition-transform duration-300 ease-in-out
            ${isOpen ? "translate-x-0" : "translate-x-full"}`}
          >
            <button onClick={closeMenu} className="mb-6 text-xl">
              ✕
            </button>

            <div className="space-y-4">
              {SECTIONS.map((id) => (
                <button
                  key={id}
                  onClick={() => {
                    scrollToSection(id);
                    closeMenu();
                  }}
                  className={`block text-left text-lg ${
                    activeSection === id ? "font-bold" : "font-normal"
                  }`}
                >
                  {id === "features"
                    ? "App Features"
                    : id === "facilities"
                    ? "Our Facilities"
                    : id === "testimonials"
                    ? "Testimonials"
                    : "Home"}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
