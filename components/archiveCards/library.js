import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

import { VscGithubInverted, VscGithub } from "react-icons/vsc";
import { SiNetlify } from "react-icons/si";

import { COLORS } from "../../public/constant";

const Library = () => {
  return (
    <>
      <Head>
        <title>Archive</title>
      </Head>
      <ProjectContainer>
        <ProjectLinks>
          <Link
            href={"https://github.com/AlexandreGagnon-Lalonde/Library-display"}
            passHref
          >
            <PlatformLink>
              <VscGithubInverted />
            </PlatformLink>
          </Link>
          <Link
            href={"https://library-display-alexandregl.netlify.app/"}
            passHref
          >
            <PlatformLink>
              <SiNetlify />
            </PlatformLink>
          </Link>
        </ProjectLinks>
        <ImageContainer>
          <ProjectImage src={"/static/library.PNG"} />
        </ImageContainer>
      </ProjectContainer>
    </>
  );
};

const ProjectTechnologies = styled.div`
  display: none;
  position: absolute;
  top: 50%;
  transform: translateY(20%);
  left: 0;
  color: ${COLORS.white};

  transition: color 0.3s;
`;
const Technology = styled.p`
  color: ${COLORS.black};
  display: flex;
  justify-content: center;
  font-weight: bold;
  width: 200px;
`;
const ProjectLinks = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: calc(100% - 20px);
`;
const PlatformLink = styled.a`
  color: ${COLORS.black};
  cursor: pointer;
  transition: all 0.3s;
  opacity: 0;

  &:hover {
    color: ${COLORS.orange};
    transform: scale(1.3);
  }
`;
const ProjectContainer = styled.div`
  width: 200px;
  height: 200px;
  margin: 20px;
  padding: 10px;
  background: ${COLORS.blue};
  position: relative;
  transition: all 0.3s;
  border-radius: 100px;

  &:hover ${PlatformLink} {
    opacity: 1;
  }
  &:hover {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${COLORS.library};
  display: flex;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
`;
const ProjectImage = styled.img`
  width: 100%;
  display: block;
  margin: 0 auto;
  border-radius: 10px;
`;
export default Library;
