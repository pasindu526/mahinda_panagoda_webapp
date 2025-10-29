import React from "react";
import Navbar from "../components/common/Navbar";
import HeroSection from "@/components/parlours/HeroSection";
import Footer from "@/components/common/Footer";
import AllParlous from "@/components/parlours/AllParlous";

const Parlours: React.FC = () => {
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
      <section className="w-11/12 md:w-5/6 mx-auto mt-20 lg:mt-30">
        <AllParlous />
      </section>

      {/* footer */}
      <section className="w-full mt-28 lg:mt-30">
        <Footer />
      </section>
    </div>
  );
};

export default Parlours;
