import React from "react";
import { useNavigate } from "react-router-dom";

import PrePackage from "../../assets/img/prePackage.svg";
import VIPPlatinum from "../../assets/img/package1.svg";
import VIPGold from "../../assets/img/package2.svg";
import Superior from "../../assets/img/package3.svg";
import Standard from "../../assets/img/package4.svg";

const prePackage = [
  {
    id: 1,
    img: PrePackage,
    name: "Pre-Arrangement Funeral Packages",
    description:
      "Includes luxurious hearses, premium caskets, reserved parlour spaces, floral arrangements, and full-day staff support.",
    count: 13,
  },
];

const packages = [
  {
    id: 1,
    img: VIPPlatinum,
    name: "VIP Platinum Funeral Packages",
    count: 4,
  },
  {
    id: 2,
    img: VIPGold,
    name: "VIP Gold Funeral Packages",
    count: 3,
  },
  {
    id: 3,
    img: Superior,
    name: "Superior Funeral Packages",
    count: 3,
  },
  {
    id: 4,
    img: Standard,
    name: "Standard Funeral Packages",
    count: 3,
  },
];

const Packages: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col gap-6 lg:gap-10">
      {/* heading */}
      <div className="text-center">
        <h1 className="text-xs lg:text-sm font-belda text-ternary/70 mb-1 md:mb-3 lg:mb-4 uppercase tracking-[2px] md:tracking-[3px]">
          what we have
        </h1>
        <h1 className="text-2xl md:text-3xl lg:text-5xl leading-[41px] lg:leading-[62px] font-belda font-semibold">
          Funeral Packages
        </h1>
      </div>

      {/* package card grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 justify-between">
        {/* pre arrangement package card */}
        {prePackage.map((Package) => (
          <div className="bg-[#F8F8F8] p-2.5 rounded-lg row-span-2 h-auto shadow-[0_2px_6px_0_rgba(0,0,0,0.15)]">
            {/* package image */}
            <div className="relative mb-4 rounded-lg h-48 md:h-[53%] lg:h-88 object-cover overflow-hidden">
              <img
                src={Package.img}
                alt={Package.name}
                className="w-full h-full object-cover"
              />

              {/* count card */}
              <div className="absolute z-10 flex flex-col items-center justify-center text-xs md:text-sm font-normal text-ternary/90 top-0 right-0 bg-[#F8F8F8] w-20 md:w-24 p-2 md:p-2.5 rounded-bl-lg">
                <span className="text-secondary text-3xl md:text-4xl font-medium">
                  {Package.count}+
                </span>
                Packages
              </div>
            </div>
            {/* package details */}
            <div className="flex flex-col px-1.5 gap-1 md:gap-5 mb-6 md:mb-10">
              <h1 className="text-xl md:text-[22px] lg:text-2xl font-medium">
                {Package.name}
              </h1>
              <p className="mt-2 text-ternary text-base md:text-lg font-light text-justify">
                {Package.description}
              </p>
            </div>

            {/* view button */}
            <div className="flex items-end justify-end md:justify-start mb-1 md:mb-0">
              <button
                onClick={() => {
                  navigate("/pre-arrangement-packages");
                }}
                className="bg-primary hover:bg-primary/90 cursor-pointer text-ternary text-xs md:text-sm font-medium px-4 lg:px-5 py-3 md:py-2.5 lg:py-2.5 rounded-lg lg:h-11 whitespace-nowrap"
              >
                View Packages
              </button>
            </div>
          </div>
        ))}

        {/* other package categories card */}
        {packages.map((Package) => (
          <div className="bg-[#F8F8F8] p-2.5 rounded-lg h-full shadow-[0_2px_6px_0_rgba(0,0,0,0.15)]">
            {/* package image */}
            <div className="relative mb-4 h-48 lg:h-52">
              <img
                src={Package.img}
                alt={Package.name}
                className="w-full h-full object-top object-cover rounded-lg"
              />

              {/* count card */}
              <div className="absolute z-10 flex flex-col items-center justify-center text-xs font-normal text-ternary/90 top-0 right-0 bg-[#F8F8F8] w-20 p-2 rounded-bl-lg">
                <span className="text-secondary text-3xl md:text-4xl font-medium">
                  {Package.count}+
                </span>
                Packages
              </div>
            </div>
            <div className="flex gap-6 md:gap-4 px-1.5 pb-1 items-start justify-between">
              {/* package name */}
              <h1 className="text-lg lg:text-xl font-medium">{Package.name}</h1>
              {/* view button */}
              <div className="flex items-end mt-auto">
                <button
                  onClick={() => {
                    navigate("/packages");
                  }}
                  className="bg-primary hover:bg-primary/90 cursor-pointer text-ternary text-xs md:text-sm font-medium  px-4 lg:px-5 py-3 md:py-2.5 lg:py-2.5 rounded-lg lg:h-11 whitespace-nowrap"
                >
                  View Packages
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
