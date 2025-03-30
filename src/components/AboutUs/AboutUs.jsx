import React from "react";
import mission from "../../assets/mission-img.png";
import vission from "../../assets/vission.png";

const AboutUs = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="lg:h-[450px] h-[1160px] bg-fixed  bg-center bg-[url('./assets/construction-bg.webp')] bg-cover bg-no-repeat w-full">
        <div className="bg-[#00000060] lg:h-[450px] md:h-[500px] h-[1160px] absolute inset-0"></div>
        <div className="flex absolute top-14 right-0 left-0 flex-col gap-3 items-center justify-center md:mb-15 mb-10">
          <h2
            className="lg:text-6xl text-4xl title-font text-white"
            data-aos="fade-down"
          >
            What We Do ?
          </h2>
          <div className="h-[4px] w-[100px] bg-amber-950 rounded"></div>
        </div>
      </div>
      <div className="md:py-20 py-10 my-10 md:px-10 px-5">
        <div className="container mx-auto overflow-hidden">
          <div className="absolute top-48 md:bottom-0 md:px-10 px-5 left-0 right-0 w-full">
            <div className="grid lg:grid-cols-2 grid-cols-1 justify-center w-full md:gap-[20px] gap-[95px] items-center">
              <div className="md:p-10 p-5 group relative max-width-[650px] h-full w-auto bg-white flex flex-col gap-16 items-center border border-gray-100 shadow-lg">
                <div className="w-[150px]">
                  <img
                    src={mission}
                    alt="img"
                    loading="lazy"
                    className="w-[200px] absolute -top-24"
                    data-aos="zoom-out-up"
                    data-aos-duration="1500"
                  />
                </div>
                <div className="space-y-5 mt-8">
                  <h4
                    className="text-2xl md:text-3xl text-[#00A63E] font-bold font-serif uppercase"
                    data-aos="fade-down"
                  >
                    Mission
                  </h4>
                  <p
                    className="text-lg text-gray-500 leading-[28px] md:leading-[32px]"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
                    Our vision is to make dream living spaces a reality for
                    every budget. With passion and dedication, we guide our
                    clients from design finalization to the flawless completion
                    of their dream home or space, ensuring every detail meets
                    their expectations.
                  </p>
                </div>
                <div className="bg-gray-100 transition-all duration-300 group-hover:bg-[#00A63E] h-1.5 w-[60px] rounded"></div>
              </div>
              <div className="md:p-10 p-5 group relative max-width-[650px] h-full w-auto flex flex-col gap-16 items-center border bg-white border-gray-100 shadow-lg">
                <div className="w-[150px]">
                  <img
                    src={vission}
                    alt="img"
                    loading="lazy"
                    className="w-[200px] absolute -top-24"
                    data-aos="zoom-out-up"
                    data-aos-duration="1500"
                  />
                </div>
                <div className="space-y-5 mt-8">
                  <h4
                    className="text-2xl md:text-3xl text-[#00A63E] font-bold font-serif uppercase"
                    data-aos="fade-down"
                  >
                    Vission
                  </h4>
                  <p
                    className="text-lg text-gray-500 leading-[28px] md:leading-[32px]"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
                    Within the next five years, our vision is to make dream
                    homes a reality for every budget, creating spaces that blend
                    quality, comfort, and individuality. We are committed to
                    guiding our clients through every step of the journey from
                    the first design sketch to the final finishing touch with a
                    deep understanding of their aspirations.
                  </p>
                </div>
                <div className="bg-gray-100 transition-all duration-300 group-hover:bg-[#00A63E] h-1.5 w-[60px] rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
