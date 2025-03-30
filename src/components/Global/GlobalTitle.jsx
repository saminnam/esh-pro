import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import "animate.css";

const GlobalTitle = ({ title }) => {
  return (
    <section className="lg:py-24 h-[350px] overflow-hidden lg:px-10 py-16 px-5 bg-global-title">
      <div className="flex flex-col gap-5 h-[240px]  justify-center items-start md:items-center">
        <h2 className="text-white text-6xl font-bold font-serif animate__animated animate__fadeInDown">{title}</h2>
        <nav className="flex bg-[#00000099] px-3 py-2 rounded" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1">
            <li className="inline-flex items-center">
            <IoHomeOutline className="text-white text-lg"/>
              <Link
                to={"/"}
                className="ml-1 inline-flex text-lg font-medium text-white hover:underline md:ml-2"
              >
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2.5 text-white ">/</span>
                <a
                  href="#"
                  className="ml-1 text-lg font-medium text-white hover:underline md:ml-2"
                >
                  {title}
                </a>
              </div>
            </li>
          </ol>
        </nav>
      </div>
    </section>
  );
};

export default GlobalTitle;
