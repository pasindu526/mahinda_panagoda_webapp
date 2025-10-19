import React from "react";

const Testimonials: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-6 lg:gap-10">
      {/* heading */}
      <div className="text-center">
        <h1 className="text-xs lg:text-sm font-belda text-ternary/70 mb-1 md:mb-3 lg:mb-4 uppercase tracking-[2px] md:tracking-[3px]">
          testimonials
        </h1>
        <h1 className="text-2xl md:text-3xl lg:text-5xl leading-[41px] lg:leading-[62px] font-belda font-semibold">
          Public Figures & Feedback
        </h1>
      </div>
    </div>
  );
};

export default Testimonials;
