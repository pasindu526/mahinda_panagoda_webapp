import React from "react";
import HeroImg from "../../assets/img/gallery/Frame 1.svg";

const HeroSection: React.FC = () => {
  return (
    <div>
      <div className="relative  h-[300px] md:h-[400px] lg:h-[500px]">
        <div className="absolute top-0 left-0 w-full"></div>
        <img
          src={HeroImg}
          alt="Contact Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/60 to-transparent">
          <div className="w-11/12 md:w-5/6 mx-auto py-4 space-y-2">
            <h1 className="text-2xl  lg:text-5xl md:text-4xl leading-[34px] lg:leading-[62px] font-bold font-belda text-white text-center lg:text-left">
              Moments In{" "}
              <span className=" text-primary">Images & Motion</span>
            </h1>

            <p className="text-sm lg:text-xl leading-[20px]  lg:leading-[24px] text-white pb-2 sm:pb-4 text-center lg:text-left">
              Explore our collection of stunning photographs and engaging videos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
