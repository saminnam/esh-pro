import React from "react";

const OurSkills = () => {
  const skillsData = [
    {
      title: "Meticulously executing construction as per customer needs.",
      icon: <i class="flaticon flaticon-needs"></i>,
    },
    {
      title:
        "Drafting the best construction plan that paves the way to elevate enduring structures.",
      icon: <i class="flaticon flaticon-reliability"></i>,
    },
    {
      title:
        "Ensuring structural integrity through precise engineering practices.",
      icon: <i class="flaticon flaticon-building-plan"></i>,
    },
    {
      title:
        "Providing more importance to time, manpower, and materials for the best delivery.",
      icon: <i class="flaticon flaticon-best-product"></i>,
    },
  ];

  return (
    <section className="py-10 relative bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 items-center justify-center md:mb-15 mb-10">
          <h2 className="lg:text-6xl text-4xl title-font" data-aos="fade-down">
            Our Skills
          </h2>
          <div className="h-[4px] w-[100px] bg-amber-950 rounded"></div>
        </div>
        <div className="px-5 py-8 mt-12 rounded-lg shadow-lg lg:mt-20 lg:p-16">
          <div className="grid grid-cols-1 gap-12 lg:gap-16 sm:grid-cols-2">
            {skillsData.map((skill, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-16 h-16 text-6xl text-[#42190F]">
                  {skill.icon}
                </div>
                <div className="ml-5">
                  <h3
                    className="text-lg font-semibold text-gray-500"
                    data-aos="fade-up"
                  >
                    {skill.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSkills;
