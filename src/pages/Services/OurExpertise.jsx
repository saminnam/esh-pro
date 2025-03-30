import React from "react";
import img from "../../assets/expertice.webp"

const expertiseData = [
  {
    title: "Residential Construction:",
    description:
      "We bring your dream home to life with expert craftsmanship and thoughtful design. Whether it’s a compact house or a luxury villa, we ensure high-quality construction that suits your budget and lifestyle.",
    aos: "zoom-in",
  },
  {
    title: "Commercial Construction:",
    description:
      "From office spaces to retail outlets and business centers, we specialize in creating commercial properties that are functional, aesthetically pleasing, and built for success.",
    aos: "zoom-in",
  },
  {
    title: "Renovation & Remodeling:",
    description:
      "Transform your existing space with our expert renovation services. Whether you need structural modifications or aesthetic upgrades, we deliver customized solutions that enhance the value and appeal of your property.",
    aos: "zoom-in",
  },
  {
    title: "Interior & Exterior Works:",
    description:
      "A well-designed space goes beyond walls and floors. We provide top-notch interior and exterior solutions that add elegance, functionality, and long-lasting appeal to your property.",
    aos: "zoom-in",
  },
];

const OurExpertise = () => {
  return (
    <section className="md:py-20 py-10 relative overflow-hidden my-10 md:px-10 px-5">
      <div className="max-w-screen-xl mx-auto container">
        <div className="flex flex-col gap-3 items-center justify-center mb-10">
          <h2
            className="lg:text-6xl text-4xl title-font"
            data-aos="fade-down-left"
          >
            Our Expertise
          </h2>
          <div className="h-[4px] w-[100px] bg-amber-950 rounded"></div>
        </div>
        <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row lg:mt-12">
          <div
            className="mr-0 md:mr-8 mb-6 lg:w-[450px] w-full md:mb-0"
            data-aos="fade-up-right"
          >
            <img
              className="w-full object-cover h-full mx-auto"
              src={img}
              alt="builder-img"
              loading="lazy"
            />
          </div>
          <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
            {expertiseData.map((item, index) => (
              <div key={index} className="w-full sm:w-1/2 mb-4 px-2">
                <div
                  className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl"
                  data-aos={item.aos}
                >
                  <h3 className="text-2xl font-bold font-serif text-md mb-6">
                    {item.title}
                  </h3>
                  <p className="text-lg text-gray-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurExpertise;
