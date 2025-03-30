import React from "react";
import GlobalTitle from "../../components/Global/GlobalTitle";
// import Team from "./Team";
import Intro from "./Intro";
// import OurClients from "./OurClients";
import CommonCta from "../../components/CommonCta";
import StatusTail from "../../components/StatusTail";
import Testimonials from "../../components/Testimonials/Testimonials";
import HowWeWork from "./HowWeWork";
import OurSkills from "./OurSkills";

const About = () => {
  return (
    <div className="bg-gray-50">
      <GlobalTitle title={"About Us"} />
      <Intro />
      <HowWeWork />
      <OurSkills />
      {/* <OurClients /> */}
      <StatusTail />
      {/* <Team /> */}
      <Testimonials />
      <CommonCta />
    </div>
  );
};

export default About;
