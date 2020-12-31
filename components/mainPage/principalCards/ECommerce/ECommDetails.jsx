import styled from "styled-components";

export default function ECommDetails() {
  return (
    <ProjectDetails>
      <ProjectHeader>
        <ProjectTitle>E-Commerce</ProjectTitle>{" "}
        <ProjectLink href={"/projects/ECommerce"}>Continue reading</ProjectLink>
      </ProjectHeader>
      <ProjectBio>
        In a team of 4, create an E-Commerce for wearables from scratch with
        ReactJS and NodeJS.
      </ProjectBio>
    </ProjectDetails>
  );
}

const ProjectTitle = styled.h3`
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 1em;
  }
`;
const ProjectDetails = styled.div`
  margin: 10px 20px 0 20px;
`;
const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
const ProjectBio = styled.p`
  color: ${(props) => props.theme.mainCardTextColor};
`;
const ProjectLink = styled.a`
  text-align: right;
  color: ${(props) => props.theme.mainCardLinkColor};
  font-weight: bold;
  font-size: 1.25em;
  text-decoration: none;
  transition: all 0.3s;

  &:hover {
    color: ${(props) => props.theme.mainCardLinkHoverColor};
    text-decoration: none;
  }
  @media (max-width: 768px) {
    font-size: 1em;
  }
`;
