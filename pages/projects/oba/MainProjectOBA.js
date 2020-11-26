import React from "react";
import styled from "styled-components";
import Link from "next/link";

import { COLORS } from "../../constant";

import { VscGithubInverted, VscGithub } from "react-icons/vsc";
import { BsArrowRight } from "react-icons/bs";

const MainProjectOBA = () => {
  return (
    <ProjectContainer>
      <ImageContainer>
        <Image src={"/assets/OBAFiller.jpg"} />
      </ImageContainer>
      <ProjectDetails>
        <ProjectTitle>OBA</ProjectTitle>
        <ProjectBio>
          Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
          massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Curabitur sodales ligula in libero.
        </ProjectBio>
        <ProjectLink href={"/projects/oba"}>Continue reading</ProjectLink>
      </ProjectDetails>
    </ProjectContainer>
  );
};

const ProjectContainer = styled.div`
  margin: 40px 20px auto 40px;
  background-color: ${COLORS.yellow};
  border-radius: 20px;
`;
const ImageContainer = styled.div`
  margin: 40px 40px 20px 40px;
`;
const Image = styled.img`
  width: 100%;
  border-radius: 10px;
`;
const ProjectTitle = styled.h3`
  margin-bottom: 20px;
`;
const ProjectDetails = styled.div`
  margin: 20px 40px 20px 40px;
`;
const ProjectBio = styled.p`
  margin-bottom: 20px;
`;
const ProjectTechnologies = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const Technology = styled.li``;
const ProjectLink = styled(Link)`
  display: block;
  width: 100%;
  text-align: center;
  color: ${COLORS.black};
`;

export default MainProjectOBA;
