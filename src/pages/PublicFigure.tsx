import React from "react";
import HeroSection from "../components/publicfigures/HeroSection";
import PublicFigures from "../components/publicfigures/CardSection";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const PublicFigure: React.FC = () => {
  return (
    <div className="font-[roboto]">
      <section className="w-full bg-amber-700">
        <Navbar/>
      </section>
      <section className="w-full lg:mb-30 mb-20">
        <HeroSection />
      </section>

      <section className="md:w-5/6 mx-auto w-11/12 lg:mb-30 mb-20 ">
        <PublicFigures />
      </section>

      <section className="w-full">
        <Footer/>
      </section>
    </div>
  );
};

export default PublicFigure;
