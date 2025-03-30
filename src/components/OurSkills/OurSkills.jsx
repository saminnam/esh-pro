import React from "react";
import { FaHardHat, FaDraftingCompass, FaClock } from "react-icons/fa";
import img from "../../assets/different.webp";
import animate from "../../assets/animate-img1.webp"


const OurSkills = () => {
  return (
    <section className="md:py-20 relative overflow-hidden py-10 md:px-10 px-5 bg-[url('https://thewebmax.org/consza/images/background/bg-7.jpg')] bg-cover bg-no-repeat">
      <div className="flex flex-col gap-3 text-center items-center justify-center">
        <h2 className="lg:text-6xl text-4xl title-font" data-aos="fade-down">
          What Makes Us Different!
        </h2>
        <div className="h-[4px] w-[100px] bg-amber-950 rounded"></div>
      </div>
      <div className="mx-auto w-full max-w-7xl pt-16 md:px-8 md:pt-20">
        <div className="flex flex-col gap-8 sm:gap-16 lg:flex-row-reverse">
          <div className="">
            <ul className="">
              <li className="text-left mb-10">
                <div className="flex flex-row items-start mb-5">
                  <div
                    className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-[#411B10] text-white border-4 border-white text-xl font-semibold"
                    data-aos="fade-right"
                  >
                    <FaHardHat size={30} />
                  </div>
                  <div
                    className="bg-gray-100 p-5 px-10 w-full flex items-center"
                    data-aos="fade-up"
                  >
                    <h4 className="text-md leading-6 font-medium text-gray-900">
                      Eshwar construction captures your lifestyle needs and
                      consciously works on it!
                    </h4>
                  </div>
                </div>
                <div className="flex flex-row items-start">
                  <div
                    className="bg-indigo-100 p-5 px-10 w-full flex items-center"
                    data-aos="fade-up"
                  >
                    <p className="text-gray-700 text-sm">
                      We always focus on elevating and delivering your dreams as
                      a captivating lifestyle with the most demanded
                      construction techniques in a way that deeply matches with
                      your housing expectations!
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-[#411B10] text-white border-4 border-white text-xl font-semibold"></div>
                </div>
              </li>
              <li className="text-left mb-10">
                <div className="flex flex-row items-start mb-5">
                  <div
                    className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-[#411B10] text-white border-4 border-white text-xl font-semibold"
                    data-aos="fade-right"
                  >
                    <FaDraftingCompass size={30} />
                  </div>
                  <div
                    className="bg-gray-100 p-5 px-10 w-full flex items-center"
                    data-aos="fade-up"
                  >
                    <h4 className="text-md leading-6 font-medium text-gray-900">
                      We plan, prioritize and proceed to make every construction
                      with precision.
                    </h4>
                  </div>
                </div>
                <div className="flex flex-row items-start">
                  <div
                    className="bg-indigo-100 p-5 px-10 w-full flex items-center"
                    data-aos="fade-up"
                  >
                    <p className="text-gray-700 text-sm">
                      As a construction contractor, we draft the best housing
                      plan and prioritize the operations with timely updates and
                      proceed with effective construction practices with an
                      innovative and customer centric approach.
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-[#411B10] text-white border-4 border-white text-xl font-semibold"></div>
                </div>
              </li>
              <li className="text-left mb-10">
                <div className="flex flex-row items-start mb-5">
                  <div
                    className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-[#411B10] text-white border-4 border-white text-xl font-semibold"
                    data-aos="fade-right"
                  >
                    <FaClock size={30} />
                  </div>
                  <div
                    className="bg-gray-100 p-5 px-10 w-full flex items-center"
                    data-aos="fade-up"
                  >
                    <h4 className="text-md leading-6 font-medium text-gray-900">
                      Effectuates every construction process and ensures a
                      timely delivery!
                    </h4>
                  </div>
                </div>
                <div className="flex flex-row items-start">
                  <div
                    className="bg-indigo-100 p-5 px-10 w-full flex items-center"
                    data-aos="fade-up"
                  >
                    <p className="text-gray-700 text-sm">
                      We consciously plan and execute every construction plan
                      with required material, manpower and alternatives to
                      optimize time and money. This in turn makes way to derive
                      an effective and timely delivery as per customer
                      requirements.
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-[#411B10] text-white border-4 border-white text-xl font-semibold"></div>
                </div>
              </li>
            </ul>
          </div>
          <img
            src={img}
            alt="img"
            loading="lazy"
            className="h-[500px] flex-1 lg:max-w-lg object-cover"
          />
        </div>
      </div>
      <div className="md:block hidden absolute bottom-10 left-5 shake w-[250px]">
        <img src={animate} alt="img" loading="lazy" className="w-full h-full object-cover filter contrast-0 invert-50"/>
      </div>
    </section>
  );
};

export default OurSkills;
