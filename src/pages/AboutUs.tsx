import React from "react";
import Navbar from "../components/common/Navbar";
import HeroSection from "../components/aboutus/HeroSection";
import VisionMission from "../components/aboutus/VisionMission";
import OurStory from "../components/aboutus/OurStory";
import OurDifference from "../components/aboutus/OurDifference";
import Leadership from "../components/aboutus/Leadership";
import Footer from "../components/common/Footer";

const AboutUs: React.FC = () => {
  return (
    <div className="font-[roboto]">
      <section className="w-full">
        <Navbar />
      </section>
      <section className="w-full lg:mb-30 mb-20">
        <HeroSection />
      </section>
      <section className="w-full lg:mb-30 mb-20">
       <OurStory/>
      </section>
      <section className="w-full lg:mb-30 mb-20">
        <VisionMission />
      </section>
      <section className="w-full lg:mb-30 mb-20">
        <OurDifference/>
      </section>
       <section className="w-full lg:mb-30 mb-20">
        <Leadership/>
      </section>
         <section className="w-full ">
        <Footer/>
      </section>
    </div>
  );
};

export default AboutUs;
