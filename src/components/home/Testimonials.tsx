import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import Slider from "react-slick";
import Lottie from "lottie-react";
import flame from "../../assets/img/publicfigures/f.json";
import { Maximize2 } from "lucide-react";

import frame from "../../assets/img/publicfigures/frame.png";
import bg from "../../assets/img/publicfigures/back.png";
import person1 from "../../assets/img/publicfigures/person1.jpg";
import person2 from "../../assets/img/publicfigures/person2.jpg";
import person3 from "../../assets/img/publicfigures/person3.jpg";
import quotes from "../../assets/icon/quotes.svg";
import prev from "../../assets/icon/prev.svg";
import next from "../../assets/icon/next.svg";

type Testimonial = {
  id: number;
  name: string;
  date: string;
  photo: string;
  birthDate: string;
  member: string;
  relation: string;
  feedback: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Late Mr. Mahilal Senevirathne (Press Secretary of Hon. Sajith Premadasa)",
    date: "27 September 2020",
    photo: person1,
    birthDate: "12 March 1950",
    member: "Chandima Bodhinath",
    relation: "Family Member",
    feedback:
      'Excellent professional service provider. Very helpful and courteous staff. Reasonable charges too. Adequate space inside. They will provide you everything to give you peace of mind during the difficult time. Even the Buddhist monks are available from a temple close by for the "Pansakula" if you are Buddhists. Highly recommended.',
  },
  {
    id: 2,
    name: "Late Mr. Mahilal Senevirathne (Press Secretary of Hon. Sajith Premadasa)",
    date: "27 September 2020",
    photo: person2,
    birthDate: "12 March 1950",
    member: "Chandima Bodhinath",
    relation: "Family Member",
    feedback:
      'Excellent professional service provider. Very helpful and courteous staff. Reasonable charges too. Adequate space inside. They will provide you everything to give you peace of mind during the difficult time. Even the Buddhist monks are available from a temple close by for the "Pansakula" if you are Buddhists. Highly recommended.',
  },
  {
    id: 3,
    name: "Late Mr. Mahilal Senevirathne (Press Secretary of Hon. Sajith Premadasa)",
    date: "27 September 2020",
    photo: person3,
    birthDate: "12 March 1950",
    member: "Chandima Bodhinath",
    relation: "Family Member",
    feedback:
      'Excellent professional service provider. Very helpful and courteous staff. Reasonable charges too. Adequate space inside. They will provide you everything to give you peace of mind during the difficult time. Even the Buddhist monks are available from a temple close by for the "Pansakula" if you are Buddhists. Highly recommended.',
  },
  {
    id: 4,
    name: "Late Mr. Mahilal Senevirathne (Press Secretary of Hon. Sajith Premadasa)",
    date: "27 September 2020",
    photo: person3,
    birthDate: "12 March 1950",
    member: "Chandima Bodhinath",
    relation: "Family Member",
    feedback:
      "We are truly grateful for the compassionate and professional service provided during our most difficult time. The arrangements were handled with great care and dignity.",
  },
  {
    id: 5,
    name: "Late Mr. Mahilal Senevirathne (Press Secretary of Hon. Sajith Premadasa)",
    date: "27 September 2020",
    photo: person3,
    birthDate: "12 March 1950",
    member: "Chandima Bodhinath",
    relation: "Family Member",
    feedback:
      "We are truly grateful for the compassionate and professional service provided during our most difficult time. The arrangements were handled with great care and dignity.",
  },
  {
    id: 6,
    name: "Late Mr. Mahilal Senevirathne (Press Secretary of Hon. Sajith Premadasa)",
    date: "27 September 2020",
    photo: person3,
    birthDate: "12 March 1950",
    member: "Chandima Bodhinath",
    relation: "Family Member",
    feedback:
      "We are truly grateful for the compassionate and professional service provided during our most difficult time. The arrangements were handled with great care and dignity.",
  },
  {
    id: 7,
    name: "Late Mr. Mahilal Senevirathne (Press Secretary of Hon. Sajith Premadasa)",
    date: "27 September 2020",
    photo: person3,
    birthDate: "12 March 1950",
    member: "Chandima Bodhinath",
    relation: "Family Member",
    feedback:
      "We are truly grateful for the compassionate and professional service provided during our most difficult time. The arrangements were handled with great care and dignity.",
  },
  {
    id: 8,
    name: "Late Mr. Mahilal Senevirathne (Press Secretary of Hon. Sajith Premadasa)",
    date: "27 September 2020",
    photo: person3,
    birthDate: "12 March 1950",
    member: "Chandima Bodhinath",
    relation: "Family Member",
    feedback:
      "We are truly grateful for the compassionate and professional service provided during our most difficult time. The arrangements were handled with great care and dignity.",
  },
  {
    id: 9,
    name: "Late Mr. Mahilal Senevirathne (Press Secretary of Hon. Sajith Premadasa)",
    date: "27 September 2020",
    photo: person3,
    birthDate: "12 March 1950",
    member: "Chandima Bodhinath",
    relation: "Family Member",
    feedback:
      "We are truly grateful for the compassionate and professional service provided during our most difficult time. The arrangements were handled with great care and dignity.",
  },
  {
    id: 10,
    name: "Late Mr. Mahilal Senevirathne (Press Secretary of Hon. Sajith Premadasa)",
    date: "27 September 2020",
    photo: person3,
    birthDate: "12 March 1950",
    member: "Chandima Bodhinath",
    relation: "Family Member",
    feedback:
      "We are truly grateful for the compassionate and professional service provided during our most difficult time. The arrangements were handled with great care and dignity.",
  },
];

const Testimonials: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<Testimonial | null>(null);
  const sliderRef = useRef<Slider | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 6000,
    arrows: false,
    beforeChange: (_oldIndex: number, newIndex: number) =>
      setCurrentIndex(newIndex),
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedCard) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      sliderRef.current?.slickPlay(); // resume the slider when popup/modal is closed
    }
  }, [selectedCard]);

  return (
    <div className="w-full flex flex-col gap-6 lg:gap-10 overflow-hidden">
      {/* heading */}
      <div className="text-center">
        <h1 className="text-xs lg:text-sm font-belda text-ternary/70 mb-1 md:mb-3 lg:mb-4 uppercase tracking-[2px] md:tracking-[3px]">
          testimonials
        </h1>
        <h1 className="text-2xl md:text-3xl lg:text-5xl leading-[41px] lg:leading-[62px] font-belda font-semibold">
          Public Figures & Feedback
        </h1>
      </div>

      {/* Testimonials card */}
      <Slider ref={sliderRef} {...settings}>
        {testimonials.map((figure) => (
          <div
            key={figure.id}
            className="!w-11/12 md:!w-5/6 !mx-auto !flex !flex-col md:!flex-row !gap-6 lg:!gap-10"
          >
            {/* figure section */}
            <div className="w-full md:w-4/5 lg:w-1/2 relative pt-1 rounded-lg shadow-md">
              {/* Background */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-60 rounded-lg"
                style={{ backgroundImage: `url(${bg})` }}
              ></div>

              {/* Maximize icon */}
              <button
                onClick={() => {
                  sliderRef.current?.slickPause(); // pause slider when opening popup
                  setSelectedCard(figure);
                }}
                className="absolute top-6 right-6 p-1.5 rounded-lg border-2 border-secondary text-secondary cursor-pointer z-10"
              >
                <Maximize2 size={18} />
              </button>

              {/* Card */}
              <div className="relative z-0 flex flex-col items-center justify-center h-full p-5">
                <div className="relative w-38 h-48 md:w-48 md:h-58 md:mb-4">
                  <img
                    src={figure.photo}
                    alt={figure.name}
                    className="w-[67%] h-[66%] object-cover rounded-full absolute grayscale-100 top-6 md:top-8 left-1/2 transform -translate-x-1/2"
                  />
                  {/* Flame in Lamp */}
                  <div className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none translate-y-12 md:translate-y-14.5 -translate-0.5">
                    <Lottie animationData={flame} loop className="w-24 h-16" />
                  </div>
                  <img
                    src={frame}
                    alt="frame"
                    className="absolute inset-0 w-full h-full pointer-events-none z-30"
                  />
                </div>
                <h3 className="text-base md:text-lg text-center">
                  {figure.name}
                </h3>
                <p className="text-sm md:text-base font-light mt-3 md:mb-5 text-center">
                  {figure.date}
                </p>
              </div>
            </div>

            {/* feedback card */}
            <div className="w-full flex flex-col bg-[#F4F4F4] p-6 md:p-10 md:pb-6 rounded-lg shadow-md">
              <div>
                {/* double quote image */}
                <img src={quotes} className="w-7 md:w-9 mb-4 md:mb-6" />

                {/* content */}
                <p className="text-base lg:text-xl text-justify font-light leading-6 md:leading-7 lg:leading-8">
                  {figure.feedback}
                </p>
                <p className="text-sm lg:text-base font-medium mt-6">
                  {figure.member}
                </p>
                <p className="text-sm lg:text-base font-light text-ternary/70 mb-6">
                  ~ {figure.relation} ~
                </p>
              </div>
              {/* next-prev, see others button section */}
              <div className="mt-auto flex justify-between">
                {/* next/prev buttons */}
                <div className="flex items-center gap-2">
                  <img
                    src={prev}
                    className="h-10 lg:h-12 hover:opacity-80 cursor-pointer"
                    onClick={() => sliderRef.current?.slickPrev()}
                  />

                  <img
                    src={next}
                    className="h-10 lg:h-12 hover:opacity-80 cursor-pointer"
                    onClick={() => sliderRef.current?.slickNext()}
                  />
                </div>

                {/* dots */}
                <div className="hidden lg:flex items-center gap-2 px-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => sliderRef.current?.slickGoTo(idx)}
                      className={`w-3 h-1.5 rounded-full transition-colors duration-200 ${
                        idx === currentIndex
                          ? "bg-secondary"
                          : "bg-secondary/30"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* see all figures button */}
                <button
                  onClick={() => {
                    navigate("/publicfigure");
                  }}
                  className="flex items-center gap-1 md:gap-2.5 px-4 md:px-4 py-2.5 lg:h-12 border-2 border-ternary rounded-lg text-terborder-ternary text-xs md:text-sm lg:text-base font-medium hover:bg-white/40 cursor-pointer"
                >
                  See All Public Figures
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* popup */}
      {selectedCard && (
        <div className="flex fixed inset-0 bg-black/50 items-center justify-center z-50 px-4s">
          <div className="relative w-11/12 max-w-4xl md:max-w-3xl rounded-xl bg-white max-h-[90vh] md:h-auto">
            <button
              onClick={() => {
                sliderRef.current?.slickPlay(); // resume slider when closing popup
                setSelectedCard(null);
              }}
              className="absolute top-0 md:top-1 right-2 md:right-3 cursor-pointer text-2xl font-semibold text-black z-40"
            >
              ×
            </button>
            <div className="relative z-10 p-6 flex flex-col md:flex-row gap-6 overflow-y-scroll md:overflow-y-hidden max-h-[84vh] mb-6 md:mb-1 lg:mb-2">
              {/* Left */}
              <div className="flex justify-center items-center w-full md:w-1/2 relative lg:mt-2 h-auto ">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-60 rounded-xl"
                  style={{ backgroundImage: `url(${bg})` }}
                ></div>
                <div className="relative w-40 h-52 md:w-60 md:h-72 my-2 md:my-0">
                  <img
                    src={selectedCard.photo}
                    alt={selectedCard.name}
                    className="w-[67%] h-[66%] object-cover rounded-full absolute top-7 md:top-8 left-1/2 transform -translate-x-1/2 grayscale-50"
                  />
                  <div className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none translate-y-13 md:translate-y-17.5 -translate-0.5">
                    <Lottie
                      animationData={flame}
                      loop
                      className="w-20 h-16 md:h-18"
                    />
                  </div>
                  <img
                    src={frame}
                    alt="frame"
                    className="absolute inset-0 w-full h-full pointer-events-none z-30"
                  />
                </div>
              </div>

              {/* Right */}
              <div className="flex flex-col justify-center w-full md:w-1/2 text-left mt-2">
                <h3 className="text-lg">
                  <span className="font-semibold">Name: </span>
                  {selectedCard.name}
                </h3>
                <p className="text-lg mt-6">
                  <span className="font-semibold">Birth Date: </span>
                  {selectedCard.birthDate}
                </p>
                <p className="text-lg mt-6">
                  <span className="font-semibold">Death Date: </span>
                  {selectedCard.date}
                </p>
                <div className="mt-6">
                  <h4 className="text-lg font-semibold">Family Feedback:</h4>
                  <p className="leading-relaxed text-justify">
                    {selectedCard.feedback}
                  </p>
                  <p className="text-sm font-medium mt-4">
                    - {selectedCard.member}
                    <br />
                    <span className="text-ternary/50">
                      ~ {selectedCard.relation} ~
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonials;
