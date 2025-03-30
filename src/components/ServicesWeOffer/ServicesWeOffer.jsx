import React from "react";
import { LuArrowBigRight } from "react-icons/lu";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const ServicesWeOffer = () => {
  const services = [
    {
      title: "House Construction",
      description:
        "We expertise in developing modern age homes integrated with futuristic innovation, branded materials, and skilled manpower to deliver with uncompromised quality.",
    },
    {
      title: "Commercial Building Construction",
      description:
        "We excel at elevating commercial buildings to match the growing pace of the business era and satisfy the best corporate space seekers.",
    },
    {
      title: "Apartment Building",
      description:
        "We hold hands with home promoters and elevate apartments that match the needs of modern and classy home seekers in town.",
    },
    {
      title: "House Renovation",
      description:
        "Recreating old to a new living space is our major mode of expertise as we curate every home with an extraordinary architectural touch.",
    },
  ];
  return (
    <section className="py-10 bg-gray-50 overflow-hidden sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 text-center items-center justify-center md:mb-15 mb-10">
          <h2 className="lg:text-6xl text-4xl title-font" data-aos="fade-down">
            Services We Offer
          </h2>
          <div className="h-[4px] w-[100px] bg-amber-950 rounded"></div>
        </div>
        <div className="flex lg:flex-row gap-8 sm:gap-16 flex-col items-center mt-10">
          <div className="space-y-3">
            <h2 className="text-4xl font-bold font-poppins" data-aos="fade-up">
              At Eshwar Constructions
            </h2>
            <p className="text-lg text-gray-500" data-aos="fade-up">
              We execute every project with a vision and integrate attributes
              that make way to make an amazing housing deal.
            </p>
            <h3 className="text-xl text-amber-900 font-bold" data-aos="fade-up">
              It has been possible by elevating lifestyles as per:
            </h3>
            <div className="my-7">
              <ul className="space-y-3">
                <li className="flex items-center gap-3" data-aos="fade-up">
                  <LuArrowBigRight className="text-amber-900  text-2xl" />
                  <span className="text-gray-600 text-[17px]">
                    Customer’s requirements and ideas.
                  </span>
                </li>
                <li className="flex items-center gap-3" data-aos="fade-up">
                  <LuArrowBigRight className="text-amber-900  text-2xl" />
                  <span className="text-gray-600 text-[17px]">
                    Secured housing investments.
                  </span>
                </li>
                <li className="flex items-center gap-3" data-aos="fade-up">
                  <LuArrowBigRight className="text-amber-900  text-2xl" />
                  <span className="text-gray-600 text-[17px]">
                    Perfected construction process.
                  </span>
                </li>
                <li className="flex items-center gap-3" data-aos="fade-up">
                  <LuArrowBigRight className="text-amber-900  text-2xl" />
                  <span className="text-gray-600 text-[17px]">
                    Precise execution and timely delivery.
                  </span>
                </li>
              </ul>
            </div>
            <p className="text-lg text-gray-500" data-aos="fade-up">
              Having these noble values we create epic lifestyle giveaways that
              includes
            </p>
          </div>
          <div className="w-full h-full max-w-[500px] mx-auto" data-aos="fade-up-right" data-aos-duration="2000">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={10}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              //   pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 1, spaceBetween: 10 },
                1024: { slidesPerView: 1, spaceBetween: 20 },
              }}
              className="mySwiper"
            >
              {services.map((service, index) => (
                <SwiperSlide key={index}>
                  <div className="h-[340px] relative bg-[url('https://t4.ftcdn.net/jpg/09/14/68/43/360_F_914684393_H1BpbfpdBgzVUYyKseFYVC5Ziu1KC3ks.jpg')] bg-no-repeat bg-cover w-full rounded-sm flex flex-col gap-2 p-4 justify-center items-center text-center">
                    <div className="bg-[#00000093] absolute inset-0"></div>
                    <span className="uppercase text-3xl text-white font-bold tracking-wide z-10">
                      {service.title}
                    </span>
                    <span className="text-lg text-white mt-2 z-10">
                      {service.description}
                    </span>
                    <Link
                      to={"/contact"}
                      className="text-white flex items-center gap-2 text-sm group z-10 mt-3 border py-2 px-3 rounded"
                    >
                      <span>Know More</span>{" "}
                      <LuArrowBigRight className="group-hover:translate-x-2 transition-all duration-300 ease-linear" />
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesWeOffer;
