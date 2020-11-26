import Head from "next/head";
import styled from "styled-components";

import MainProjectLungor from "../../components/principalCards/MainProjectLungor";
import MainProjectOBA from "../../components/principalCards/MainProjectOBA";
import MoreMinorProjects from "./MoreMinorProjects";
import Navigation from "../../components/navigation/navigation";

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <Navigation />
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
