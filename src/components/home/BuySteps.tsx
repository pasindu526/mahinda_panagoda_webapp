import React from "react";

import step1 from "../../assets/icon/step-1.svg";
import step2 from "../../assets/icon/step-2.svg";
import step3 from "../../assets/icon/step-3.svg";
import step4 from "../../assets/icon/step-4.svg";

const BuySteps: React.FC = () => {
  return (
    <div className="w-11/12 lg:w-5/6 mx-auto flex flex-col gap-6 lg:gap-10">
      {/* heading */}
      <div className="text-center">
        <h1 className="text-xs lg:text-sm font-belda text-ternary/70 mb-1 md:mb-3 lg:mb-4 uppercase tracking-[2px] md:tracking-[3px]">
          Simple Steps
        </h1>
        <h1 className="text-2xl md:text-3xl lg:text-5xl leading-[41px] lg:leading-[62px] font-belda font-semibold">
          How to Buy Package
        </h1>
      </div>

      {/* steps card */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 lg:gap-24">
        <div className="flex flex-col py-4 px-4 lg:px-0 gap-4 text-center items-center justify-start">
          <img src={step1} />
          <div className="space-y-2 md:space-y-2.5">
            <h1 className="text-lg leading-6 font-semibold">
              1. Browse Packages
            </h1>
            <p className="text-sm lg:text-base text-ternary font-light">
              Explore our Standard, Superior, VIP, and Platinum options.
            </p>
          </div>
        </div>
        <div className="flex flex-col py-4 px-4 lg:px-0 gap-4 text-center items-center justify-start">
          <img src={step2} />
          <div className="space-y-2 md:space-y-2.5">
            <h1 className="text-lg leading-6 font-semibold">
              2. Select a Package
            </h1>
            <p className="text-sm lg:text-base text-ternary font-light">
              Pick the service that best matches your needs.
            </p>
          </div>
        </div>
        <div className="flex flex-col py-4 px-4 lg:px-0 gap-4 text-center items-center justify-start">
          <img src={step3} />
          <div className="space-y-2 md:space-y-2.5">
            <h1 className="text-lg leading-6 font-semibold">
              3. Booking & Payment
            </h1>
            <p className="text-sm lg:text-base text-ternary font-light">
              Confirm your choice with the advance or full payment.
            </p>
          </div>
        </div>
        <div className="flex flex-col py-4 px-4 lg:px-0 gap-4 text-center items-center justify-start">
          <img src={step4} />
          <div className="space-y-2 md:space-y-2.5">
            <h1 className="text-lg leading-6 font-semibold">
              4. Need Help? Contact Us
            </h1>
            <p className="text-sm lg:text-base text-ternary font-light">
              Reach us anytime for guidance or clarifications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuySteps;
