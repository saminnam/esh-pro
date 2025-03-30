import React from "react";
import video from "../assets/videos/mission-video.mp4";
import logo from "../assets/logo.jpg";

const Loader = () => {
  return (
    <section className="h-screen w-full flex flex-col gap-1 justify-center items-center">
      <video
        src={video}
        autoPlay
        muted
        playsInline
        className="w-[120px]"
      ></video>
      <img src={logo} alt="logo" className="w-[200px]" loading="lazy"/>
    </section>
  );
};

export default Loader;
