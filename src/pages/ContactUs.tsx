import React from "react";
import HeroSection from "../components/contact/HeroSection";
import ContactForm from "../components/contact/ContactForm";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const ContactUs: React.FC = () => {
  return (
    <div>
      <section className="w-full">
        <Navbar />
      </section>
      <section className="w-full lg:mb-30 mb-20">
        <HeroSection />
      </section>

      <section className="md:w-5/6 mx-auto w-11/12 lg:mb-30 mb-20">
        <ContactForm />
      </section>
      <section className="w-full">
        <Footer />
      </section>
    </div>
  );
};

export default ContactUs;
