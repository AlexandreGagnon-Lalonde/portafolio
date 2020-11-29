import styled from "styled-components";
import Link from "next/link";

import { COLORS } from "../../../public/constant";

import { VscGithubInverted, VscGithub } from "react-icons/vsc";

const MainProjectLungor = () => {
  return (
    <ProjectContainer>
      <ImageContainer>
        <Image src={"/assets/LungorFiller.jpg"} />
      </ImageContainer>
      <ProjectDetails>
        <ProjectTitle>Lungor</ProjectTitle>
        <ProjectBio>
          Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
          massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Curabitur sodales ligula in libero.
        </ProjectBio>
        <Link href={"/projects/lungor"} passHref>
          <ProjectLink href={"/projects/lungor"}>Continue reading</ProjectLink>
        </Link>
      </ProjectDetails>
    </ProjectContainer>
  );
};

const ProjectContainer = styled.div`
grid-column: 1;
  margin: 20px 20px auto 20px;
  background-color: ${COLORS.yellow};
  border-radius: 20px;
`;
const ImageContainer = styled.div`
  margin: 20px 20px 10px 20px;
`;
const Image = styled.img`
  width: 80%;
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
