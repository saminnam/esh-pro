import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const StatusTail = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className="py-10 bg-white sm:py-16 lg:py-24 bg-[url('./assets/status-bg.webp')] bg-cover bg-center w-full bg-fixed"
    >
      <div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-4 sm:px-8">
        {/* Total Clients */}
        <div
          className="flex items-center bg-white border border-gray-100 rounded-sm overflow-hidden shadow"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1500"
        >
          <div className="p-4 bg-green-600">
            <svg
              className="h-12 w-12 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              ></path>
            </svg>
          </div>
          <div className="px-4 text-gray-700">
            <h3 className="text-sm tracking-wider">Total Clients</h3>
            {inView && (
              <CountUp
                className="text-3xl"
                start={0}
                end={500}
                duration={3}
              />
            )}
          </div>
        </div>
        {/* Happy Clients */}
        <div
          className="flex items-center bg-white border border-gray-100 rounded-sm overflow-hidden shadow"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1500"
        >
          <div className="p-4 bg-[#421A10]">
            <svg
              className="h-12 w-12 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
              ></path>
            </svg>
          </div>
          <div className="px-4 text-gray-700">
            <h3 className="text-sm tracking-wider">Happy Clients</h3>
            {inView && (
              <CountUp className="text-3xl" start={0} end={450} duration={3} />
            )}
          </div>
        </div>
        {/* Completed Projects */}
        <div
          className="flex items-center bg-white border border-gray-100 rounded-sm overflow-hidden shadow"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1500"
        >
          <div className="p-4 bg-[#F7CA4D]">
            <svg
              className="h-12 w-12 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
              ></path>
            </svg>
          </div>
          <div className="px-4 text-gray-700">
            <h3 className="text-sm tracking-wider">Completed Projects</h3>
            {inView && (
              <CountUp className="text-3xl" start={0} end={400} duration={3} />
            )}
          </div>
        </div>
        {/* Ongoing Projects */}
        <div
          className="flex items-center bg-white border border-gray-100 rounded-sm overflow-hidden shadow"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1500"
        >
          <div className="p-4 bg-[#B78059]">
            <svg
              className="h-12 w-12 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
              ></path>
            </svg>
          </div>
          <div className="px-4 text-gray-700">
            <h3 className="text-sm tracking-wider">Ongoing Projects</h3>
            {inView && (
              <CountUp className="text-3xl" start={0} end={20} duration={3} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatusTail;
