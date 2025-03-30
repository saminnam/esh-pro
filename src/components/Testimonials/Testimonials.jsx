import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoStar } from "react-icons/io5";

const testimonials = [
  {
    id: 1,
    name: "Supriya",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/91.jpg",
    feedback:
      "Eshwar Constructions is the finest contractor in Chennai i’ve ever associated with in the city as they consciously offer the most promising Construction services in Chennai. All their services include the most forward and innovative approach.Out of our experience, we share this review as we’ve got the best construction giveaway from them.",
  },
  {
    id: 2,
    rating: 5,
    name: "Janani",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    feedback:
      "For an enduring lifestyle, you can trust Eshwar Construction as they effectuate the process with more innovation and flexibility infused with more trust and reliability. We were looking for a promising home builder and they seemed like a perfect match for all our expectations.",
  },
  {
    id: 3,
    rating: 5,
    name: "Maya",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    feedback:
      "If you are looking for a promising construction service in Chennai, trust me without any doubts approach Eshwar construction as they effectively elevate your dream construction as expected. To get your lifestyle needs aligned, get your home construction done by them  without further delays as I suggest from my experience.",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    infinite: true,
    slidesToScroll: 1,
    centerPadding: "60px",
    className: "center",
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="md:py-20 py-10 overflow-hidden relative md:px-10 px-5 bg-[url('./assets/bg-testimonial.png')] bg-left bg-no-repeat bg-cover">
      <div className="absolute inset-0 bg-[#f8fafc75]"></div>
      <div className="flex flex-col gap-3 text-center items-center justify-center md:mb-15 mb-10">
        <h2 className="lg:text-6xl text-4xl title-font" data-aos="fade-down">
          What Our Client Say's
        </h2>
        <div className="h-[4px] w-[100px] bg-amber-950 rounded"></div>
      </div>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="px-4">
            <div className="relative overflow-hidden group hover:scale-105 transition-all duration-300 ease-linear bg-white shadow-lg rounded-xl p-8 text-gray-500">
              <div className="absolute top-0 left-0 w-full bg-white opacity-10 transform -skew-x-12"></div>
              <div className="relative z-10">
                <div className="text-[#e5e8eb] transition-all duration-300 ease-linear group-hover:text-[#00A63E]">
                  <svg
                    className="w-12 h-12 mb-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-[14px] font-medium mb-4 leading-[25px]">
                  {testimonial.feedback}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex text-yellow-500">
                    {[...Array(testimonial.rating)].map((_, index) => (
                      <IoStar key={index} />
                    ))}
                  </div>
                  <h4 className="font-semibold transition-all duration-300 ease-linear group-hover:text-[#00A63E]">- {testimonial.name}</h4>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
