import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

const Quotation = ({ showModal, setShowModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const dataSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");

    setFormData({
      name: "",
      email: "",
      number: "",
      message: "",
    });

    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-[#00000033] bg-opacity-50 z-50 transition-opacity duration-500 ease-in-out">
          <div className="text-4xl text-white fixed right-8 top-5 cursor-pointer">
            <IoClose onClick={() => setShowModal(false)} />
          </div>
          <div className="py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-[#55332a] to-[#4A251C] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 rounded-sm"></div>
              <div className="relative px-6 pt-10 pb-5 bg-white shadow-sm rounded-sm w-[300px] sm:w-[350px] md:w-[450px]">
                <div className="max-w-md mx-auto">
                  <div className="flex flex-col gap-2 items-center justify-center">
                    <h1 className="text-2xl font-semibold text-center">
                      Get Your Quote
                    </h1>
                    <div className="border-b-4 border-dashed w-[70px]"></div>
                  </div>
                  <div className="divide-y divide-gray-200">
                    <form onSubmit={dataSubmit}>
                      <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                        <div className="relative">
                          <input
                            autoComplete="off"
                            id="name"
                            name="name"
                            required
                            type="text"
                            pattern="^[A-Za-z\s]{3,30}$"
                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                          />
                          <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                            Name
                          </label>
                        </div>
                        <div className="relative">
                          <input
                            autoComplete="off"
                            id="email"
                            name="email"
                            type="email"
                            required
                            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                          />
                          <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                            Email
                          </label>
                        </div>
                        <div className="relative">
                          <input
                            autoComplete="off"
                            id="number"
                            name="number"
                            type="tel"
                            required
                            pattern="^[0-9]{10}$"
                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none"
                            placeholder="Enter your number"
                            value={formData.number}
                            onChange={handleChange}
                          />
                          <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                            Phone Number
                          </label>
                        </div>
                        <div className="relative">
                          <textarea
                            autoComplete="off"
                            id="message"
                            name="message"
                            required
                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none"
                            placeholder="Enter your message"
                            value={formData.message}
                            onChange={handleChange}
                          />
                          <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                            Message
                          </label>
                        </div>
                        <div className="flex justify-center items-center">
                          <button
                            type="submit"
                            className="py-2 rounded px-6 hover:bg-transparent hover:text-green-600 border transition-all duration-300 border-green-600 cursor-pointer text-white bg-green-600"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Quotation;
