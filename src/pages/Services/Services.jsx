import React from "react";
import GlobalTitle from "../../components/Global/GlobalTitle";
import OurService from "./OurService";
import OurExpertise from "./OurExpertise";
import CommonCta from "../../components/CommonCta";

const Services = () => {
  return (
    <>
      <GlobalTitle title={"Our Services"} />
      <OurService />
      <OurExpertise />
      <CommonCta />
    </>
  );
};

export default Services;
