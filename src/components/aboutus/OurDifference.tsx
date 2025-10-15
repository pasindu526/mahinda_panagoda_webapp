import React from "react";

import svg1 from "../../assets/img/aboutUs/care.svg";
import svg2 from "../../assets/img/aboutUs/clock.svg";
import svg3 from "../../assets/img/aboutUs/dedication.png";
import svg4 from "../../assets/img/aboutUs/dignity.svg";
import svg5 from "../../assets/img/aboutUs/guidance.png";
import svg6 from "../../assets/img/aboutUs/integrity.png";
import svg7 from "../../assets/img/aboutUs/professionalism.svg";
import svg8 from "../../assets/img/aboutUs/respect.svg";
import MPLogo from "../../assets/img/aboutUs/MPlogo.svg";

const OurDifference: React.FC = () => {
  const cards = [
    {
      title: "Compassionate Care",
      description:
        "Providing heartfelt support and comfort to families during their most difficult times.",
      icon: svg1,
      isMiddle: false,
    },
    {
      title: "Expert Professionalism",
      description:
        "Delivering high-quality funeral services with skill, reliability, and dignity.",
      icon: svg7,
      isMiddle: false,
    },
    {
      title: "Trusted Integrity",
      description:
        "Building trust through honest guidance and transparent practices.",
      icon: svg6,
      isMiddle: false,
      size: "w-14 h-14",
    },
    {
      title: "Respect for Tradition",
      description: "Honoring cultural and religious customs in every farewell.",
      icon: svg8,
      isMiddle: false,
    },
    { description: "", icon: "", isMiddle: true },
    {
      title: "24/7 Assistance",
      description:
        "Available around the clock to offer immediate help and guidance.",
      icon: svg2,
      isMiddle: false,
    },
    {
      title: "Personalized Guidance",
      description:
        "Tailoring every arrangement to reflect each family’s unique wishes.",
      icon: svg5,
      isMiddle: false,
      size: "w-14 h-14",
    },
    {
      title: "Service Dignity in Service",
      description:
        "Ensuring every step of the process is handled with utmost respect.",
      icon: svg4,
      isMiddle: false,
    },
    {
      title: "Dedicated Excellence",
      description:
        "Continuously improving services to provide the best care possible.",
      icon: svg3,
      isMiddle: false,
    },
  ];

  return (
    <section className="w-11/12 md:w-5/6 mx-auto ">
      <div className="mb-6 text-center">
        <h1 className="text-xs font-belda text-ternary/70 mb-1 lg:mb-2 uppercase tracking-wider">
          Why Families trust us
        </h1>
        <h1 className="lg:text-5xl md:text-3xl text-2xl leading-[41px] md:leading-[62px]  font-belda font-semibold">
          Our Difference
        </h1>
      </div>
      {/* Desktop Layout  */}
      <div className="hidden lg:grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-x-6 lg:gap-y-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center rounded-lg w-full
      ${
        card.isMiddle
          ? "bg-gradient-to-b from-black to-secondary justify-center p-4 md:p-6 shadow-md md:-mt-2  md:-mb-2"
          : "bg-white/10 hover:bg-white/20 h-[150px] md:h-[200px] py-2 md:py-3 px-4 md:px-6 shadow-[0_2px_6px_0_rgba(0,0,0,0.25)]"
      }`}
          >
            {card.isMiddle ? (
              <img src={MPLogo} alt="Logo" className="w-full h-28 md:h-40" />
            ) : (
              <>
                {/* Icon */}
                <div className="md:w-24 md:h-24 lg:w-18 lg:h-18 -translate-y-7 flex-shrink-0 md:mb-0 md:mr-4">
                  <img
                    src={card.icon}
                    alt={card.title}
                    className={`mx-auto ${card.size || "w-16 h-16"}`} 
                  />
                </div>

                {/* Content */}
                <div className="text-center md:text-left">
                  <h3 className="font-medium text-2xl text-ternary">
                    {card.title}
                  </h3>
                  <p className="text-xl font-light mt-1 md:mt-1.5 mb-1 md:mb-2 text-ternary">
                    {card.description}
                  </p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Tablet Layout */}
      <div className="hidden md:grid lg:hidden w-full grid-cols-3 gap-x-6 gap-y-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`flex flex-col items-center rounded-lg 
        ${
          card.isMiddle
            ? "bg-gradient-to-b from-black to-secondary justify-center -mt-2 -mb-2"
            : "bg-white/10 hover:bg-white/20 p-4 sm:p-5 md:p-6 shadow-[0_2px_6px_0_rgba(0,0,0,0.25)]"
        }`}
          >
            {/* Logo / Icon at Top */}
            <img
              src={card.isMiddle ? MPLogo : card.icon}
              alt={card.title}
              className={`${card.isMiddle ? "w-50 h-50" : "w-8 h-8"}`}
            />

            {/* Title */}
            <h3 className="font-bold text-base text-ternary text-center mt-2">
              {card.title}
            </h3>

            {/* Description */}
            {!card.isMiddle && (
              <p className="text-sm sm:text-base md:text-sm font-light mt-1 text-center text-ternary">
                {card.description}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Layout */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:hidden w-full">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`flex flex-col items-center rounded-lg shadow-md 
        ${
          card.isMiddle
            ? "bg-gradient-to-b from-black to-secondary w-full p-4 col-span-2  mx-auto -my-2 hidden"
            : "bg-white/10 hover:bg-white/20 p-3"
        }`}
          >
            {/* Logo / Icon */}
            <img
              src={card.isMiddle ? MPLogo : card.icon}
              alt={card.title}
              className={`${card.isMiddle ? "w-40 h-20" : "w-10 h-10"}`}
            />

            {/* Title */}
            <h3 className="font-bold text-sm text-ternary text-center mt-2">
              {card.title}
            </h3>

            {/* Description */}
            <p
              className={`text-ternary text-center font-light ${
                card.isMiddle ? "text-sm mt-2" : "text-xs mt-1 "
              }`}
            >
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurDifference;
