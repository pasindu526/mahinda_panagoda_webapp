import React from "react";
import SvcLeft from "../../assets/img/service_left_img.svg";
import SvcRight from "../../assets/img/service_right_img.svg";

const KeyServices: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-6 lg:gap-10">
      {/* heading */}
      <div className="text-center">
        <h1 className="text-xs lg:text-sm font-belda text-ternary/70 mb-1 md:mb-3 lg:mb-4 uppercase tracking-[2px] md:tracking-[3px]">
          What We offer
        </h1>
        <h1 className="text-2xl md:text-3xl lg:text-5xl leading-[41px] lg:leading-[62px] font-belda font-semibold">
          Our Main Services
        </h1>
      </div>

      <div className="flex flex-col-reverse md:flex-col lg:flex-row gap-12 lg:gap-20">
        <div className="w-full lg:w-2/3">
          <div className="relative pb-10 md:pb-20">
            <img
              src={SvcLeft}
              alt=""
              className="w-9/12 lg:w-5/6 h-full max-h-3/5 object-cover object-top top-0 left-0 pb-16 rounded-tl-3xl"
            />
            <img
              src={SvcRight}
              alt=""
              className="absolute w-3/4 md:w-2/3 lg:w-4/5 h-full max-h-3/5 object-cover bottom-0 right-0 rounded-tl-3xl rounded-br-3xl border-l-6 border-t-6 border-white"
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-10">
          <p className="text-base md:text-xl text-justify font-light leading-6 md:leading-7 lg:leading-8">
            We provide funeral packages tailored to different needs with care
            and professionalism, easing the burden on families with reliable and
            dignified options. Our services cover 24-hour support, a modern
            fleet of hearses, spacious funeral premises, and the guidance of
            experienced staff. With both local and international arrangements,
            we ensure every farewell is carried out smoothly and with honor.
          </p>
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between gap-6">
              <h6 className="w-full text-sm md:text-base text-center px-5 py-2.5 bg-[#F1F1F1] rounded-lg">
                Pre-Arrangement Services
              </h6>
              <h6 className="w-full text-sm md:text-base text-center px-5 py-2.5 bg-[#F1F1F1] rounded-lg">
                24-Hour Funeral Services
              </h6>
            </div>

            <div className="flex items-center justify-between gap-6">
              <h6 className="w-full text-sm md:text-base text-center px-5 py-2.5 bg-[#F1F1F1] rounded-lg">
                Transportation & Facility Services
              </h6>
              <h6 className="w-full text-sm md:text-base text-center px-5 py-2.5 bg-[#F1F1F1] rounded-lg">
                Expert Funeral Guidance
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyServices;
