import React from "react";
import { Link } from "react-router-dom";
import cta from "../../assets/cta-bg.jpg";

const Cta = () => {
  return (
    <section className="relative py-10 overflow-hidden bg-black sm:py-16 lg:py-18 xl:py-24">
      <div className="absolute inset-0">
        <img
          className="object-cover w-full h-full"
          src={cta}
          alt="cta-bg"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 hidden bg-gradient-to-r md:block from-[#4e271b] to-transparent"></div>
      <div className="absolute inset-0 block bg-black/60 md:hidden"></div>
      <div
        className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl"
        data-aos="fade-up-right"
      >
        <div className="text-center md:w-[580px] w-full md:text-left">
          <h2
            className="text-2xl font-bold title-font leading-tight text-white sm:text-3xl lg:text-5xl"
            data-aos="fade-up"
          >
            Build with Confidence, Crafted for Excellence!
          </h2>
          <p className="mt-4 text-base text-gray-200" data-aos="fade-up">
            Expert residential, commercial, and renovation services with
            top-quality materials, skilled professionals, and on-time delivery.
          </p>
        </div>
        <div className="mt-8 rounded overflow-hidden">
          <Link to="/contact" className="hidden lg:block">
            <button className="py-2 primary-btn px-4 hover:bg-transparent hover:text-green-600 border transition-all duration-300 border-green-600 cursor-pointer text-white bg-green-600">
              Get to know us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
