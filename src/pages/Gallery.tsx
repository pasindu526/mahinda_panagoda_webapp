import React, { useEffect } from "react";
import HeroSection from "../components/gallery/HeroSection";
import ImageCollection from "../components/gallery/ImageCollection";
import VideoCollection from "../components/gallery/VideoCollection";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const Gallery: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <section className="w-full">
        <Navbar />
      </section>
      <section className="w-full lg:mb-30 mb-20">
        <HeroSection />
      </section>

      <section className="md:w-5/6 mx-auto w-11/12 lg:mb-20 mb-20 ">
        <ImageCollection />
      </section>

      <section className="md:w-5/6 mx-auto w-11/12 lg:mb-30 mb-20 ">
        <VideoCollection />
      </section>

      <section className="w-full">
        <Footer />
      </section>
    </div>
  );
};

export default Gallery;
