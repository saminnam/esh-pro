import React from "react";
import Hero from "../components/Hero/Hero";
import AboutUs from "../components/AboutUs/AboutUs";
import WhyChooseUs from "../components/WhyChoosUs/WhyChooseUs";
import Cta from "../components/CallToAction/Cta";
import Testimonials from "../components/Testimonials/Testimonials";
import OurSkills from "../components/OurSkills/OurSkills";
import ServicesWeOffer from "../components/ServicesWeOffer/ServicesWeOffer";

const Home = () => {
  return (
    <main>
      <Hero />
      <AboutUs />
      <WhyChooseUs />
      <OurSkills />
      <ServicesWeOffer />
      <Cta />
      <Testimonials />
    </main>
  );
};

export default Home;
