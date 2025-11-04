import React from "react";
import Hero from "../components/Hero";
import ServicePreview from "../components/ServicePreview";
import Testimonial from "../components/Testimonial";
import AboutPreview from "../components/AboutPreview";
import Newsletter from "../components/Newsletter";

const Home = () => {

  return (
    <>
      <Hero />

      {/* About Preview */}
      <AboutPreview />

      {/* Services Preview */}
      <ServicePreview />


      {/* Testimonials */}
      <Testimonial />

      {/* Newsletter */}
      <Newsletter />
      
    </>
  );
};

export default Home;
