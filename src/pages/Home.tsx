import React from "react";
import Navbar from "../components/common/Navbar";
import Hero from "../components/home/Hero";
import KeyServices from "../components/home/KeyServices";
import Footer from "../components/common/Footer";
import BuySteps from "../components/home/BuySteps";
import Consultation from "../components/home/Consultation";
import Packages from "../components/home/Packages";
import Testimonials from "../components/home/Testimonials";

const Home: React.FC = () => {
  return (
    <div>
      <section className="w-full">
        <Navbar />
      </section>

      <section className="w-full">
        <Hero />
      </section>

      <section className="w-11/12 lg:w-5/6 mx-auto mt-20 lg:mt-30">
        <KeyServices />
      </section>

      <section className="w-full bg-[#F6F6F6] py-14 mt-20 lg:mt-30">
        <BuySteps />
      </section>

      <section className="w-11/12 lg:w-5/6 mx-auto mt-20 lg:mt-30">
        <Packages />
      </section>

      <section className="w-full bg-gradient-to-r from-black from-0% to-secondary py-14 mt-20 lg:mt-30">
        <Consultation />
      </section>

      <section className="w-11/12 lg:w-5/6 mx-auto mt-20 lg:mt-30">
        <Testimonials />
      </section>

      <section className="w-full mt-20 lg:mt-30">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
