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
  margin: 20px 10px auto 20px;
  background-color: ${COLORS.yellow};
  border-radius: 20px;
`;
const ImageContainer = styled.div`
  margin: 20px 20px 10px 20px;
`;
const Image = styled.img`
  width: 100%;
  border-radius: 10px;
`;
const ProjectTitle = styled.h3`
  margin-bottom: 10px;
`;
const ProjectDetails = styled.div`
  margin: 10px 20px 20px 20px;
`;
const ProjectBio = styled.p`
  margin-bottom: 10px;
`;
const ProjectLink = styled.a`
  display: block;
  width: 100%;
  text-align: right;
  color: ${COLORS.white};
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s;

  &:hover {
    color: ${COLORS.orange};
  }
`;

export default MainProjectOBA;
