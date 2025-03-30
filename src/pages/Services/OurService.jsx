import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/service-pg.webp"
import pattern from "../../assets/dots-pattern.svg"

const OurService = () => {
  return (
    <section className="py-10 overflow-hidden bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
          <div className="relative lg:mb-12">
            <img
              className="absolute -right-0 -bottom-8 xl:-bottom-12 xl:-right-4"
              src={pattern}
              alt="pattern"
              loading="lazy"
              data-aos="fade-up-right"
            />
            <div className="md:pl-12 px-5 md:pr-6 md:h-[450px]">
              <img
                className="relative rounded w-full h-full"
                src={img}
                alt="img"
                loading="lazy"
                data-aos="fade-up-left"
              />
            </div>
          </div>
          <div className="2xl:pl-16">
            <div className="flex flex-col gap-3 lg:items-start items-center justify-center md:mb-10">
              <h2
                className="lg:text-6xl text-4xl title-font"
                data-aos="fade-down"
              >
                Eshwar Construction
              </h2>
              <div className="h-[4px] w-[100px] bg-amber-950 rounded"></div>
            </div>
            <p
              className="text-xl leading-relaxed text-gray-500 mt-9 mb-10"
              data-aos="zoom-in-up"
            >
              At Eshwaran Construction, we believe in building more than just
              structure we create homes, workplaces, and spaces that stand the
              test of time. With a commitment to quality, innovation, and
              customer satisfaction, we ensure every project is a seamless
              experience from start to finish.
            </p>
            <Link to="/projects" className="w-[170px]">
              <button className="primary-btn hover:bg-transparent hover:text-[#00A63E] border transition-all duration-300 border-[#00A63E] cursor-pointer text-white bg-[#00A63E]">
                Our Projects
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurService;
