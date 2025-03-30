import React from "react";
import { LuArrowBigRight } from "react-icons/lu";

const HowWeWork = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="lg:h-[450px] md:h-[960px] sm:h-[1410px] h-[1750px] bg-fixed  bg-center bg-[url('./assets/construction-bg.webp')] bg-cover bg-no-repeat w-full">
        <div className="bg-[#00000060] lg:h-[450px] md:h-[960px] sm:h-[1410px] h-[1750px] absolute inset-0"></div>
        <div className="flex absolute top-14 right-0 left-0 flex-col gap-3 items-center justify-center md:mb-15 mb-10">
          <h2
            className="lg:text-6xl text-4xl title-font text-white"
            data-aos="fade-down"
          >
            How We Work
          </h2>
          <div className="h-[4px] w-[100px] bg-amber-950 rounded"></div>
        </div>
      </div>
      <div className="md:py-20 py-10 my-10 md:px-10 px-5">
        <div className="container mx-auto overflow-hidden">
          <div className="absolute top-48 md:bottom-0 md:px-10 px-5 left-0 right-0 w-full">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 justify-center w-full md:gap-[20px] gap-[95px] items-center">
              <div className="p-5 group relative max-width-[650px] h-full w-auto bg-white hover:bg-[url('./assets/card-pattern.webp')] bg-cover bg-no-repeat transition-all duration-300 ease-linear flex flex-col gap-16 items-center border border-gray-100 shadow-lg">
                <div className="space-y-5 mt-8">
                  <h4
                    className="text-2xl md:text-3xl text-[#00A63E] font-bold font-serif uppercase"
                    data-aos="fade-down"
                  >
                    Our Expertise
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3" data-aos="fade-up">
                      <LuArrowBigRight className="text-amber-900  text-2xl" />
                      <span className="text-gray-600 text-[17px]">
                        Customer Centric approach.
                      </span>
                    </li>
                    <li className="flex items-center gap-3" data-aos="fade-up">
                      <LuArrowBigRight className="text-amber-900  text-2xl" />
                      <span className="text-gray-600 text-[17px]">
                        Captivating designs and construction.
                      </span>
                    </li>
                    <li className="flex items-center gap-3" data-aos="fade-up">
                      <LuArrowBigRight className="text-amber-900  text-2xl" />
                      <span className="text-gray-600 text-[17px]">
                        Customization and home renovation.
                      </span>
                    </li>
                    <li className="flex items-center gap-3" data-aos="fade-up">
                      <LuArrowBigRight className="text-amber-900  text-2xl" />
                      <span className="text-gray-600 text-[17px]">
                        Commercial construction.
                      </span>
                    </li>
                    <li className="flex items-center gap-3" data-aos="fade-up">
                      <LuArrowBigRight className="text-amber-900  text-2xl" />
                      <span className="text-gray-600 text-[17px]">
                        Captivating execution and delivery.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="text-gray-200 text-7xl group-hover:scale-105 transition-all duration-300 ease-linear group-hover:text-[#00A63E] rounded">
                  <i class="flaticon flaticon-experience"></i>
                </div>
              </div>
              <div className="p-5 group relative max-width-[650px] h-full w-auto bg-[url('./assets/card-pattern.webp')] bg-cover bg-no-repeat transition-all duration-300 ease-linear flex flex-col gap-16 items-center border border-gray-100 shadow-lg">
                <div className="space-y-5 mt-8 px-6">
                  <h4
                    className="text-2xl md:text-3xl text-[#00A63E] font-bold font-serif uppercase"
                    data-aos="fade-down"
                  >
                    Our progress
                  </h4>
                  <p
                    className="text-[17px] text-justify text-gray-500 leading-[28px] md:leading-[32px]"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
                    At Eshwar Constructions, we aspire to bring about structures
                    and homes that offer a progressive future with a premium
                    architecture and innovative executions that set us apart
                    from other construction companies in Chennai.
                  </p>
                </div>
                <div className="text-gray-200 text-7xl group-hover:scale-105 transition-all duration-300 ease-linear group-hover:text-[#00A63E] rounded">
                  <i class="flaticon flaticon-gears"></i>
                </div>
              </div>
              <div className="p-5 group relative max-width-[650px] h-full w-auto hover:bg-[url('./assets/card-pattern.webp')] bg-cover bg-no-repeat transition-all duration-300 ease-linear flex flex-col gap-16 items-center border bg-white border-gray-100 shadow-lg">
                <div className="space-y-5 mt-8 px-6">
                  <h4
                    className="text-2xl md:text-3xl text-[#00A63E] font-bold font-serif uppercase"
                    data-aos="fade-down"
                  >
                    Our efforts
                  </h4>
                  <p
                    className="text-[17px] text-justify text-gray-500 leading-[28px] md:leading-[28px]"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
                    We aspire and integrate modern architectural practices with
                    standard and promising quality and innovation in order to
                    elevate your dream lifestyle with effective practices that
                    aligns the ideology of other construction contractors in
                    Chennai.
                  </p>
                </div>
                <div className="text-gray-200 text-7xl group-hover:scale-105 transition-all duration-300 ease-linear group-hover:text-[#00A63E] rounded">
                  <i class="flaticon flaticon-hard-work"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
