import Head from "next/head";
import styled from "styled-components";

import MainProjectLungor from "./lungor/MainProjectLungor";
import MainProjectOBA from "./oba/MainProjectOBA";
import MoreMinorProjects from "./MoreMinorProjects";

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <ProjectContainer>
        <MainProjectOBA />
        <MainProjectLungor />
        <MoreMinorProjects />
      </ProjectContainer>
    </>
  );
};

const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: 45% 45% 10%;
  height: 100vh;
`;

export default Projects;
