import React, { useState } from "react";
import { HiMiniViewfinderCircle } from "react-icons/hi2";
import img1 from "../../assets/project1.webp";
import img2 from "../../assets/project2.webp";
import img3 from "../../assets/project3.webp";
import img4 from "../../assets/project4.webp";
import img5 from "../../assets/project5.webp"

const images = [
  {
    id: 1,
    src: img4,
    alt: "project 1",
  },
  {
    id: 2,
    src: img2,
    alt: "project 2",
  },
  {
    id: 3,
    src: img3,
    alt: "project 3",
  },
  {
    id: 4,
    src: img1,
    alt: "project 1",
  },
  {
    id: 5,
    src: img5,
    alt: "project 2",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-10 bg-pattern sm:py-16 lg:py-24">
      <div className="lg:mx-20 mx-5">
        <div className="flex flex-col gap-3 items-center justify-center">
          <h2 className="lg:text-6xl text-4xl title-font" data-aos="fade-down">
            Our Gallery
          </h2>
          <div className="h-[4px] w-[100px] bg-amber-950 rounded"></div>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {images.map((image) => (
            <div key={image.id} className="group relative">
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-64 object-cover rounded-lg transition-transform duration-300 transform scale-100 group-hover:scale-105"
              />
              <div className="absolute group inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => setSelectedImage(image)}
                  className="border-4 bg-[#0000007a] border-white cursor-pointer text-gray-800 p-2 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <HiMiniViewfinderCircle className="text-4xl text-green-600 group-hover:rotate-180 transition-all duration-500" />
                </button>
              </div>
            </div>
          ))}
        </div>
        {selectedImage && (
          <div className="fixed top-24 inset-0 flex items-center justify-center bg-[#1f1e1e49] bg-opacity-75">
            <div className="relative p-2 bg-white rounded-lg max-w-lg">
              <button
                className="absolute cursor-pointer top-2 right-2 text-xl text-white bg-green-600 rounded-s-lg px-3 py-1"
                onClick={() => setSelectedImage(null)}
              >
                &times;
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto object-cover rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
