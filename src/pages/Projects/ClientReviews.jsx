import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { IoStar } from "react-icons/io5";
import { EffectFlip, Pagination, Navigation, Autoplay } from "swiper/modules";

const reviews = [
  {
    id: 1,
    name: "Supriya",
    rating: 4,
    review:
      "Eshwar Constructions is the finest contractor in Chennai i’ve ever associated with in the city as they consciously offer the most promising Construction services in Chennai. All their services include the most forward and innovative approach.Out of our experience, we share this review as we’ve got the best construction giveaway from them.",
  },
  {
    id: 2,
    rating: 5,
    name: "Janani",
    review:
      "For an enduring lifestyle, you can trust Eshwar Construction as they effectuate the process with more innovation and flexibility infused with more trust and reliability. We were looking for a promising home builder and they seemed like a perfect match for all our expectations.",
  },
  {
    id: 3,
    rating: 5,
    name: "Maya",
    review:
      "If you are looking for a promising construction service in Chennai, trust me without any doubts approach Eshwar construction as they effectively elevate your dream construction as expected. To get your lifestyle needs aligned, get your home construction done by them  without further delays as I suggest from my experience.",
  },
];

const ClientReviews = () => {
  return (
    <section className="relative bg-[url('./assets/review-bg.webp')] bg-cover bg-no-repeat">
      <div className="absolute inset-0 bg-[#000000a6]"></div>
      <Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[EffectFlip, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 text-white">
              <div className="flex text-xl gap-1 text-yellow-500">
                {[...Array(review.rating)].map((_, index) => (
                  <IoStar key={index} />
                ))}
              </div>
              <blockquote className="max-w-lg text-lg italic font-medium text-center">
                {review.review}
              </blockquote>
              <div className="text-center text-lg font-bold font-serif text-white">
                <p>- {review.name}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ClientReviews;
