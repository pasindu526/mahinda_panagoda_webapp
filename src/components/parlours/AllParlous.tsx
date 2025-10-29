import React, { useState } from "react";

import location from "../../assets/icon/location.svg";
import clock from "../../assets/icon/gala_clock.svg";
import next from "../../assets/icon/next_bgblack.svg";
import prev from "../../assets/icon/prev_bgblack.svg";

import tulip1 from "../../assets/img/uploads/parlours/prl1.svg";
import tulip2 from "../../assets/img/uploads/parlours/prl2.svg";
import araliya1 from "../../assets/img/uploads/parlours/prl1.svg";
import araliya2 from "../../assets/img/uploads/parlours/prl2.svg";
import orchid1 from "../../assets/img/uploads/parlours/prl1.svg";
import orchid2 from "../../assets/img/uploads/parlours/prl2.svg";
import whiteRose1 from "../../assets/img/uploads/parlours/prl1.svg";
import whiteRose2 from "../../assets/img/uploads/parlours/prl2.svg";
import crystal1 from "../../assets/img/uploads/parlours/prl1.svg";
import crystal2 from "../../assets/img/uploads/parlours/prl2.svg";
import fHome1_1 from "../../assets/img/uploads/parlours/prl1.svg";
import fHome1_2 from "../../assets/img/uploads/parlours/prl2.svg";
import fHome2_1 from "../../assets/img/uploads/parlours/prl1.svg";
import fHome2_2 from "../../assets/img/uploads/parlours/prl2.svg";
import fHome3_1 from "../../assets/img/uploads/parlours/prl1.svg";
import fHome3_2 from "../../assets/img/uploads/parlours/prl2.svg";

type Parlour = {
  id: number;
  category: string;
  name: string;
  location: string;
  openingHours: string;
  images: string[];
  services: string[];
};

const parlours: Parlour[] = [
  {
    id: 1,
    category: "VIP Funeral Homes",
    name: "Tulip Funeral Home",
    location: "400 D, New Kandy Road, Talangama, Sri Lanka",
    openingHours: "8:00 AM - 10:00 PM",
    images: [tulip1, tulip2],
    services: [
      "Each air-conditioned parlour can accommodate around 100 guests.",
      "One family room, lobby area, and dining area with seating capacity of 30 pax, and washroom facilities available too.",
      "Dedicated steward (light) in every parlour for serving food and maintaining cleanliness.",
      "Nescafé machines for hot beverages and refrigerator, kettle, crockery & cutlery available, and 24-hour service.",
      "Catering service provides all requested meals with short notice, including ‘Mala Batha’ and other snacks.",
      "Payments to crematoriums & burials, Pansakula requisites and Buddhist monks if required.",
      "All-inclusive services in one place with peace of mind as your own home.",
      "Backup with generators available 24 hours.",
    ],
  },
  {
    id: 2,
    category: "VIP Funeral Homes",
    name: "Araliya Funeral Home",
    location: "400 D, New Kandy Road, Talangama, Sri Lanka",
    openingHours: "8:00 AM - 10:00 PM",
    images: [araliya1, araliya2],
    services: [
      "Each air-conditioned parlour can accommodate around 100 guests.",
      "One family room, lobby area, and dining area with seating capacity of 30 pax, and washroom facilities available too.",
      "Dedicated steward (light) in every parlour for serving food and maintaining cleanliness.",
      "Nescafé machines for hot beverages and refrigerator, kettle, crockery & cutlery available, and 24-hour service.",
      "Catering service provides all requested meals with short notice, including ‘Mala Batha’ and other snacks.",
      "Payments to crematoriums & burials, Pansakula requisites and Buddhist monks if required.",
      "All-inclusive services in one place with peace of mind as your own home.",
      "Backup with generators available 24 hours.",
    ],
  },
  {
    id: 3,
    category: "VIP Funeral Homes",
    name: "Orchid Funeral Home",
    location: "400 D, New Kandy Road, Talangama, Sri Lanka",
    openingHours: "8:00 AM - 10:00 PM",
    images: [orchid1, orchid2],
    services: [
      "Each air-conditioned parlour can accommodate around 100 guests.",
      "One family room, lobby area, and dining area with seating capacity of 30 pax, and washroom facilities available too.",
      "Dedicated steward (light) in every parlour for serving food and maintaining cleanliness.",
      "Nescafé machines for hot beverages and refrigerator, kettle, crockery & cutlery available, and 24-hour service.",
      "Catering service provides all requested meals with short notice, including ‘Mala Batha’ and other snacks.",
      "Payments to crematoriums & burials, Pansakula requisites and Buddhist monks if required.",
      "All-inclusive services in one place with peace of mind as your own home.",
      "Backup with generators available 24 hours.",
    ],
  },
  {
    id: 4,
    category: "VIP Funeral Homes",
    name: "White Rose Funeral Home",
    location: "400 D, New Kandy Road, Talangama, Sri Lanka",
    openingHours: "8:00 AM - 10:00 PM",
    images: [whiteRose1, whiteRose2],
    services: [
      "Each air-conditioned parlour can accommodate around 100 guests.",
      "One family room, lobby area, and dining area with seating capacity of 30 pax, and washroom facilities available too.",
      "Dedicated steward (light) in every parlour for serving food and maintaining cleanliness.",
      "Nescafé machines for hot beverages and refrigerator, kettle, crockery & cutlery available, and 24-hour service.",
      "Catering service provides all requested meals with short notice, including ‘Mala Batha’ and other snacks.",
      "Payments to crematoriums & burials, Pansakula requisites and Buddhist monks if required.",
      "All-inclusive services in one place with peace of mind as your own home.",
      "Backup with generators available 24 hours.",
    ],
  },
  {
    id: 5,
    category: "VIP Funeral Homes",
    name: "Crystal Funeral Home",
    location: "400 D, New Kandy Road, Talangama, Sri Lanka",
    openingHours: "8:00 AM - 10:00 PM",
    images: [crystal1, crystal2],
    services: [
      "Each air-conditioned parlour can accommodate around 100 guests.",
      "One family room, lobby area, and dining area with seating capacity of 30 pax, and washroom facilities available too.",
      "Dedicated steward (light) in every parlour for serving food and maintaining cleanliness.",
      "Nescafé machines for hot beverages and refrigerator, kettle, crockery & cutlery available, and 24-hour service.",
      "Catering service provides all requested meals with short notice, including ‘Mala Batha’ and other snacks.",
      "Payments to crematoriums & burials, Pansakula requisites and Buddhist monks if required.",
      "All-inclusive services in one place with peace of mind as your own home.",
      "Backup with generators available 24 hours.",
    ],
  },
  {
    id: 6,
    category: "Standard Funeral Homes",
    name: "Funeral Home - 1",
    location: "400 D, New Kandy Road, Talangama, Sri Lanka",
    openingHours: "8:00 AM - 10:00 PM",
    images: [fHome1_1, fHome1_2],
    services: [
      "Each air-conditioned parlour can accommodate around 100 guests.",
      "One family room, lobby area, and dining area with seating capacity of 30 pax, and washroom facilities available too.",
      "Dedicated steward (light) in every parlour for serving food and maintaining cleanliness.",
      "Nescafé machines for hot beverages and refrigerator, kettle, crockery & cutlery available, and 24-hour service.",
      "Catering service provides all requested meals with short notice, including ‘Mala Batha’ and other snacks.",
      "Payments to crematoriums & burials, Pansakula requisites and Buddhist monks if required.",
      "All-inclusive services in one place with peace of mind as your own home.",
      "Backup with generators available 24 hours.",
    ],
  },
  {
    id: 7,
    category: "Standard Funeral Homes",
    name: "Funeral Home - 2",
    location: "400 D, New Kandy Road, Talangama, Sri Lanka",
    openingHours: "8:00 AM - 10:00 PM",
    images: [fHome2_1, fHome2_2],
    services: [
      "Each air-conditioned parlour can accommodate around 100 guests.",
      "One family room, lobby area, and dining area with seating capacity of 30 pax, and washroom facilities available too.",
      "Dedicated steward (light) in every parlour for serving food and maintaining cleanliness.",
      "Nescafé machines for hot beverages and refrigerator, kettle, crockery & cutlery available, and 24-hour service.",
      "Catering service provides all requested meals with short notice, including ‘Mala Batha’ and other snacks.",
      "Payments to crematoriums & burials, Pansakula requisites and Buddhist monks if required.",
      "All-inclusive services in one place with peace of mind as your own home.",
      "Backup with generators available 24 hours.",
    ],
  },
  {
    id: 8,
    category: "Standard Funeral Homes",
    name: "Funeral Home - 3",
    location: "400 D, New Kandy Road, Talangama, Sri Lanka",
    openingHours: "8:00 AM - 10:00 PM",
    images: [fHome3_1, fHome3_2],
    services: [
      "Each air-conditioned parlour can accommodate around 100 guests.",
      "One family room, lobby area, and dining area with seating capacity of 30 pax, and washroom facilities available too.",
      "Dedicated steward (light) in every parlour for serving food and maintaining cleanliness.",
      "Nescafé machines for hot beverages and refrigerator, kettle, crockery & cutlery available, and 24-hour service.",
      "Catering service provides all requested meals with short notice, including ‘Mala Batha’ and other snacks.",
      "Payments to crematoriums & burials, Pansakula requisites and Buddhist monks if required.",
      "All-inclusive services in one place with peace of mind as your own home.",
      "Backup with generators available 24 hours.",
    ],
  },
];

const AllParlous: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleReadMore = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const [currentImageIndex, setCurrentImageIndex] = useState<
    Record<number, number>
  >({});

  const handleNext = (id: number, totalImages: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [id]: ((prev[id] ?? 0) + 1) % totalImages,
    }));
  };

  const handlePrev = (id: number, totalImages: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [id]: (prev[id] ?? 0) === 0 ? totalImages - 1 : (prev[id] ?? 0) - 1,
    }));
  };

  return (
    <div>
      {/* VIP parlours */}
      <div className="mb-20 lg:mb-30">
        <div className="text-center lg:text-left">
          {/* heading helping text */}
          <h1 className="text-xs lg:text-sm font-belda text-ternary/70 mb-1 md:mb-3 lg:mb-4 uppercase tracking-[2px] md:tracking-[3px]">
            Exclusive & Refined
          </h1>
          {/* main heading */}
          <h1 className="text-2xl md:text-3xl lg:text-5xl leading-[41px] lg:leading-[62px] font-belda font-semibold">
            VIP Funeral Homes
          </h1>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* parlour card */}
          {parlours.map((parlour, index) =>
            parlour.category === "VIP Funeral Homes" ? (
              <div
                className="bg-[#F4F4F4] p-2 lg:p-2 rounded-xl h-fit shadow-[0_2px_6px_0_rgba(0,0,0,0.15)] flex flex-col lg:flex-row gap-3"
                key={index}
              >
                {/* left section - image slide */}
                <div className="relative w-full lg:w-2/5 rounded-lg h-[24dvh] md:h-[18dvh] lg:h-[34dvh] overflow-hidden">
                  <img
                    src={parlour.images[currentImageIndex[parlour.id] ?? 0]}
                    className="w-full h-full object-cover rounded-lg transition-all duration-500"
                  />

                  {/* next/prev buttons */}
                  <div className="absolute z-10 bottom-0 right-0 flex p-2 h-auto gap-1">
                    <img
                      src={prev}
                      onClick={() =>
                        handlePrev(parlour.id, parlour.images.length)
                      }
                      className="w-8 h-8 cursor-pointer"
                    />
                    <img
                      src={next}
                      onClick={() =>
                        handleNext(parlour.id, parlour.images.length)
                      }
                      className="w-8 h-8 cursor-pointer"
                    />
                  </div>
                </div>

                {/* right section */}
                <div className="w-full lg:w-3/5 py-0 px-2 md:p-2 lg:py-0 flex flex-col justify-between">
                  <h2 className="text-lg lg:text-xl font-semibold mb-1">
                    {parlour.name}
                  </h2>
                  <div className="mt-2 text-xs lg:text-sm space-y-2">
                    <p className="inline-flex gap-1.5 md:gap-2 items-center justify-center">
                      <img src={location} className="w-4" />
                      <span>{parlour.location}</span>
                    </p>
                    <p className="inline-flex gap-1.5 md:gap-2 items-center justify-center text-secondary">
                      <img src={clock} className="w-4 md:mt-0.5" />
                      <span>Opening Hours: {parlour.openingHours}</span>
                    </p>
                  </div>

                  {/* service section */}
                  <div className="mt-4">
                    <h2 className="text-sm font-medium">Extra Services:</h2>
                    {/* service list */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        expandedCard === parlour.id
                          ? "max-h-full"
                          : "max-h-[85px]"
                      }`}
                    >
                      <ul className="ml-2 list-inside list-disc font-light text-sm space-y-1 mt-1">
                        {parlour.services.map((service, index) => (
                          <div className="flex">
                            <li key={index}></li>
                            <span>{service}</span>
                          </div>
                        ))}
                      </ul>
                    </div>

                    {/* Read More / Less button */}
                    <button
                      onClick={() => toggleReadMore(parlour.id)}
                      className="text-gray-500 text-xs lg:text-sm font-medium mt-2 lg:mt-3 hover:underline focus:outline-none cursor-pointer underline"
                    >
                      {expandedCard === parlour.id ? "Read Less" : "Read More"}
                    </button>
                  </div>
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>

      {/* Standard parlours */}
      <div className="mb-20 lg:mb-30">
        <div className="text-center lg:text-left">
          {/* heading helping text */}
          <h1 className="text-xs lg:text-sm font-belda text-ternary/70 mb-1 md:mb-3 lg:mb-4 uppercase tracking-[2px] md:tracking-[3px]">
            Simple & Respectful
          </h1>
          {/* main heading */}
          <h1 className="text-2xl md:text-3xl lg:text-5xl leading-[41px] lg:leading-[62px] font-belda font-semibold">
            Standard Funeral Homes
          </h1>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* parlour card */}
          {parlours.map((parlour, index) =>
            parlour.category === "Standard Funeral Homes" ? (
              <div
                className="bg-[#F4F4F4] p-2 lg:p-2 rounded-xl h-fit shadow-[0_2px_6px_0_rgba(0,0,0,0.15)] flex flex-col lg:flex-row gap-3"
                key={index}
              >
                {/* left section - image slide */}
                <div className="relative w-full lg:w-2/5 rounded-lg h-[24dvh] md:h-[18dvh] lg:h-[34dvh] overflow-hidden">
                  <img
                    src={parlour.images[currentImageIndex[parlour.id] ?? 0]}
                    className="w-full h-full object-cover rounded-lg transition-all duration-500"
                  />

                  {/* next/prev buttons */}
                  <div className="absolute z-10 bottom-0 right-0 flex p-2 h-auto gap-1">
                    <img
                      src={prev}
                      onClick={() =>
                        handlePrev(parlour.id, parlour.images.length)
                      }
                      className="w-8 h-8 cursor-pointer"
                    />
                    <img
                      src={next}
                      onClick={() =>
                        handleNext(parlour.id, parlour.images.length)
                      }
                      className="w-8 h-8 cursor-pointer"
                    />
                  </div>
                </div>

                {/* right section */}
                <div className="w-full lg:w-3/5 py-0 px-2 md:p-2 lg:py-0 flex flex-col justify-between">
                  <h2 className="text-lg lg:text-xl font-semibold mb-1">
                    {parlour.name}
                  </h2>
                  <div className="mt-2 text-xs lg:text-sm space-y-2">
                    <p className="inline-flex gap-1.5 md:gap-2 items-center justify-center">
                      <img src={location} className="w-4" />
                      <span>{parlour.location}</span>
                    </p>
                    <p className="inline-flex gap-1.5 md:gap-2 items-center justify-center text-secondary">
                      <img src={clock} className="w-4 md:mt-0.5" />
                      <span>Opening Hours: {parlour.openingHours}</span>
                    </p>
                  </div>

                  {/* service section */}
                  <div className="mt-4">
                    <h2 className="text-sm font-medium">Extra Services:</h2>
                    {/* service list */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        expandedCard === parlour.id
                          ? "max-h-full"
                          : "max-h-[85px]"
                      }`}
                    >
                      <ul className="ml-2 list-inside list-disc font-light text-sm space-y-1 mt-1">
                        {parlour.services.map((service, index) => (
                          <div className="flex">
                            <li key={index}></li>
                            <span>{service}</span>
                          </div>
                        ))}
                      </ul>
                    </div>

                    {/* Read More / Less button */}
                    <button
                      onClick={() => toggleReadMore(parlour.id)}
                      className="text-gray-500 text-xs lg:text-sm font-medium mt-2 lg:mt-3 hover:underline focus:outline-none cursor-pointer underline"
                    >
                      {expandedCard === parlour.id ? "Read Less" : "Read More"}
                    </button>
                  </div>
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default AllParlous;
