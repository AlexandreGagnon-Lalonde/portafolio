import styled from "styled-components";
import Link from "next/link";

import { COLORS } from "../../../public/constant";

import { VscGithubInverted, VscGithub } from "react-icons/vsc";
import { BsArrowRight } from "react-icons/bs";

const MainProjectOBA = () => {
  const YoutubeStyles = {
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
    borderBottomLeftRadius: "0px",
    borderBottomRightRadius: "0px",
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
  };
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
const Image = styled.img`
  width: 80%;
  border-radius: 10px;
`;
const Video = styled.div`
  width: 100%;
  border-radius: 10px;
`;
const ProjectTitle = styled.h3`
  margin-bottom: 10px;
  font-weight: bold;

`;
const ProjectDetails = styled.div`
  margin: 10px 20px 0 20px;
`;
const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ProjectBio = styled.p`
`;
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
`;

export default MainProjectOBA;
