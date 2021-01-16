import styled from "styled-components";

export default function CollabDetails() {
  return (
    <ProjectDetails>
      <ProjectHeader>
        <ProjectTitle>Collab</ProjectTitle>{" "}
        <ProjectLink href={"/projects/ECommerce"}>Continue reading</ProjectLink>
      </ProjectHeader>
      <ProjectBio>
        Project built by a group of friends for a group of friends trying to
        make a decision.
        <br />
        Technologies used: NextJS - GraphQL - FaunaDB
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
