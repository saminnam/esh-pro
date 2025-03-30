import React from "react";
import logo from "../../assets/logo-removebg.png";
import { Link } from "react-router-dom";
import { LuPhoneCall } from "react-icons/lu";
import { IoMailOpenOutline } from "react-icons/io5";
import { TbClockCheck } from "react-icons/tb";
import { FiMapPin } from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <section className="py-10 bg-[#d0ddd0] sm:py-10 lg:pt-16 lg:pb-14">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 container">
          <div className="grid grid-cols-1 sm:grid lg:grid-cols-4 sm:grid-cols-2 mx-auto gap-4">
            <div className="">
              <Link to={"/"}>
                <img
                  className="w-[240px]"
                  src={logo}
                  alt="logo"
                  loading="lazy"
                />
              </Link>
              <p className="text-base leading-relaxed text-gray-600 mt-5">
                Expert residential, commercial, and renovation services with
                top-quality materials, skilled professionals, and on-time
                delivery.
              </p>
              <div className="social-login-icons">
                <div className="socialcontainer">
                  <div className="icon social-icon-1-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12c0 2.12.66 4.1 1.8 5.75L2 22l4.5-1.2A9.93 9.93 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.96 0-3.79-.64-5.3-1.72l-.38-.28-2.67.71.71-2.6-.29-.4A8.015 8.015 0 014 12c0-4.42 3.58-8 8-8s8 3.58 8 8-3.58 8-8 8zm4.29-5.98c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12s-.62.78-.76.94c-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.2-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.01-.37.1-.51.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.73-1.78-.19-.46-.38-.4-.54-.4-.14 0-.3 0-.46 0-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.33.98 2.49.12.16 1.7 2.62 4.12 3.68 1.44.62 2 .68 2.72.58.44-.06 1.42-.58 1.62-1.15.2-.57.2-1.07.14-1.17-.06-.1-.22-.16-.46-.28z" />
                    </svg>
                  </div>
                  <div className="social-icon-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12c0 2.12.66 4.1 1.8 5.75L2 22l4.5-1.2A9.93 9.93 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.96 0-3.79-.64-5.3-1.72l-.38-.28-2.67.71.71-2.6-.29-.4A8.015 8.015 0 014 12c0-4.42 3.58-8 8-8s8 3.58 8 8-3.58 8-8 8zm4.29-5.98c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12s-.62.78-.76.94c-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.2-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.01-.37.1-.51.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.73-1.78-.19-.46-.38-.4-.54-.4-.14 0-.3 0-.46 0-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.33.98 2.49.12.16 1.7 2.62 4.12 3.68 1.44.62 2 .68 2.72.58.44-.06 1.42-.58 1.62-1.15.2-.57.2-1.07.14-1.17-.06-.1-.22-.16-.46-.28z" />
                    </svg>
                  </div>
                </div>
                <div className="socialcontainer">
                  <div className="icon social-icon-2-2">
                    <svg
                      fill="white"
                      className="svgIcon w-8 h-8"
                      viewBox="0 0 448 512"
                      height="1.5em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                    </svg>
                  </div>
                  <div className="social-icon-2">
                    <svg
                      fill="white"
                      className="svgIcon w-8 h-8"
                      viewBox="0 0 448 512"
                      height="1.5em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                    </svg>
                  </div>
                </div>
                <div className="socialcontainer">
                  <div className="icon social-icon-3-3">
                    <svg
                      viewBox="0 0 384 512"
                      fill="white"
                      height="1.6em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"></path>
                    </svg>
                  </div>
                  <div className="social-icon-3">
                    <svg
                      viewBox="0 0 384 512"
                      fill="white"
                      height="1.6em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"></path>
                    </svg>
                  </div>
                </div>
                <div className="socialcontainer">
                  <div className="icon social-icon-4-4">
                    <svg
                      className="w-8 h-8"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21.6 7.2s-.2-1.5-.8-2.1c-.7-.8-1.5-.8-1.9-.9C16.6 4 12 4 12 4s-4.6 0-6.9.2c-.4 0-1.2 0-1.9.9-.6.6-.8 2.1-.8 2.1S2 9 2 10.7v2.6c0 1.7.2 3.5.2 3.5s.2 1.5.8 2.1c.7.8 1.5.8 1.9.9 1.4.2 6.9.2 6.9.2s4.6 0 6.9-.2c.4 0 1.2 0 1.9-.9.6-.6.8-2.1.8-2.1s.2-1.7.2-3.5v-2.6c0-1.7-.2-3.5-.2-3.5zM10 15V9l5.5 3-5.5 3z" />
                    </svg>
                  </div>
                  <div className="social-icon-4">
                    <svg
                      className="w-8 h-8"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21.6 7.2s-.2-1.5-.8-2.1c-.7-.8-1.5-.8-1.9-.9C16.6 4 12 4 12 4s-4.6 0-6.9.2c-.4 0-1.2 0-1.9.9-.6.6-.8 2.1-.8 2.1S2 9 2 10.7v2.6c0 1.7.2 3.5.2 3.5s.2 1.5.8 2.1c.7.8 1.5.8 1.9.9 1.4.2 6.9.2 6.9.2s4.6 0 6.9-.2c.4 0 1.2 0 1.9-.9.6-.6.8-2.1.8-2.1s.2-1.7.2-3.5v-2.6c0-1.7-.2-3.5-.2-3.5zM10 15V9l5.5 3-5.5 3z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:ps-16">
              <p className="text-sm font-semibold tracking-widest text-gray-600 uppercase">
                Company
              </p>
              <ul className="mt-6 space-y-4 text-gray-800">
                <li className="cursor-pointer hover:border-s-2 border-0 transition-all border-green-600">
                  <Link
                    to={"/"}
                    className="flex text-base hover:translate-x-2 hover:text-green-600 transition-all duration-200"
                  >
                    Home
                  </Link>
                </li>
                <li className="cursor-pointer hover:border-s-2 border-0 transition-all border-green-600">
                  <Link
                    to={"/about"}
                    className="flex text-base hover:translate-x-2 hover:text-green-600 transition-all duration-200"
                  >
                    About
                  </Link>
                </li>
                <li className="cursor-pointer hover:border-s-2 border-0 transition-all border-green-600">
                  <Link
                    to={"/services"}
                    className="flex text-base hover:translate-x-2 hover:text-green-600 transition-all duration-200"
                  >
                    Services
                  </Link>
                </li>
                <li className="cursor-pointer hover:border-s-2 border-0 transition-all border-green-600">
                  <Link
                    to={"/projects"}
                    className="flex text-base hover:translate-x-2 hover:text-green-600 transition-all duration-200"
                  >
                    Projects
                  </Link>
                </li>
                <li className="cursor-pointer hover:border-s-2 border-0 transition-all border-green-600">
                  <Link
                    to={"/contact"}
                    className="flex text-base hover:translate-x-2 hover:text-green-600 transition-all duration-200"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="">
              <p className="text-sm font-semibold tracking-widest text-gray-600 uppercase">
                Contact Us
              </p>
              <ul className="mt-6 space-y-4 text-gray-800">
                <li className="flex items-center gap-2 text-base">
                  <LuPhoneCall className="text-2xl text-gray-600" />
                  <span>+91 7871102041</span>
                </li>
                <li className="flex items-center gap-2 text-base">
                  <IoMailOpenOutline className="text-2xl text-gray-600" />
                  <span className="flex flex-col">
                    <span>eshwarconstruction555</span>
                    <span>@gmail.com</span>
                  </span>
                </li>
                <li className="flex items-center gap-2 text-base">
                  <TbClockCheck className="text-2xl text-gray-600" />
                  <span>09:00 AM - 06:00 PM</span>
                </li>
                <li className="flex items-center gap-2 text-base">
                  <FiMapPin className="text-2xl text-gray-600" />
                  <ul>
                    <li>3/36, Thirumangai Alwar Street</li>
                    <li>NH-1, Maraimalai Nagar,</li>
                    <li>Chengalpattu District: 603209</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3890.687718737747!2d80.02409307507357!3d12.798770987500932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDQ3JzU1LjYiTiA4MMKwMDEnMzYuMCJF!5e0!3m2!1sen!2sin!4v1743066402369!5m2!1sen!2sin"
                className="w-full h-full"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#97a897] py-5">
        <p className="text-[15px] text-center text-white">
          © Copyright 2025, All Rights Reserved. Designed & Developed by{" "}
          <a href="https://www.digitalmantraaz.com/">Digital Mantraaz</a>
        </p>
      </div>
    </>
  );
};

export default Footer;
