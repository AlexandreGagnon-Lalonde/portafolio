import styled from "styled-components";
import Link from "next/link";

import { COLORS } from "../../../public/constant";

import { VscGithubInverted, VscGithub } from "react-icons/vsc";

const MainProjectLungor = () => {
  return (
    <ProjectContainer>
      <ImageContainer>
        <Image src={"/assets/lungorFiller.png"} />
      </ImageContainer>
      <ProjectDetails>
        <ProjectTitle>Lungor</ProjectTitle>
        <ProjectBio>
          Still Loading...
        </ProjectBio>
        {/* <Link href={"/projects/lungor"} passHref>
          <ProjectLink href={"/projects/lungor"}>Continue reading</ProjectLink>
        </Link> */}
      </ProjectDetails>
    </ProjectContainer>
  );
};

const ProjectContainer = styled.div`
grid-column: 1;
  margin: 40px 40px auto 40px;
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

export default MainProjectLungor;
