import React from "react";

const items = [
  {
    id: "1",
    url: "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg",
    title: "Adrian Paul",
    description: "COO & Co-Founder",
  },
  {
    id: "2",
    url: "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg",
    title: "Flualy Cual",
    description: "Founder & CEO",
  },
  {
    id: "3",
    url: "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg",
    title: "Naymur Rahman",
    description: "CTO & Co-Founder",
  },
];

const Team = () => {
  return (
    <section className="overflow-hidden bg-gray-50 md:py-20 py-10 md:px-10 px-5">
      <div className="container mx-auto">
        <div className="flex flex-col gap-3 items-center justify-center md:mb-10">
          <h2 className="lg:text-6xl text-4xl title-font" data-aos="fade-down">
            Meet Our Team
          </h2>
          <div className="h-[4px] w-[100px] bg-amber-950 rounded"></div>
        </div>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
        <div className="group flex max-md:flex-col justify-center gap-2 mt-10">
          {items.map((item) => (
            <article
              key={item.id}
              className="group/article relative w-full rounded-xl overflow-hidden md:group-hover:[&:not(:hover)]:w-[20%] md:group-focus-within:[&:not(:focus-within):not(:hover)]:w-[20%] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.15)] before:absolute before:inset-x-0 before:bottom-0 before:h-1/3 before:bg-gradient-to-t before:from-black/50 before:transition-opacity md:before:opacity-0 md:hover:before:opacity-100 focus-within:before:opacity-100 after:opacity-0 md:group-hover:[&:not(:hover)]:after:opacity-100 md:group-focus-within:[&:not(:focus-within):not(:hover)]:after:opacity-100 after:absolute after:inset-0 after:bg-white/30 after:backdrop-blur after:rounded-lg after:transition-all focus-within:ring focus-within:ring-indigo-300"
            >
              <a
                className="absolute inset-0 text-white z-10 p-3 flex flex-col justify-end"
                href="#0"
              >
                <h1 className="text-xl font-medium md:whitespace-nowrap md:truncate md:opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 md:translate-y-2 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] group-hover/article:delay-300 group-focus-within/article:delay-300">
                  {item.title}
                </h1>
                <span className="text-lg font-medium md:whitespace-nowrap md:truncate md:opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 md:translate-y-2 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] group-hover/article:delay-500 group-focus-within/article:delay-500">
                  {item.description}
                </span>
              </a>
              <img
                className="object-cover h-72 md:h-[420px] w-full"
                src={item.url}
                alt={item.title}
                loading="lazy"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
