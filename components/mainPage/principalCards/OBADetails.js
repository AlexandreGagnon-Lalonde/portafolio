import styled from "styled-components";
import { COLORS } from "../../../public/constant";

export default function OBADetails() {
  return (
    <ProjectDetails>
      <ProjectHeader>
        <ProjectTitle>OBA</ProjectTitle>{" "}
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
const ProjectBio = styled.p``;
const ProjectLink = styled.a`
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