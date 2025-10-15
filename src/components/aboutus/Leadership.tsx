import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import leader1 from "../../assets/img/aboutUs/l2.png";
import leader2 from "../../assets/img/aboutUs/l1.png";
import leader3 from "../../assets/img/aboutUs/l2.png";
import lineart from "../../assets/img/aboutUs/lineArt2.svg";

const Leadership: React.FC = () => {
  const slider = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  const leaders = [
    {
      image: leader1,
      name: "Mr. Mahinda Panagoda",
      title: "Founder & Managing Director",
    },
    {
      image: leader2,
      name: "Mrs.Radanika Panagoda ",
      title: "Director",
    },
    {
      image: leader3,
      name: "Mr. Mahinda Panagoda",
      title: "Reading",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-[#FFFFFF] to-[#F6F5F4]">
      {/* Section Header */}
      <div className="mb-6 text-center">
        <h1 className="text-xs font-belda text-ternary/70 mb-1 lg:mb-2 uppercase tracking-wider">
          MEET OUR LEADERSHIP
        </h1>
        <h1 className="lg:text-5xl md:text-3xl text-2xl leading-[41px] md:leading-[62px]  font-belda font-semibold">
          The People Behind Our Legacy
        </h1>
      </div>
      {/* Desktop & Tablet */}
      <div className="hidden md:grid grid-cols-3 justify-center mt-18 gap-x-25 gap-y-6 pb-10 w-11/12 md:w-4/6 mx-auto">
        {leaders.map((leader, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center w-full"
          >
            {/* Circular Image */}
            <img
              src={leader.image}
              alt={leader.name}
              className="w-38 h-38 rounded-full object-cover"
            />

            {/* Name */}
            <h3 className="text-lg text-ternary mt-6">{leader.name}</h3>

            {/* Title */}
            <p className="text-base italic text-ternary/70">{leader.title}</p>
          </div>
        ))}

        <img
          src={lineart}
          alt="Decorative"
          className="absolute right-0 lg:w-auto md:w-[170px] -translate-y-[110%] lg:right-0 lg:-translate-y-[70%] z-10 pointer-events-none"
        />
      </div>

 {/* Mobile Layout (Slider) */}
<div className="md:hidden mt-8 relative ">
  <Slider
    {...slider}
    autoplay={true}        
    autoplaySpeed={2000}    
    arrows={false}         
  >
    {leaders.map((leader, index) => (
      <div key={index} className="flex flex-col items-center text-center pb-4">
        <img
          src={leader.image}
          alt={leader.name}
          className="w-28 h-28 rounded-full object-cover mx-auto"
        />
        <h3 className="text-sm text-ternary mt-3">{leader.name}</h3>
        <p className="text-xs italic text-ternary/70 mt-1">{leader.title}</p>
      </div>
    ))}
  </Slider>

  {/* Decorative line art */}
  <img
    src={lineart}
    alt="Decorative"
    className="absolute w-[100px] right-0 -translate-y-[220%] z-10 pointer-events-none"
  />
</div>

    </section>
  );
};

export default Leadership;
