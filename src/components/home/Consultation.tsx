import React from "react";

import ConsultationImg from "../../assets/img/consultation.svg";
import call from "../../assets/icon/proicons_call_black.svg";
import guid from "../../assets/icon/mdi-light_note-text.svg";
import MPWhite from "../../assets/img/MP-white-logo.svg";
import { useNavigate } from "react-router-dom";

const Consultation: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="w-11/12 md:w-5/6 flex flex-col mx-auto">
      <div className="flex flex-row gap-2 md:gap-10 lg:gap-20">
        <div className=" flex flex-col gap-4 md:gap-6 lg:gap-9 w-full">
          {/* heading */}
          <div className="md:text-center lg:text-left text-white">
            <h1 className="text-2xl md:text-3xl lg:text-5xl md:leading-[41px] lg:leading-[61px] font-belda">
              Get a Personalized Consultation
            </h1>
            <h1 className="text-base md:text-xl lg:text-[32px] font-belda">
              from{" "}
              <span className="text-primary font-belda">
                Mr. Mahinda Panagoda
              </span>
            </h1>
          </div>
          <div className="flex flex-row gap-6">
            <div className="w-full hidden md:flex flex-col gap-8 lg:gap-10">
              {/* desktop/tab - pharagraph */}
              <p className="text-sm md:text-base lg:text-xl text-justify font-light leading-5 md:leading-7 lg:leading-8 text-white">
                With decades of expertise in funeral planning and management,
                Mr. Mahinda Panagoda personally guides families with compassion
                and professionalism. Schedule a private consultation to receive
                tailored advice, plan ahead with confidence, and ensure every
                detail is handled with dignity and care.
              </p>
              <div className="flex flex-row gap-6 lg:gap-10">
                <button
                  onClick={() => (window.location.href = "tel:+94711000700")}
                  className="flex items-center gap-1 md:gap-2.5 px-4 lg:px-6 py-2.5 lg:py-3.5 rounded-lg text-ternary text-xs md:text-base lg:text-lg font-medium bg-primary hover:bg-primary/90 cursor-pointer"
                >
                  <img src={call} className="w-3 md:w-4 lg:w-auto" /> Take
                  Consultation
                </button>
                <button
                  onClick={() => {
                    navigate("/guideline");
                  }}
                  className="flex items-center gap-1 md:gap-2.5 px-2 md:px-6 lg:px-10 py-2.5 lg:py-3.5 border-2 border-white rounded-lg text-white text-xs md:text-base lg:text-lg font-medium hover:bg-white/10 cursor-pointer"
                >
                  <img src={guid} className="w-3 md:w-4 lg:w-auto" /> Guidelines
                </button>
              </div>
            </div>
            {/* tab - right side image */}
            <div className="lg:hidden md:flex hidden relative w-2/5 md:w-5/12 lg:w-1/2">
              <img
                src={ConsultationImg}
                className="w-full h-full object-cover rounded-sm md:rounded-lg"
              />
              <div className="absolute flex items-center bottom-0 z-10 backdrop-blur-xs bg-gradient-to-t from-black/90 to-transparent w-full h-1/5 rounded-b-sm md:rounded-b-lg">
                <img src={MPWhite} />
              </div>
            </div>
          </div>
        </div>

        {/* right side image */}
        <div className="flex md:hidden lg:flex relative w-2/5 md:w-5/12 lg:w-1/2 rounded-sm md:rounded-lg object-cover overflow-hidden">
          <img src={ConsultationImg} className="w-full h-full object-cover" />
          <div className="absolute flex items-center bottom-0 z-10 backdrop-blur-xs bg-gradient-to-t from-black/90 to-transparent w-full h-1/5">
            <img src={MPWhite} />
          </div>
        </div>
      </div>

      <div className="w-full md:hidden flex flex-col gap-6 mt-2">
        {/* mobile - pharagraph */}
        <p className="text-xs text-justify font-light leading-5 text-white">
          With decades of expertise in funeral planning and management, Mr.
          Mahinda Panagoda personally guides families with compassion and
          professionalism. Schedule a private consultation to receive tailored
          advice, plan ahead with confidence, and ensure every detail is handled
          with dignity and care.
        </p>
        <div className="flex flex-row gap-8 ">
          <button
            onClick={() => (window.location.href = "tel:+94711000700")}
            className="flex items-center gap-1 md:gap-2.5 px-4 lg:px-6 py-2.5 lg:py-3.5 rounded-lg text-ternary text-xs md:text-base lg:text-lg font-medium bg-primary hover:bg-primary/90 cursor-pointer"
          >
            <img src={call} className="w-3 lg:w-auto" /> Take Consultation
          </button>
          <button
            onClick={() => {
              navigate("/guideline");
            }}
            className="flex items-center gap-1 md:gap-2.5 px-4 md:px-6 lg:px-10 py-2.5 lg:py-3.5 border-2 border-white rounded-lg text-white text-xs md:text-base lg:text-lg font-medium hover:bg-white/10 cursor-pointer"
          >
            <img src={guid} className="w-3 lg:w-auto" /> Guidelines
          </button>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
