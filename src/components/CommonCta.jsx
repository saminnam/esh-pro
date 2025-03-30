import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/cta-person.webp";

const CommonCta = () => {
  return (
    <section className="mt-32">
      <div className="relative py-10 bg-[#417642] h-[300px] bg-no-repeat bg-cover bg-center">
        <div className="absolute w-full bottom-0 mx-auto px-4">
          <div className="container mx-auto ">
            <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1">
              <div>
                <div className="lg:block lge:block md:hidden mdsm:hidden sm:hidden">
                  <img
                    src={img}
                    alt="person"
                    className="h-[500px] mx-auto"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="col-span-2 relative ">
                <div className="absolute bottom-0 py-10">
                  <h3 className="text-[#c7b130] font-serif relative after:bg-[#fff] after:w-[10%] text-4xl font-semibold   pb-4">
                    Build with Confidence, Crafted for Excellence!
                  </h3>
                  <h4 className=" text-[#fff]  text-[20px] ">
                    Expert residential, commercial, and renovation services with
                    top-quality materials, skilled professionals, and on-time
                    delivery.
                  </h4>
                  <Link to={"/contact"}>
                    <button className="text-white hover:text-[#c7b130] cursor-pointer transition-all duration-300 border-[#c7b130] bg-[#c7b130] rounded-lg py-3 px-10 mt-4 hover:bg-[#fff] ">
                      Contact Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommonCta;
