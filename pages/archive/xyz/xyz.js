import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

import { VscGithubInverted, VscGithub } from "react-icons/vsc";
import { SiNetlify } from "react-icons/si";

import { COLORS } from "../../constant";

const XYZ = () => {
  return (
    <>
    <Head>
      <title>Archive</title>
    </Head>
      <ProjectContainer>
        <ProjectLinks>
          <PlatformLink href={"/githublink"}>
            <VscGithubInverted />
          </PlatformLink>
          <PlatformLink href={"/netlifylink"}>
            <SiNetlify />
          </PlatformLink>
        </ProjectLinks>
        <ProjectImage src={"/assets/1projfill.jpg"} />
        <ProjectTechnologies>
          <Technology>HTML - CSS - JS</Technology>
        </ProjectTechnologies>
      </ProjectContainer>
    </>
  );
};

const ProjectTechnologies = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  left: 0;
  color: ${COLORS.white};

  transition: color 0.3s;
`;
const Technology = styled.p`
  display: flex;
  justify-content: center;
  font-weight: bold;
  width: 200px;
`;
const ProjectLinks = styled.div`
  display: flex;
  justify-content: space-between;
`;
const PlatformLink = styled(Link)`
  color: ${COLORS.white};
  display: block;
  padding: 10px;

  transition: color 0.3s;
`;
const ProjectContainer = styled.div`
  width: 200px;
  height: 200px;
  margin: 20px;
  padding: 10px;
  border-radius: 100px;
  background: rgb(238, 238, 238);
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 60%,
    ${COLORS.blue} 70%
  );
  position: relative;
  transition: all 0.3s;

  &:hover ${ProjectTechnologies}, &:hover ${PlatformLink} {
    color: ${COLORS.black};
    display: flex;
    justify-content: center;
  }
  &:hover {
    border-radius: 10px;
    height: 240px;
  }
`;
const ProjectImage = styled.img`
  width: 160px;
  height: 160px;
  object-fit: cover;
  margin: 0 auto;
  display: block;
  position: absolute;
  top: 10%;
  left: 10%;
  border-radius: 50%;
`;

export default XYZ;
