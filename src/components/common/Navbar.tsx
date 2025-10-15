import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { X } from "lucide-react";
import { RiMenu3Fill } from "react-icons/ri";
import logo from "../../assets/img/navbar/logo.svg";
import sublogo from "../../assets/img/navbar/sublogo.svg";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/aboutUs" },
  { name: "Packages", path: "/packages" },
  { name: "Parlours", path: "/parlours" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact Us", path: "/contactUs" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  // ✅ Scroll handler (only triggers sticky effect on desktop)
  useEffect(() => {
    const handleScroll = () => {
      const isDesktop = window.innerWidth >= 1024;

      if (isDesktop) {
        if (window.scrollY > lastScrollY) {
          setIsVisible(false); // hide on scroll down
        } else {
          setIsVisible(true); // show on scroll up
        }
        setLastScrollY(window.scrollY);
        setIsScrolled(window.scrollY > 50);
      } else {
        // reset for mobile/tablet
        setIsScrolled(false);
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
<nav
  className={`w-full text-white z-20 transition-all duration-300
    ${isScrolled ? "lg:fixed lg:bg-black py-3" : "absolute py-12 pt-3"}
  `}
  style={{
    transform: isVisible ? "translateY(0)" : "translateY(-100%)",
    transition: "transform 0.3s ease-in-out",
  }}
>
  {/* Gradient Overlay */}
  {!isScrolled && (
    <div className="absolute inset-0 bg-gradient-to-b from-black from-10% via-black via-10% to-transparent -z-10"></div>
  )}
      {/* Navbar content */}
      <div className="w-5/6 mx-auto flex items-center justify-between px-2 md:px-14 lg:px-10">
        {/* Logo */}
        <div className="flex items-center pt-2 lg:pt-0 -translate-x-10">
          <NavLink to="/">
            <img
              src={logo}
              alt="Mahinda Panagoda Logo"
              className="hidden lg:block h-auto w-auto"
            />
            <img
              src={sublogo}
              alt="Mahinda Panagoda Mobile Logo"
              className="block lg:hidden w-64 h-auto md:w-auto md:h-auto md:-translate-x-10"
            />
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-10 font-light text-lg">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative inline-block pb-1 ${
                  isActive
                    ? "after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[50%] after:h-[2px] after:bg-white"
                    : "hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-[50%] hover:after:h-[2px] hover:after:bg-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex space-x-8 translate-x-12">
          <button
            onClick={() => (window.location.href = "tel:+94711000700")}
            className="px-4 py-2.5 bg-primary hover:bg-primary/70 text-black font-semibold rounded-lg text-lg"
          >
            +94 71 1000 700
          </button>
          <button className="px-7 py-2.5 border-2 border-white rounded-lg text-lg">
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center translate-x-6 md:translate-x-16">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl"
          >
            <RiMenu3Fill />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-[600px] bg-black/90 flex flex-col z-50">
          <div className="flex justify-end pt-6 w-11/12 mx-auto">
            <button onClick={() => setIsOpen(false)}>
              <X size={28} className="text-white" />
            </button>
          </div>

          <div className="flex flex-col items-start mt-4 w-11/12 mx-auto">
            {navLinks.map((link) => (
              <div key={link.name} className="w-full">
                <NavLink
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `relative block w-fit text-white text-xl py-4 ${
                      isActive
                        ? "after:content-[''] after:block after:w-[50%] after:h-[2px] after:bg-white after:mt-1"
                        : "hover:after:content-[''] hover:after:block hover:w-[50%] hover:h-[2px] hover:bg-white hover:mt-1"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </div>
            ))}
          </div>

          <div className="flex flex-row mt-6 w-11/12 mx-auto justify-between items-center">
            <button
              onClick={() => (window.location.href = "tel:+94711000700")}
              className="px-6 py-3 bg-primary hover:bg-primary/70 text-black font-bold rounded-lg text-lg"
            >
              +94 71 1000 700
            </button>
            <button className="px-14 py-3 border-2 border-white rounded-lg text-lg">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
