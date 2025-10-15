import { useState, useEffect } from "react";
import frame from "../../assets/img/publicfigures/frame.png";
import bg from "../../assets/img/publicfigures/back.png";
import person1 from "../../assets/img/publicfigures/person1.jpg";
import person2 from "../../assets/img/publicfigures/person2.jpg";
import person3 from "../../assets/img/publicfigures/person3.jpg";
import { Maximize2 } from "lucide-react";
import flame from "../../assets/img/publicfigures/f.json";
import Lottie from "lottie-react";
import arrow from "../../assets/img/publicfigures/arrow.svg";

type Testimonial = {
  id: number;
  name: string;
  date: string;
  photo: string;
  birthDate: string;
  feedback: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Late Mr. Mahilal Senevirathne (Press Secretary of Hon. Sajith Premadasa)",
    date: "27 September 2020",
    photo: person1,
    birthDate: "12 March 1950",
    feedback:
      "We are truly grateful for the compassionate and professional service provided during our most difficult time. The arrangements were handled with great care and dignity.",
  },
  {
    id: 2,
    name: "Late Mr. Mahilal Senevirathne (Press Secretary of Hon. Sajith Premadasa)",
    date: "27 September 2020",
    photo: person2,
    birthDate: "12 March 1950",
    feedback:
      "We are truly grateful for the compassionate and professional service provided during our most difficult time. The arrangements were handled with great care and dignity.",
  },
  {
    id: 3,
    name: "Late Mr. Mahilal Senevirathne (Press Secretary of Hon. Sajith Premadasa)",
    date: "27 September 2020",
    photo: person3,
    birthDate: "12 March 1950",
    feedback:
      "We are truly grateful for the compassionate and professional service provided during our most difficult time. The arrangements were handled with great care and dignity.",
  },
  {
    id: 4,
    name: "Late Mr. Mahilal Senevirathne (Press Secretary of Hon. Sajith Premadasa)",
    date: "27 September 2020",
    photo: person3,
    birthDate: "12 March 1950",
    feedback:
      "We are truly grateful for the compassionate and professional service provided during our most difficult time. The arrangements were handled with great care and dignity.",
  },
  {
    id: 5,
    name: "Late Mr. Mahilal Senevirathne (Press Secretary of Hon. Sajith Premadasa)",
    date: "27 September 2020",
    photo: person3,
    birthDate: "12 March 1950",
    feedback:
      "We are truly grateful for the compassionate and professional service provided during our most difficult time. The arrangements were handled with great care and dignity.",
  },
  {
    id: 6,
    name: "Late Mr. Mahilal Senevirathne (Press Secretary of Hon. Sajith Premadasa)",
    date: "27 September 2020",
    photo: person3,
    birthDate: "12 March 1950",
    feedback:
      "We are truly grateful for the compassionate and professional service provided during our most difficult time. The arrangements were handled with great care and dignity.",
  },
  {
    id: 7,
    name: "Late Mr. Mahilal Senevirathne (Press Secretary of Hon. Sajith Premadasa)",
    date: "27 September 2020",
    photo: person3,
    birthDate: "12 March 1950",
    feedback:
      "We are truly grateful for the compassionate and professional service provided during our most difficult time. The arrangements were handled with great care and dignity.",
  },
  {
    id: 8,
    name: "Late Mr. Mahilal Senevirathne (Press Secretary of Hon. Sajith Premadasa)",
    date: "27 September 2020",
    photo: person3,
    birthDate: "12 March 1950",
    feedback:
      "We are truly grateful for the compassionate and professional service provided during our most difficult time. The arrangements were handled with great care and dignity.",
  },
  {
    id: 9,
    name: "Late Mr. Mahilal Senevirathne (Press Secretary of Hon. Sajith Premadasa)",
    date: "27 September 2020",
    photo: person3,
    birthDate: "12 March 1950",
    feedback:
      "We are truly grateful for the compassionate and professional service provided during our most difficult time. The arrangements were handled with great care and dignity.",
  },
  {
    id: 10,
    name: "Late Mr. Mahilal Senevirathne (Press Secretary of Hon. Sajith Premadasa)",
    date: "27 September 2020",
    photo: person3,
    birthDate: "12 March 1950",
    feedback:
      "We are truly grateful for the compassionate and professional service provided during our most difficult time. The arrangements were handled with great care and dignity.",
  },
  {
    id: 11,
    name: "Late Mr. Mahilal Senevirathne (Press Secretary of Hon. Sajith Premadasa)",
    date: "27 September 2020",
    photo: person3,
    birthDate: "12 March 1950",
    feedback:
      "We are truly grateful for the compassionate and professional service provided during our most difficult time. The arrangements were handled with great care and dignity.",
  },
  {
    id: 12,
    name: "Late Mr. Mahilal Senevirathne (Press Secretary of Hon. Sajith Premadasa)",
    date: "27 September 2020",
    photo: person3,
    birthDate: "12 March 1950",
    feedback:
      "We are truly grateful for the compassionate and professional service provided during our most difficult time. The arrangements were handled with great care and dignity.",
  },
  {
    id: 13,
    name: "Late Mr. Mahilal Senevirathne (Press Secretary of Hon. Sajith Premadasa)",
    date: "27 September 2020",
    photo: person3,
    birthDate: "12 March 1950",
    feedback:
      "We are truly grateful for the compassionate and professional service provided during our most difficult time. The arrangements were handled with great care and dignity.",
  },
];

const PublicFigures = () => {
  const [selectedCard, setSelectedCard] = useState<Testimonial | null>(null);

  const [visibleCount, setVisibleCount] = useState(
    window.innerWidth >= 1024 ? 9 : 4
  );

  const [mobileVisibleCount, setMobileVisibleCount] = useState(4);

  const handleShowMoreDesktop = () => {
    if (visibleCount >= testimonials.length) {
      setVisibleCount(9);
    } else {
      setVisibleCount((prev) => Math.min(prev + 3, testimonials.length));
    }
  };

  const handleShowMoreMobile = () => {
    if (mobileVisibleCount >= testimonials.length) {
      setMobileVisibleCount(4);
    } else {
      setMobileVisibleCount((prev) => Math.min(prev + 2, testimonials.length));
    }
  };

  const isAllVisibleDesktop = visibleCount >= testimonials.length;
  const isAllVisibleMobile = mobileVisibleCount >= testimonials.length;

  useEffect(() => {
    let scrollY = 0;

    if (selectedCard) {
      // Save current scroll position
      scrollY = window.scrollY;

      // Freeze the body in place
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
      document.body.style.width = "100%";
    } else {
      // Restore scroll position
      const y = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.overflow = "";
      document.body.style.width = "";
      window.scrollTo(0, parseInt(y || "0") * -1);
    }

    return () => {
      // Component unmounts with modal open
      const y = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.overflow = "";
      document.body.style.width = "";
      if (y) window.scrollTo(0, parseInt(y || "0") * -1);
    };
  }, [selectedCard]);

  return (
    <>
      {/* Heading */}
      <div className="mb-6 text-center">
        <h1 className="text-xs font-belda text-ternary/70 mb-1 lg:mb-2 uppercase tracking-wider">
          Testimonials
        </h1>
        <h1 className="lg:text-5xl md:text-3xl text-2xl leading-[41px] md:leading-[62px]  font-belda font-semibold">
          Public Figures
        </h1>
      </div>

      {/* DESKTOP */}
      <div className="hidden lg:block">
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {testimonials.slice(0, visibleCount).map((item, idx) => {
            const itemsPerRow = 3;
            const totalVisible = visibleCount;
            const startOfLastRow =
              totalVisible - (totalVisible % itemsPerRow || itemsPerRow);

            return (
              <div
                key={item.id}
                onClick={() => setSelectedCard(item)}
                className="rounded-xl flex flex-col items-center text-center relative overflow-hidden cursor-pointer"
              >
                <div className="w-full relative aspect-[5/4] pt-1">
                  {/* Background */}
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-40"
                    style={{ backgroundImage: `url(${bg})` }}
                  ></div>

                  {/* Maximize icon */}
                  <button
                    onClick={() => setSelectedCard(item)}
                    className="absolute top-6 right-6 p-1.5 rounded-lg border-2 border-secondary text-secondary cursor-pointer z-50"
                  >
                    <Maximize2 size={18} />
                  </button>

                  {/* Card */}
                  <div className="relative z-10 flex flex-col items-center h-full p-5">
                    <div className="relative w-48 h-58 mb-4">
                      <img
                        src={item.photo}
                        alt={item.name}
                        className="w-[67%] h-[66%] object-cover rounded-full absolute grayscale-100 top-8 left-1/2 transform -translate-x-1/2"
                      />
                      <div className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none translate-y-14.5 -translate-0.5">
                        <Lottie
                          animationData={flame}
                          loop
                          className="w-24 h-16"
                        />
                      </div>
                      <img
                        src={frame}
                        alt="frame"
                        className="absolute inset-0 w-full h-full pointer-events-none z-30"
                      />
                    </div>
                    <h3 className="text-xl">{item.name}</h3>
                    <p className="text-lg font-light mt-3 mb-5">{item.date}</p>
                  </div>

                  {/* Overlay for last visible row */}
                  {idx >= startOfLastRow && (
                    <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-white to-transparent pointer-events-none z-40"></div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Show more / less */}
        <div
          onClick={handleShowMoreDesktop}
          className="flex flex-col items-center cursor-pointer mt-6"
        >
          <img
            src={arrow}
            alt="arrow"
            className={`w-10 h-10 transition-transform duration-300 ${
              isAllVisibleDesktop ? "rotate-180" : ""
            }`}
          />
          <span className="text-lg underline">
            {isAllVisibleDesktop ? "Show Less Figures" : "Show More Figures"}
          </span>
        </div>
      </div>
      {/* MOBILE + TABLET */}
      <div className="block lg:hidden">
        <div className="grid grid-cols-2 gap-2 md:gap-6 gap-y-2 w-full">
          {testimonials.slice(0, mobileVisibleCount).map((item, idx) => {
            const itemsPerRow = 2; // two columns on mobile/tablet
            const totalVisible = mobileVisibleCount;
            const startOfLastRow =
              totalVisible - (totalVisible % itemsPerRow || itemsPerRow);

            const isLastVisibleRow = idx >= startOfLastRow;

            return (
              <div
                key={item.id}
                onClick={() => setSelectedCard(item)}
                className="rounded-xl flex flex-col items-center text-center relative overflow-hidden"
              >
                <div className="w-full relative h-auto md:aspect-[6/6] pt-1">
                  {/* Background */}
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-40"
                    style={{ backgroundImage: `url(${bg})` }}
                  ></div>

                  {/* Maximize icon */}
                  <button
                    onClick={() => setSelectedCard(item)}
                    className="absolute top-3 right-2 p-1.5 rounded-lg border-2 border-secondary text-secondary cursor-pointer z-10"
                  >
                    <Maximize2 size={14} />
                  </button>

                  {/* Card */}
                  <div className="relative z-10 flex flex-col items-center h-full p-5">
                    <div className="relative w-24 h-30 mb-4 md:w-38 md:h-48">
                      <img
                        src={item.photo}
                        alt={item.name}
                        className="w-[66%] h-[68%] object-cover rounded-full absolute grayscale-50 top-4 left-1/2 transform -translate-x-1/2"
                      />
                      <div className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none translate-y-7.5 -translate-x-[1%]">
                        <Lottie
                          animationData={flame}
                          loop
                          className="w-10 h-8"
                        />
                      </div>
                      <img
                        src={frame}
                        alt="frame"
                        className="absolute inset-0 w-full h-full pointer-events-none z-30"
                      />
                    </div>
                    <h3 className="text-sm">{item.name}</h3>
                    <p className="text-xs font-light mt-3 mb-5">{item.date}</p>
                  </div>

                  {/* Overlay */}
                  {isLastVisibleRow && (
                    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-40"></div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Show more / less */}
        <div
          onClick={handleShowMoreMobile}
          className="flex flex-col items-center cursor-pointer mt-6"
        >
          <img
            src={arrow}
            alt="arrow"
            className={`w-10 h-10 transition-transform duration-300 ${
              isAllVisibleMobile ? "rotate-180" : ""
            }`}
          />
          <span className="text-lg underline">
            {isAllVisibleMobile ? "Show Less Figures" : "Show More Figures"}
          </span>
        </div>
      </div>

      {/*  DESKTOP + TABLET MODAL  */}
      {selectedCard && (
        <div className="hidden md:flex fixed inset-0 bg-black/50 items-center justify-center z-50">
          <div className="relative w-11/12 max-w-4xl rounded-xl overflow-hidden bg-white h-[480px]">
            <div className="relative z-10 p-6 flex flex-col md:flex-row gap-6">
              <button
                onClick={() => setSelectedCard(null)}
                className="absolute top-3 right-3 cursor-pointer text-2xl font-bold text-black"
              >
                ×
              </button>

              {/* Left */}
              <div className="flex justify-center items-center w-full md:w-1/2 relative mt-6 h-[390px] ">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-40 rounded-xl"
                  style={{ backgroundImage: `url(${bg})` }}
                ></div>
                <div className="relative w-60 h-72">
                  <img
                    src={selectedCard.photo}
                    alt={selectedCard.name}
                    className="w-[67%] h-[66%] object-cover rounded-full absolute top-8 left-1/2 transform -translate-x-1/2 grayscale-50"
                  />
                  <div className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none translate-y-17.5 -translate-0.5">
                    <Lottie animationData={flame} loop className="w-20 h-18" />
                  </div>
                  <img
                    src={frame}
                    alt="frame"
                    className="absolute inset-0 w-full h-full pointer-events-none z-30"
                  />
                </div>
              </div>

              {/* Right */}
              <div className="flex flex-col justify-center w-full md:w-1/2 text-left">
                <h3 className="text-2xl">{selectedCard.name}</h3>
                <p className="text-lg mt-6">
                  <span className="font-semibold">Birth Date:</span>{" "}
                  {selectedCard.birthDate}
                </p>
                <p className="text-lg mt-6">
                  <span className="font-semibold">Death Date:</span>{" "}
                  {selectedCard.date}
                </p>
                <div className="mt-6">
                  <h4 className="text-xl font-semibold">Family Feedback</h4>
                  <p className="leading-relaxed mt-2">
                    {selectedCard.feedback}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/*  MOBILE MODAL */}
      {selectedCard && (
        <div className="md:hidden fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="relative w-11/12 max-w-md rounded-xl overflow-hidden bg-white max-h-[120vh]">
            <button
              onClick={() => setSelectedCard(null)}
              className="absolute top-3 right-3 cursor-pointer text-2xl font-bold text-black z-50"
            >
              ×
            </button>
            <div className="p-4 flex flex-col items-center text-center overflow-y-auto">
              <div className="relative w-52 h-60 mb-4 mt-4">
                <img
                  src={selectedCard.photo}
                  alt={selectedCard.name}
                  className="w-[70%] h-[65%] object-cover rounded-full absolute top-8 left-1/2 transform -translate-x-1/2 grayscale-50"
                />
                <div className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none translate-y-15 -translate-0.5">
                  <Lottie animationData={flame} loop className="w-16 h-16" />
                </div>
                <img
                  src={frame}
                  alt="frame"
                  className="absolute inset-0 w-full h-full pointer-events-none z-30"
                />
              </div>
              <h3 className="text-xl">{selectedCard.name}</h3>
              <p className="mt-4">
                <span className="font-semibold">Birth:</span>{" "}
                {selectedCard.birthDate}
              </p>
              <p className="mt-4">
                <span className="font-semibold">Death:</span>{" "}
                {selectedCard.date}
              </p>
              <div className="mt-4 text-center w-full">
                <h4 className="text-lg font-semibold">Family Feedback</h4>
                <p className="leading-relaxed text-justify p-2 mb-4">
                  {selectedCard.feedback}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PublicFigures;
