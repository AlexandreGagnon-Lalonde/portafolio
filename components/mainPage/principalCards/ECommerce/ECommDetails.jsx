import styled from "styled-components";

export default function ECommDetails() {
  return (
    <ProjectDetails>
      <ProjectHeader>
        <ProjectTitle>E-Commerce</ProjectTitle>{" "}
        <ProjectLink href={"/projects/oba"}>Continue reading</ProjectLink>
      </ProjectHeader>
      <ProjectBio>
        Online platform that allows gym members to register for some specific
        classes. Users can interact with eachothers through private messages and
        they can leave comments every day on the workout of the day (WOD). To
        allow members to give anonymous (or not) feedback there is a suggestion
        box on the homepage and the admin is able to see all of them on his
        profile page.
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
