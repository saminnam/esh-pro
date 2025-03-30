import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const OurClients = () => {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24 bg-[url('')] overflow-hidden bg-no-repeat bg-fixed bg-cover">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 items-center justify-center">
          <h2 className="lg:text-6xl text-4xl title-font" data-aos="fade-down">
            Our Trusted Client's
          </h2>
          <div className="h-[4px] w-[100px] bg-amber-950 rounded"></div>
        </div>
        <div className="slider-container mt-24">
          <Slider
            {...settings}
            className="grid items-center grid-cols-2 gap-10 mt-12  md:grid-cols-4 sm:gap-y-16"
          >
            <div>
              <img
                className="object-contain w-auto mx-auto h-14"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/2/logo-1.png"
                alt="client-img"
                loading="lazy"
              />
            </div>
            <div>
              <img
                className="object-contain w-auto mx-auto h-14"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/2/logo-2.png"
                alt="client-img"
                loading="lazy"
              />
            </div>
            <div>
              <img
                className="object-contain w-auto h-10 mx-auto"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/2/logo-3.png"
                alt="client-img"
                loading="lazy"
              />
            </div>
            <div>
              <img
                className="object-contain w-auto mx-auto h-14"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/2/logo-4.png"
                alt="client-img"
                loading="lazy"
              />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
