import React from "react";
import Link from "next/link";
import styled, { keyframes } from "styled-components";

import { COLORS } from "../../../public/constant";

const MoreMinorProjects = () => {
  return (
    <ProjectContainer>
      <ImageContainer>
        <Image src={"/static/archive.jpg"} />
      </ImageContainer>
      <ProjectDetails>
        <ProjectHeader>
          <ProjectTitle>Archive</ProjectTitle>
          <ProjectLink href={"/archive"}>Continue reading</ProjectLink>
        </ProjectHeader>

        <ProjectBio>
          This section contains all my other minor projects.
        </ProjectBio>
      </ProjectDetails>
    </ProjectContainer>
  );
};

const ProjectContainer = styled.div`
  background-color: ${COLORS.yellow};
  border-radius: 20px;
  width: 65%;
  margin: 60px auto auto auto;
  padding-bottom: 30px;
`;
const ImageContainer = styled.div``;
const Image = styled.img`
  width: 100%;
  border-radius: 20px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
`;
const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const ProjectTitle = styled.h3`
  flex: 1;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 1em;
  }
`;
const ProjectDetails = styled.div`
  margin: 10px 20px 10px 20px;
`;
const ProjectBio = styled.p``;
const ProjectLink = styled.a`
  display: block;
  text-align: right;
  color: ${COLORS.white};
  font-weight: bold;
  font-size: 1.25em;
  text-decoration: none;
  transition: all 0.3s;

  &:hover {
    color: ${COLORS.orange};
    text-decoration: none;
  }
  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

export default MoreMinorProjects;
