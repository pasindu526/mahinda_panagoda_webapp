import React from "react";

import logo from "../../assets/img/footer/sublogo.svg";
import bg from "../../assets/img/footer/bg.svg";
import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";

import instasvg from "../../assets/img/footer/insta.svg";
import whatsAppsvg from "../../assets/img/footer/wtsp.svg";
import fbsvg from "../../assets/img/footer/fb.svg";
import AIOHlogo from "../../assets/img/footer/AIOH_logo.png";
const Footer: React.FC = () => {
  const packagesLinks = [
    { name: "VIP Platinum Package", href: "#" },
    { name: "VIP Gold Package", href: "#" },
    { name: "Superior Package", href: "#" },
    { name: "Standard Packages", href: "#" },
    { name: " Pre-Arrangements", href: "#" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Packages", href: "packages" },
    { name: "Parlours", href: "parlours" },
    { name: "Gallery", href: "gallery" },
    { name: "Contact Us", href: "contactUs" },
  ];

  const contactInfo = [
    {
      icon: <FiPhone className="w-4 h-4  text-white/75" />,
      text: "+94 71 1000 700",
      href: "tel:+94711000700",
    },
    {
      icon: (
        <FiMapPin className="lg:w-6 lg:h-6 md:w-6  w-4 h-4 text-white/75" />
      ),
      text: "400 D, New Kandy Road, Talangama, Sri Lanka",
      href: "https://maps.google.com/?q=400+D,+New+Kandy+Road,+Talangama,+Sri+Lanka",
    },
    {
      icon: <FiMail className="w-4 h-4 text-white/75" />,
      text: "mpanagoda2002@yahoo.com",
      href: "mailto:mpanagoda2002@yahoo.com",
    },
  ];

  const socialIcons = [
    { src: instasvg, alt: "Instagram", link: "https://instagram.com" },
    {
      src: fbsvg,
      alt: "Facebook",
      link: "https://www.facebook.com/people/Mahinda-Panagoda-Funeral-Directors/100065482210619/#",
    },
    {
      src: whatsAppsvg,
      alt: "WhatsApp",
      link: "https://api.whatsapp.com/send/?phone=%2B94711000700&text&type=phone_number&app_absent=0",
    },
  ];
  return (
    <>
      <div className="flex flex-col items-center text-center  bg-transparent">
        <p className="w-2/3 text-xl  md:text-3xl   font-semibold font-belda text-secondary">
          We Are Always Here When You Need Us
        </p>
        <p className="hidden md:block w-5/6 md:text-xl text-base text- font-light px-4 mt-4">
          We provide 24/7 assistance, ensuring you can reach us any time of the
          day or night. Our dedicated staff is always available to guide you,
          answer your questions, or offer compassionate support.
        </p>
        <p className="block md:hidden w-5/6 md:text-xl text-base text- font-light px-4 mt-4">
          We provide 24/7 assistance, ensuring you can reach us any time of the
          day or night.
        </p>
        <button
          onClick={() => (window.location.href = "tel:+94711000700")}
          className="px-12 py-3 text-lg bg-primary hover:bg-primary/70 text-ternary rounded-lg mt-8 mb-8 cursor-pointer "
        >
          Call Now
        </button>
      </div>
      <footer className="bg-gradient-to-b from-black to-ternary text-white">
        {/* Top Image */}

        <div className="w-full h-auto">
          <img src={bg} alt="Footer" className="w-full" />
        </div>

        {/* Main Footer Content */}
        <div className="container md:py-12 md:w-5/6 mx-auto w-11/12">
          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-8 justify-items-center">
            {/* Logo & Description */}
            <div className="text-left lg:w-[330px] -translate-y-5 translate-x-5">
              <img
                src={logo}
                alt="Logo"
                className="mx-auto object-contain w-full "
              />
              <p className="text-lg text-white font-light leading-[26px] lg:text-justify text-justify px-4 lg:px-0 ">
                Mahinda Panagoda Funeral Directors was inaugurated in 2000 with
                all Funeral services to cater the clients under one roof from
                basic Funeral to VIP Funerals and Funeral Parlour with 24 hour
                service.
              </p>
            </div>

            {/* Packages */}
            <div className="text-left lg:translate-x-18">
              <h3 className="text-lg font-semibold mb-3">Packages</h3>
              <ul className="space-y-1 text-lg text-white/75">
                {packagesLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="hover:text-white">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="text-left lg:mr-0 md:mr-18 translate-x-4">
              <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-1 text-lg text-white/75">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="hover:text-white">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-2 items-start">
              <h3 className="text-lg font-semibold mb-1">Contact Us</h3>
              {contactInfo.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  {item.icon}
                  <span
                    className={`text-white/75 text-lg ${
                      item.href.startsWith("mailto:")
                        ? "underline underline-offset-1 decoration-white/75"
                        : ""
                    }`}
                  >
                    {item.text}
                  </span>
                </a>
              ))}

              {/* Social icons */}
              <div className="flex space-x-4 mt-4 justify-start mb-2">
                {socialIcons.map((icon, idx) => (
                  <a
                    key={idx}
                    href={icon.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={icon.src}
                      alt={icon.alt}
                      className="w-6 h-6 hover:opacity-80 transition"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="block md:hidden space-y-8 min-h-[200px">
            {/* Logo & Description */}
            <div className="text-left mt-4">
              <img
                src={logo}
                alt="Logo"
                className="object-contain w-[300px] mb-2"
              />
              <p className="text-base text-white font-light leading-6 text-justify">
                Mahinda Panagoda Funeral Directors was inaugurated in 2000 with
                all Funeral services to cater the clients under one roof from
                basic Funeral to VIP Funerals and Funeral Parlour with 24 hour
                service.
              </p>
            </div>

            {/* Packages + Quick Links in one row */}
            <div className="grid grid-cols-2 gap-20">
              <div className="text-left">
                <h3 className="text-lg font-semibold mb-2">Packages</h3>
                <ul className="space-y-1 text-base text-white/75">
                  {packagesLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className="hover:text-white">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                <ul className="space-y-1 text-base text-white/75">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className="hover:text-white">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact */}
            <div className="text-left">
              <h3 className="text-lg font-semibold mb-3">Contact Us</h3>

              <div className="flex flex-col gap-1">
                {contactInfo.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2"
                  >
                    {item.icon}
                    <span
                      className={`text-white/75 text-base ${
                        item.href.startsWith("mailto:")
                          ? "underline underline-offset-1 decoration-white/75"
                          : ""
                      }`}
                    >
                      {item.text}
                    </span>
                  </a>
                ))}
              </div>

             
            </div>
             {/* Social Icons + Privacy Policy Row */}
              <div className="flex justify-between items-center mt-20">
                {/* Social Icons - Left */}
                <div className="flex space-x-3 mb-2">
                  {socialIcons.map((icon, idx) => (
                    <a
                      key={idx}
                      href={icon.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={icon.src}
                        alt={icon.alt}
                        className="w-6 h-6 hover:opacity-80 transition"
                      />
                    </a>
                  ))}
                </div>

                {/* Privacy Policy - Right */}
                <div className="text-right">
                  <a href="#" className="hover:underline text-xs text-white/75">
                    Privacy Policy | Terms of Services
                  </a>
                </div>
              </div>
          </div>
        </div>
        {/* Tablet Layout */}
        <div className="hidden md:flex lg:hidden w-5/6 mx-auto flex-col space-y-10 -translate-y-12">
          {/* Row 1: Logo + Description + Social Icons */}
          <div className="flex flex-col sm:flex-row justify-between items-start gap-10">
            {/* Left: Logo + Description */}
            <div className="w-3/4 text-left">
              <img src={logo} alt="Logo" className="w-96 mb-4" />
              <p className="text-base text-white/75 leading-6 text-justify">
                Mahinda Panagoda Funeral Directors was inaugurated in 2000 with
                all Funeral services to cater the clients under one roof from
                basic Funeral to VIP Funerals and Funeral Parlour with 24 hour
                service.
              </p>
            </div>

            {/* Right: Social Icons  */}
            <div className="w-1/4 flex justify-end items-end space-x-6 mt-25 ">
              {socialIcons.map((icon, idx) => (
                <a key={idx} href={icon.link} target="_blank" rel="noreferrer">
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    className="w-7 h-7 hover:opacity-80 transition"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Row 2: Quick Links | Packages | Contact Us */}
          <div className="flex flex-col sm:flex-row gap-10 mt-1">
            {/* Quick Links */}
            <div className="w-1/3 text-left">
              <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-1 text-base text-white/75">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="hover:text-white">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Packages */}
            <div className="w-1/3 text-left">
              <h3 className="text-lg font-semibold mb-3">Packages</h3>
              <ul className="space-y-1 text-base text-white/75">
                {packagesLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="hover:text-white">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="w-1/3 text-left">
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <div className="flex flex-col gap-1">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2"
                  >
                    {item.icon}
                    <span
                      className={`text-white/75 text-base ${
                        item.href.startsWith("mailto:")
                          ? "underline underline-offset-1 decoration-white/75"
                          : ""
                      }`}
                    >
                      {item.text}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative bg-gradient-to-b from-transparent to-secondary  ">
          {/* Top line */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 md:w-5/6 w-11/12 mx-auto h-px bg-white"></div>

          {/* Main content */}
          <div className="w-5/6 mx-auto container flex flex-col sm:flex-col md:flex-row items-center justify-between py-4 text-xs text-white/80 space-y-2 md:space-y-0">
            {/* Left content */}
            <div className="flex items-center space-x-2 ml-6 lg:ml-0 md:ml-0 md:space-x-4 lg:pt-0 pt-3 text-xs -translate-x-0.5 mt-4">
              <span>All rights reserved | Developed by</span>
              <img
                src={AIOHlogo}
                alt="Logo"
                className="w-14 h-auto inline-block align-middle lg:-translate-x-3 -translate-x-1 -lg:translate-y-1 -translate-y-[11%]"
              />
            </div>

            {/* Right content */}
            <div className="hidden md:flex items-center lg:space-x-8 space-x-2 text-xs translate-x-0.5 mt-4">
              <a href="#" className="hover:underline">
                Privacy Policy | Terms of Services
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
