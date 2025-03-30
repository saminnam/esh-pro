import React from "react";
import GlobalTitle from "../../components/Global/GlobalTitle";
import ProjectTabs from "./ProjectTabs";
import Gallery from "./Gallery";
import CommonCta from "../../components/CommonCta";

const Projects = () => {
  return (
    <>
      <GlobalTitle title={"Our Projects"} />
      <ProjectTabs />
      <Gallery />
      <CommonCta />
    </>
  );
};

export default Projects;
