import React from "react";

import MPImage from "../../assets/img/aboutUs/MP.svg";
import MpImg from "../../assets/img/aboutUs/mp.webp";
import nafdLogo from "../../assets/img/aboutUs/UKlogo.png";

const OurStory: React.FC = () => {
  return (
    <section className=" bg-white w-11/12 md:w-5/6 lg:w-5/6 mx-auto">
      <div className="mb-6 text-center">
        <h1 className="text-xs font-belda text-ternary/70 mb-1 lg:mb-2 uppercase tracking-wider">
          Who Are We
        </h1>
        <h1 className="lg:text-5xl md:text-3xl text-2xl leading-[41px] md:leading-[62px]  font-belda font-semibold">
          What Is Our Story
        </h1>
      </div>

      {/* Content */}
      <div className="w-full flex flex-col lg:flex-row lg:items-start lg:justify-between lg:mt-10 text-ternary">
        {/* Para */}
        <div className="lg:w-[640px] text-justify space-y-6 font-light">
          <p className="text-base md:text-xl lg:text-[22px]">
            Founded in 2000, Mahinda Panagoda Funeral Directors has been
            dedicated to providing complete funeral services under one roof.
            From basic to VIP funerals, we offer 24-hour support, modern
            parlours, traditional funeral pyres, and fresh flower arrangements
            ensuring every farewell is handled with dignity and care.
          </p>

          <p className="text-base md:text-xl lg:text-[22px]">
            Led by Mr. Mahinda Panagoda’s U.K. experience as a Funeral Director
            and Embalmer, and supported by Mrs. Radanika Panagoda’s expertise in
            floral design, we have earned a reputation for professional,
            compassionate, and affordable funeral care in Colombo.
          </p>
        </div>

        {/* Right Section */}
        <div className="relative lg:w-1/2 md:h-[210px] h-[240px] lg:h-[260px] mt-8 lg:mt-0">
          {/* Overlay */}
          <div
            className="absolute -top-3.5 lg:left-32 md:left-10 left-9 
      lg:w-[500px] md:w-[716px] w-[358px]  
      md:h-[300px] h-[240px] lg:h-[310px] 
      bg-[#f0efed] rounded-tl-[20px] rounded-br-[20px]
      hidden md:block"
          ></div>

          {/* Image */}
          <img
            src={MpImg}
            alt="Mahinda Panagoda Funeral Directors"
            className="absolute top-3 lg:top-3 left-0 right-auto md:left-0 md:right-auto lg:right-8 lg:left-auto md:top-5 
      w-[393px] h-[250px] md:w-[723px] md:h-[330px] lg:w-[500px] lg:h-[330px] 
      rounded-tl-[20px] rounded-br-[20px] grayscale-75 object-cover  "
          />
        </div>
      </div>

      {/* Founder Section - Desktop Layout */}
      <div className="hidden lg:block lg:mt-8 md:mt-55 relative">
        {/* Gray Background Section */}
        <div className="absolute inset-y-0 pl-6 sm:pl-12 md:pl-20 right-0 md:w-11/12 bg-black/8 rounded-r-full z-0 top-12"></div>

        <div className="flex flex-col md:flex-row md:items-center relative z-10">
          {/* Founder Image */}
          <div className="md:w-1/4 flex justify-center md:justify-start mb-4 md:mb-0">
            <img
              src={MPImage}
              alt="Mr. Mahinda Panagoda"
              className="w-40 md:w-35 lg:w-58"
            />
          </div>

          {/* Founder Info */}
          <div className="md:w-2/3 space-y-2 px-2 ">
            <h3 className="font-semibold md:text-xl text-xl lg:text-2xl mt-6 md:mt-13">
              Mr. Mahinda Panagoda - Founder & Visionary Leader
            </h3>
            <ul className="list-[circle] text-base sm:text-lg md:text-xl font-light mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-10 md:gap-x-20 gap-y-2 marker:text-black marker:text-lg md:marker:text-2xl pl-4">
              <li>Internationally trained Funeral Director & Embalmer</li>
              <li>MBA in Strategic Management & Leadership (UK)</li>
              <li>Diploma in Human Resource Management (SL)</li>
              <li>30+ years of funeral service expertise</li>
            </ul>
          </div>

          {/* Logo */}
          <div className="md:w-1/4 flex flex-col items-center mt-6 md:mt-0">
            <img
              src={nafdLogo}
              alt="NAFD UK Logo"
              className="w-36 md:w-40 lg:w-36 mt-6 md:mt-10 object-contain"
            />
            <p className="text-center text-sm md:text-base font-bold mt-3 leading-snug">
              N A F D – U.K <br />
              Member Since 2000
            </p>
          </div>
        </div>
      </div>

      {/* Founder Section - Tablet Only Layout */}
      <div className="hidden md:flex lg:hidden flex-col items-center mt-38 h-[305px]">
        {/* Top Row: Left Image - Topic - Right Logo */}
        <div className="w-full flex items-center justify-between">
          {/* Left Founder Image */}
          <img
            src={MPImage}
            alt="Mr. Mahinda Panagoda"
            className="w-42 h-60 object-contain -translate-x-4 translate-y-20"
          />

          {/* Topic in Center */}
          <h3 className="text-3xl font-semibold text-center pr-10">
            Mr. Mahinda Panagoda
            <br />
            <span className="font-light text-lg">
              Founder & Visionary Leader
            </span>
          </h3>

          {/* Right Logo + Text */}
          <div className="flex flex-col items-center translate-y-23">
            <img
              src={nafdLogo}
              alt="NAFD UK Logo"
              className="w-34 h-34 object-contain"
            />
            <p className="text-center text-base font-semibold leading-tight mt-2">
              N A F D – U.K <br />
              <span className="text-sm">Member Since 2000</span>
            </p>
          </div>
        </div>

        {/* Points Underneath */}
        <ul className="list-[circle] text-lg font-light mt-0 -translate-y-17 space-y-2 marker:text-black marker:text-xl pl-12">
          <li>Internationally trained Funeral Director & Embalmer</li>
          <li>MBA in Strategic Management & Leadership (UK)</li>
          <li>Diploma in Human Resource Management (SL)</li>
          <li>30+ years of funeral service expertise</li>
        </ul>
      </div>
      {/* Founder Section - Mobile Only Layout */}
      <div className="flex flex-col md:hidden mt-15 items-center w-full px-4 bg-[#f0efed] py-4 rounded-lg">
        {/* Top Row: Image Left + Name/Title Right */}
        <div className="flex w-full justify-between items-start">
          {/* Left - Founder Image */}
          <img
            src={MPImage}
            alt="Mr. Mahinda Panagoda"
            className="w-28 h-28 object-contain"
          />

          {/* Right - Name + Title */}
          <div className="flex flex-col justify-center text-right ml-3 mt-5">
            <h3 className="text-lg font-semibold">Mr. Mahinda Panagoda</h3>
            <span className="font-light text-sm">
              Founder & Visionary Leader
            </span>
          </div>
        </div>

        {/* Bottom Row: Points Left + Logo Right */}
        <div className="flex w-full justify-between items-center mt-6">
          {/* Left - Points List */}
          <ul className="list-[circle] text-xs font-light space-y-1 marker:text-black pl-4 w-3/5">
            <li>Internationally trained Funeral Director & Embalmer</li>
            <li>MBA in Strategic Management & Leadership (UK)</li>
            <li>Diploma in Human Resource Management (SL)</li>
            <li>30+ years of funeral service expertise</li>
          </ul>

          {/* Right - Logo + Text */}
          <div className="flex flex-col items-center justify-center  w-2/5 -mt-4">
            <img
              src={nafdLogo}
              alt="NAFD UK Logo"
              className="w-26 h-26 object-contain"
            />
            <p className="text-center text-[10px] font-bold leading-tight mt-1">
              N A F D – U.K <br />
              Member Since 2000
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
