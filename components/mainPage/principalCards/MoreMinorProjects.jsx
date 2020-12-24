import React from "react";
import styled from "styled-components";

export default function MoreMinorProjects() {
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
  background-color: ${props => props.theme.mainCardBackground};
  color: ${props => props.theme.mainCardTextColor};
  border-radius: 20px;
  width: 65%;
  margin: 60px auto auto auto;
  padding-bottom: 30px;
  border: ${props => props.theme.mainCardBorder};

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
  color: ${props => props.theme.mainCardLinkColor};
  font-weight: bold;
  font-size: 1.25em;
  text-decoration: none;
  transition: all 0.3s;

  &:hover {
    color: ${props => props.theme.mainCardLinkHoverColor};
    text-decoration: none;
  }
  @media (max-width: 768px) {
    font-size: 1em;
  }
`;
