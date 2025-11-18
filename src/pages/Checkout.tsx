import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "@/components/common/BlackNavbar";
import CheckoutStepper from "@/components/checkout/CheckoutStepper";
import Footer from "@/components/common/Footer";

const Checkout: React.FC = () => {
  const location = useLocation();
  const selectedPackage = location.state?.selectedPackage;
  const isPreArrangement = !!location.state?.isPreArrangement;

  // fallback: some navigate calls may embed the flag on selectedPackage itself
  const fallbackFlag = !!(
    selectedPackage &&
    (selectedPackage as { isPreArrangement?: boolean }).isPreArrangement
  );
  const effectivePreArrangement = isPreArrangement || fallbackFlag;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* navbar */}
      <section className="w-full">
        <Navbar />
      </section>

      {/* checkout stepper */}
      <section className="w-11/12 md:w-5/6 mx-auto mt-10 lg:mt-40">
        <CheckoutStepper
          selectedPackage={selectedPackage}
          isPreArrangement={effectivePreArrangement}
        />
      </section>

      {/* footer */}
      <section className="w-full mt-28 lg:mt-30">
        <Footer />
      </section>
    </div>
  );
};

export default Checkout;
