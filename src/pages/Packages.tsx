import React from "react";
import Navbar from "../components/common/Navbar";
import HeroSection from "../components/packages/HeroSection";
import AllPackages from "../components/packages/AllPackages";
import Footer from "../components/common/Footer";

const Packages: React.FC = () => {
  return (
    <div>
      {/* navbar */}
      <section className="w-full">
        <Navbar />
      </section>

      {/* hero */}
      <section className="w-full">
        <HeroSection />
      </section>

      {/* all packages with filter options */}
      <section className="w-11/12 md:w-5/6 mx-auto mt-5">
        <AllPackages />
      </section>

      {/* footer */}
      <section className="w-full mt-14 lg:mt-16">
        <Footer />
      </section>
    </div>
  );
};

export default Packages;
