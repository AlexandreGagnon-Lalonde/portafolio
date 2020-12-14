import styled from "styled-components";
import Link from "next/link";

import { COLORS } from "../../../public/constant";

import { VscGithubInverted, VscGithub } from "react-icons/vsc";

const MainProjectLungor = () => {
  return (
    <ProjectContainer>
      <ImageContainer>
        <Image src={"/static/lungorFiller.png"} />
      </ImageContainer>
      <ProjectDetails>
        <ProjectTitle>Lungor</ProjectTitle>
        <ProjectBio>Still Loading...</ProjectBio>
        {/* <Link href={"/projects/lungor"} passHref>
          <ProjectLink href={"/projects/lungor"}>Continue reading</ProjectLink>
        </Link> */}
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
  margin: 0 0 10px 0;
`;
const Image = styled.img`
  width: 100%;
  border-radius: 20px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
`;
const ProjectTitle = styled.h3`
  margin-bottom: 10px;
  font-weight: bold;

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
