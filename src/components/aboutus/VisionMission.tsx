import React from "react";
import LineArt from "../../assets/img/aboutUs/lineArt.svg";
const VisionMission: React.FC = () => {
  return (
    <section>
      <div className="hidden lg:block bg-gradient-to-b from-black via-black/100 via-3/4 to-secondary py-28  relative">
        <div className="w-5/6 mx-auto grid md:grid-cols-2 gap-10 relative">
          {/* Vision Card */}
          <div className="bg-primary rounded-lg p-8 text-center md:text-left lg:h-[400px] z-10 relative">
            <p className="text-sm text-ternary/70 text-center font-[belda] uppercase mb-4 mt-6 tracking-wider">
              Our Vision
            </p>
            <h2 className="text-2xl md:text-4xl text-center font-[belda] font-semibold mb-4">
              Guiding Tomorrow
            </h2>
            <p className="text-ternery text-2xl font-light text-center mt-10 leading-normal">
              To be Sri Lanka’s most trusted and compassionate funeral partner,
              delivering peace of mind and dignified farewells for every family
            </p>
          </div>
          {/* Mission Card */}
          <div className="bg-white/90 rounded-lg p-8 px-4 text-center md:text-left relative z-12">
            <p className="text-sm text-ternary/70 text-center font-[belda] uppercase mb-4 mt-6 tracking-wider">
              Our Mission
            </p>
            <h2 className="text-2xl md:text-4xl text-center font-[belda] font-semibold mb-4">
              Serving Today
            </h2>
            <p className="text-ternery text-2xl font-light text-center mt-10 leading-normal w-xl">
              We are committed to guiding families with professional care,
              modern facilities, and heartfelt compassion, honoring traditions
              while meeting contemporary needs.
            </p>
          </div>
          {/* Decorative Image Behind Mission Card */}
          <img
            src={LineArt}
            alt="Decorative"
            className="absolute -right-30 w-50 md:w-140 -translate-y-30 z-10 pointer-events-none"
          />
        </div>
      </div>

      {/* Mobile & Tablet */}
      <div className="bg-gradient-to-b from-black via-black/100 via-3/4 to-secondary py-12 md:py-20 lg:hidden relative">
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative md:w-5/6 ">
          {/* Vision Card */}
          <div className="bg-primary rounded-lg p-6 text-center relative z-10">
            <p className="text-sm text-ternary/70 text-center font-[belda] uppercase mb-4 mt-4 tracking-wider">
              Our Vision
            </p>
            <h2 className="text-2xl text-center font-[belda] font-semibold mb-4">
              Guiding Tomorrow
            </h2>
            <p className="text-ternery text-lg font-light text-center mt-6 leading-relaxed">
              To be Sri Lanka's most trusted and compassionate funeral partner,
              delivering peace of mind and dignified farewells for every family
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-white/90 rounded-lg p-6 text-center relative z-11">
            <p className="text-sm text-ternary/70 text-center font-[belda] uppercase mb-4 mt-4 tracking-wider">
              Our Mission
            </p>
            <h2 className="text-2xl text-center font-[belda] font-semibold mb-4">
              Serving Today
            </h2>
            <p className="text-ternery text-lg font-light text-center mt-6 leading-relaxed">
              We are committed to guiding families with professional care,
              modern facilities, and heartfelt compassion, honoring traditions
              while meeting contemporary needs.
            </p>
          </div>
          <img
            src={LineArt}
            alt="Decorative"
            className="absolute -right-4  w-30 -translate-y-10 md:-right-14 md:w-50 md:-translate-y-10 z-10 pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
};
export default VisionMission;
