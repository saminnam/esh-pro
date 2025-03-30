import React from "react";
import { Link } from "react-router-dom";
import { GrStatusGood } from "react-icons/gr";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import img1 from "../../assets/about-pg-img1.webp";
import img2 from "../../assets/about-pg-img2.webp";
import animate from "../../assets/animate-img3.png";

const Intro = () => {
  const slides = [
    {
      title: "Proven Track Record",
      description:
        "With a vast home construction network and expertise, we have successfully completed over 400+ projects in the city and continue to expand.",
    },
    {
      title: "Commitment to Excellence",
      description:
        "Our dedication, quality craftsmanship, and a highly skilled team drive every project to success.",
    },
    {
      title: "Seamless Construction Process",
      description:
        "We specialize in delivering a smooth, efficient construction experience while excelling in key areas to bring your dream project to life.",
    },
  ];
  return (
    <section className="py-10 relative bg-gray-50 overflow-hidden sm:py-16 lg:py-24">
      <div className="flex flex-col gap-3 items-center justify-center">
        <h2 className="lg:text-6xl text-4xl title-font" data-aos="fade-down">
          About Eshwar
        </h2>
        <div className="h-[4px] w-[100px] bg-amber-950 rounded"></div>
      </div>
      <div className="px-4 mt-24 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-y-10 md:grid-cols-2 md:gap-x-10">
          <div className="relative grid grid-cols-2 gap-6 mt-10 md:mt-0">
            <div
              className="overflow-hidden aspect-w-3 aspect-h-4"
              data-aos="flip-left"
              data-aos-duration="1500"
            >
              <img
                className="object-cover object-top origin-top scale-150"
                src={img1}
                alt="img"
                loading="lazy"
              />
            </div>
            <div className="relative">
              <div
                className="h-full overflow-hidden aspect-w-3 aspect-h-4"
                data-aos="zoom-in-up"
                data-aos-duration="1500"
              >
                <img
                  className="object-cover scale-150 lg:origin-bottom-right"
                  src={img2}
                  alt="img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div>
            <h2
              className="mb-5 text-3xl font-bold font-serif text-amber-950 sm:text-[40px]/[48px]"
              data-aos="fade-up"
            >
              20 years back from now
            </h2>
            <p
              className="mb-2 text-lg leading-relaxed text-gray-500"
              data-aos="fade-up"
            >
              Eshwar constructions was established with a vision of developing
              and delivering the most promisable housing and commercial building
              solutions that are set and elevated with noble standards with
              undeniable innovation and precision just like other construction
              contractors in Chennai.
            </p>
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              className="w-full mt-5 mb-8 overflow-hidden custom-swiper"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="p-5 border border-gray-200 rounded-lg bg-white text-gray-600">
                    <div className="flex items-center gap-2">
                      <GrStatusGood className="text-[#00A63E] text-xl" />
                      <b className="block text-lg text-gray-800">
                        {slide.title}
                      </b>
                    </div>
                    <p className="mt-2 text-[17px] leading-relaxed">
                      {slide.description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <Link to="/contact">
              <button className="primary-btn w-[170px] hover:bg-transparent hover:text-[#00A63E] border transition-all duration-300 border-[#00A63E] cursor-pointer text-white bg-[#00A63E]">
                Reach Us
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-[400px]">
        <img
          src={animate}
          alt="img"
          className="w-full h-full object-cover filter contrast-0 invert-25"
        />
      </div>
    </section>
  );
};

export default Intro;
