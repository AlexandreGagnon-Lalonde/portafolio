import styled from "styled-components";
import { COLORS, YoutubeStyles } from "../../../public/constant";

const MainProjectOBA = () => {
  return (
    <ProjectContainer>
      <ImageContainer>
        <iframe
          style={YoutubeStyles}
          src="https://www.youtube-nocookie.com/embed/B_FsLWXAr0w"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </ImageContainer>
      <ProjectDetails>
        <ProjectHeader>
          <ProjectTitle>OBA</ProjectTitle>{" "}
          <ProjectLink href={"/projects/oba"}>Continue reading</ProjectLink>
        </ProjectHeader>
        <ProjectBio>
          Online platform that allows gym members to register for some specific
          classes. Users can interact with eachothers through private messages
          and they can leave comments every day on the workout of the day (WOD).
          To allow members to give anonymous (or not) feedback there is a
          suggestion box on the homepage and the admin is able to see all of
          them on his profile page.
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
const ImageContainer = styled.div`
  position: relative;
  margin: 0 0 10px 0;
  padding-bottom: 56.25%;
`;
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

export default MainProjectOBA;
