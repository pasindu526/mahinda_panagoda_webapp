import React from "react";
import HeroBg from "../../assets/img/homeHero.svg";
import UKLogo from "../../assets/img/UKlogo.svg";
import call from "../../assets/icon/proicons_call.svg";
import buy from "../../assets/icon/bitcoin-icons_cart-outline.svg";
import UKLogoMobi from "../../assets/img/aboutUs/UKlogo.png";
import { useNavigate } from "react-router-dom";

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="relative w-full h-[680px] md:h-[600px] lg:min-h-screen flex md:items-center justify-center overflow-hidden">
        <img
          src={HeroBg}
          alt="Funeral Services Hero Background"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />

        {/* left sec*/}
        <div className="relative z-10 w-11/12 md:w-5/6 h-auto flex items-center pt-14 lg:pt-12">
          <div className="flex flex-col md:max-w-sm lg:max-w-xl text-center md:text-left">
            <h1 className="text-4xl md:text-[46px] lg:text-[69px] font-bold font-belda text-white leading-12 md:leading-14 lg:leading-20 mb-4 md:mb-0">
              Choose Our <br />
              <span className="text-primary font-belda">Funeral Services</span>
            </h1>
            <p className="mt-2 md:mt-4 lg::mt-6 text-base lg:text-xl md:leading-7 text-white font-medium text-center md:text-justify mr-1 lg:mr-2">
              We offer carefully curated funeral packages for you, providing
              complete 24-hour services with local and international
              arrangements handled with care and compassion.
            </p>
            <div className="flex flex-row gap-6 lg:gap-8 mt-10 lg:mt-14 mx-auto md:mx-0">
              <button
                onClick={() => (window.location.href = "tel:+94711000700")}
                className="flex items-center gap-2 px-6 lg:px-12 py-2.5 lg:py-3.5 border-2 border-white rounded-lg text-white text-sm md:text-base lg:text-xl font-medium hover:bg-white/10 cursor-pointer"
              >
                <img src={call} className="w-4 lg:w-auto" /> Call Now
              </button>
              <button
                onClick={() => {
                  navigate("/packages");
                }}
                className="flex items-center gap-2 px-4 lg:px-8 py-2.5 lg:py-3.5 rounded-lg text-ternary text-sm md:text-base lg:text-xl font-medium bg-primary hover:bg-primary/90 cursor-pointer"
              >
                <img src={buy} className="w-6 lg:w-auto" /> Buy Package
              </button>
            </div>
            {/* uk logo */}
            <img
              src={UKLogoMobi}
              alt="National Association of Funeral Directors UK"
              className="flex md:hidden items-center justify-center mx-auto w-32 h-auto mt-14"
            />
          </div>
        </div>

        {/* countable data cards (desktop/tab) */}
        <div className="hidden md:flex flex-col gap-6 lg:gap-10 items-end absolute z-10 h-auto right-0 md:mb-10">
          <div className="flex items-center space-x-4 justify-end px-2 py-4 lg:py-5 bg-gradient-to-l from-0% from-white/95 via-35% via-white to-100% to-transparent text-secondary font-medium">
            <span className="text-4xl lg:text-[40px] leading-0 w-32 lg:w-40 text-right">
              25+
            </span>
            <span className="w-20 lg:w-24 text-base lg:text-lg leading-5 lg:leading-[22px]">
              Years Experience
            </span>
          </div>

          <div className="flex items-center space-x-4 justify-end px-2 py-4 lg:py-5 bg-gradient-to-l from-0% from-white/95 via-35% via-white to-100% to-transparent text-secondary font-medium">
            <span className="text-4xl lg:text-[40px] leading-0 w-32 lg:w-40 text-right">
              13+
            </span>
            <span className="w-20 lg:w-24 text-base lg:text-lg leading-5 lg:leading-[22px]">
              Funeral Packages
            </span>
          </div>

          <div className="flex items-center space-x-4 justify-end px-2 py-4 lg:py-5 bg-gradient-to-l from-0% from-white/95 via-35% via-white to-100% to-transparent text-secondary font-medium">
            <span className="text-4xl lg:text-[40px] leading-0 w-32 lg:w-40 text-right">
              100+
            </span>
            <span className="w-20 lg:w-24 text-base lg:text-lg leading-5 lg:leading-[22px]">
              Funerals Per Month
            </span>
          </div>
        </div>

        {/* uk logo */}
        <img
          src={UKLogo}
          alt="National Association of Funeral Directors UK"
          className="absolute hidden md:block right-8 bottom-8 w-28 lg:w-32 h-auto z-10"
        />
      </div>

      {/* mobile - countable data cards */}
      <div className="block md:hidden bg-gray-100 w-full pt-8 pb-4">
        <div className="flex gap-4 items-center h-auto bottom-0 w-11/12 mx-auto justify-between">
          <div className="flex flex-col items-center space-y-5 justify-end px-2 font-medium">
            <span className="text-3xl leading-1 text-center text-secondary ">
              25+
            </span>
            <span className="text-sm text-center leading-4.5">
              Years Experience
            </span>
          </div>

          <div className="flex flex-col items-center space-y-5 justify-end px-6 font-medium border-x-2 border-gray-300">
            <span className="text-3xl leading-1 text-center text-secondary ">
              100+
            </span>
            <span className="text-sm text-center leading-4.5">
              Funerals Per Month
            </span>
          </div>

          <div className="flex flex-col items-center space-y-5 justify-end font-medium">
            <span className="text-3xl leading-1 text-center text-secondary ">
              13+
            </span>
            <span className="text-sm text-center leading-4.5">
              Funeral Packages
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
