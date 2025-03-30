import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";
import "./Header.css";
import { IoMenu, IoClose } from "react-icons/io5";
import { IoMdArrowDropright } from "react-icons/io";

const Header = ({showModal, setShowModal}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <header
      className={`px-6 py-4 bg-white border-gray-300 border flex justify-between items-center transition-all duration-300 ${
        isScrolled
          ? "fixed top-0 left-0 w-full bg-white shadow-md z-50"
          : "sticky top-10 mx-5 sm:mx-10 bg-transparent rounded z-50"
      }`}
    >
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          loading="lazy"
          className="w-[200px] h-[60px] sm:w-[250px] sm:h-[70px]"
        />
      </Link>
      {/* Desktop Menu */}
      <nav className="hidden lg:w-[445px] lg:flex gap-6 text-[15px] font-medium">
        <Link
          to="/"
          className="hover:text-green-600 transition-all duration-300"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="hover:text-green-600 transition-all duration-300"
        >
          About Us
        </Link>
        <Link
          to="/services"
          className="hover:text-green-600 transition-all duration-300"
        >
          Services
        </Link>
        <Link
          to="/projects"
          className="hover:text-green-600 transition-all duration-300"
        >
          Projects
        </Link>
        <Link
          to="/contact"
          className="hover:text-green-600 transition-all duration-300"
        >
          Contact Us
        </Link>
      </nav>
      {/* Contact Button (Visible on all screens) */}
      <div className="hidden lg:block" onClick={() => setShowModal(true)}>
        <button className="py-2 primary-btn px-4 hover:bg-transparent hover:text-green-600 border transition-all duration-300 border-green-600 cursor-pointer text-white bg-green-600">
          Get Quote
        </button>
      </div>
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-2xl cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <IoClose /> : <IoMenu />}
      </button>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`z-50 border border-gray-200 absolute left-0 top-20 transition-transform duration-300 w-full bg-white shadow-md p-5 flex flex-col gap-5 lg:hidden ${
            isMenuOpen ? " translate-x-0" : "-translate-x-full"
          }`}
        >
          <Link
            to="/"
            className="text-lg hover:text-green-600 flex justify-between items-center"
            onClick={() => setIsMenuOpen(false)}
          >
            <span>Home</span>
            <IoMdArrowDropright className="text-xl text-green-600" />
          </Link>
          <Link
            to="/about"
            className="text-lg hover:text-green-600 flex justify-between items-center"
            onClick={() => setIsMenuOpen(false)}
          >
            <span>About Us</span>
            <IoMdArrowDropright className="text-xl text-green-600" />
          </Link>
          <Link
            to="/services"
            className="text-lg hover:text-green-600 flex justify-between items-center"
            onClick={() => setIsMenuOpen(false)}
          >
            <span>Services</span>
            <IoMdArrowDropright className="text-xl text-green-600" />
          </Link>
          <Link
            to="/projects"
            className="text-lg hover:text-green-600 flex justify-between items-center"
            onClick={() => setIsMenuOpen(false)}
          >
            <span>Projects</span>
            <IoMdArrowDropright className="text-xl text-green-600" />
          </Link>
          <Link
            to="/contact"
            className="text-lg hover:text-green-600 flex justify-between items-center"
            onClick={() => setIsMenuOpen(false)}
          >
            <span>Contact Us</span>
            <IoMdArrowDropright className="text-xl text-green-600" />
          </Link>
          <div
            className="text-lg cursor-pointer hover:text-green-600 flex justify-between items-center"
            onClick={() => setIsMenuOpen(false)}
          >
            <span onClick={() => setShowModal(true)}>Get Quote</span>
            <IoMdArrowDropright className="text-xl text-green-600" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
