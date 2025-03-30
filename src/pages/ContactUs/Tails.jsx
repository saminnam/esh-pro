import React from "react";
import { FiMail, FiPhone, FiClock, FiMapPin } from "react-icons/fi";

const Tails = () => {
  return (
    <section className="py-10 px-5 bg-white sm:py-16 lg:py-24">
      <div className="flex flex-col gap-3 items-center md:mb-15  mb-10">
        <h2 className="lg:text-6xl text-4xl title-font" data-aos="fade-down">
          Feel free to reach us!
        </h2>
        <div className="h-[4px] w-[100px] bg-amber-950 rounded"></div>
      </div>
      <div className="flex overflow-x-hidden md:mx-10 my-10" data-aos="fade-up">
        <div className="grid container gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <Card title="Contact" subtitle="+91 7871102041" Icon={FiPhone} />
          <Card
            title="Email"
            subtitle="eshwarconstruction555@gmail.com"
            Icon={FiMail}
          />
          <Card
            title="Time"
            subtitle="Mon - Sat 09.00 AM - 06.00 PM Sun 09.00 AM - 02.00 PM"
            Icon={FiClock}
          />
          <Card
            title="Location"
            subtitle="3/36, Thirumangai Alwar Street NH-1, Maraimalai Nagar, Chengalpattu District: 603209"
            Icon={FiMapPin}
          />
        </div>
      </div>
    </section>
  );
};

const Card = ({ title, subtitle, Icon }) => {
  return (
    <a className="w-full p-4 rounded border-[1px] border-slate-200 relative overflow-hidden group bg-white">
      <div className="absolute inset-0 bg-gradient-to-r from-[#EECB62] to-[#f8cc49] translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
      <Icon className="absolute z-10 -top-10 -right-12 text-9xl text-slate-100 group-hover:text-[#eecb62] group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-4xl text-[#f8ba00] group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-gray-600 group-hover:text-white relative z-10 duration-300">
        {subtitle}
      </p>
    </a>
  );
};

export default Tails;
