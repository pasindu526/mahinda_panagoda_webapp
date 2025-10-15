import React from "react";

import HeroImg from "../../assets/img/aboutUs/hero.svg";
const HeroSection: React.FC = () => {
  return (
    <div>
      <div className="relative  h-[300px] md:h-[400px] lg:h-[500px]">
        <img
          src={HeroImg}
          alt="Contact Hero"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-[70%] bg-gradient-to-t from-black/90 via-black/40 to-transparent z-0"></div>

        {/* Text content */}
        <div className="absolute bottom-0 w-full z-10">
          <div className="w-11/12 md:w-5/6 mx-auto py-4 space-y-2">
            <h1 className="text-2xl  lg:text-5xl md:text-4xl leading-[34px] lg:leading-[62px] font-bold font-belda text-white text-center lg:text-left">
              Serving Families with Dignity,{" "}
              <span className="text-primary">Since 2000</span>
            </h1>
            <p className="text-base lg:text-xl leading-[20px]  lg:leading-[24px] text-white pb-2 sm:pb-4 text-center lg:text-left">
              Providing trusted, affordable, and professional funeral services for over two decades
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
