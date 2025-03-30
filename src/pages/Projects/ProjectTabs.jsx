import React, { useState } from "react";
import ClientReviews from "./ClientReviews";
import img1 from "../../assets/project1.webp";
import img2 from "../../assets/project2.webp";
import img3 from "../../assets/project3.webp";
import img4 from "../../assets/project4.webp";
import img5 from "../../assets/project5.webp";
import img6 from "../../assets/coming-soon.png";

const projectsData = [
  {
    category: "All Projects",
    images: [img4, img2, img3, img1, img5],
  },
  {
    category: "Completed Projects",
    images: [img4, img2, img3, img1, img5],
  },
  {
    category: "Ongoing Projects",
    images: [
      img6
    ],
  },
  {
    category: "Upcoming Projects",
    images: [
      img6
    ],
  },
];

const ProjectTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [fade, setFade] = useState(false);

  const handleTabClick = (index) => {
    setFade(true);
    setTimeout(() => {
      setActiveTab(index);
      setFade(false);
    }, 300);
  };

  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="flex flex-col gap-3 items-center justify-center">
        <h2 className="lg:text-6xl text-4xl title-font" data-aos="fade-down">
          Our Best Projects
        </h2>
        <div className="h-[4px] w-[100px] bg-amber-950 rounded"></div>
      </div>
      <div className="mt-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex lg:flex-row flex-col justify-center lg:gap-5 gap-10">
        {/* Vertical Tabs */}
        <div>
          <div className="flex flex-col gap-10 lg:sticky lg:top-28">
            <div className="bg-white w-full">
              <div className="flex flex-col space-y-3">
                {projectsData.map((project, index) => (
                  <button
                    key={index}
                    onClick={() => handleTabClick(index)}
                    className={`py-3 cursor-pointer px-5 text-left text-lg font-semibold border-l-4 transition-all duration-300 ${
                      activeTab === index
                        ? "border-amber-950 text-amber-950 bg-gray-100"
                        : "border-gray-300 text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {project.category}
                  </button>
                ))}
              </div>
            </div>
            <div className="md:w-[400px] bg-white w-full lg:block hidden">
              <ClientReviews />
            </div>
          </div>
        </div>
        {/* Project Images Grid */}
        <div className="md:w-3/4 lg:pl-8 w-full self-center lg:self-auto">
          <div
            key={activeTab}
            className={`grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 transition-opacity duration-500 ease-in-out ${
              fade ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
            }`}
          >
            {projectsData[activeTab].images.map((img, imgIndex) => (
              <div
                key={imgIndex}
                className="overflow-hidden group relative rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
              >
                <img
                  src={img}
                  alt="project-img"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="bg-white w-full transition-all duration-300 p-5 absolute group-hover:bottom-0 group-hover:right-0 -bottom-48 -right-48">
                  <h2 className="text-xl font-bold">Project Name</h2>
                  <p>Project location</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectTabs;
