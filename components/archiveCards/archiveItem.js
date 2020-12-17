import Link from "next/link";
import styled from "styled-components";
import { VscGithubInverted } from "react-icons/vsc";
import { SiNetlify } from "react-icons/si";
import { COLORS } from "../../public/constant";
import ArchiveLinks from "./archiveLinks";

export default function ArchiveItem({ ProjectInfo, index }) {
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
    background: ${index % 2 ? COLORS.blue : COLORS.orange};
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
    background-color: ${COLORS[ProjectInfo.projectName]};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    overflow: hidden;
  `;
  const ProjectImage = styled.img`
    display: block;
    margin: 0 auto;
    border-radius: 10px;
  `;

  return (
    <>
      <ProjectContainer>
        <ArchiveLinks
          github={ProjectInfo.githubLink}
          netlify={ProjectInfo.netlifyLink}
          index={index}
        />
        <ImageContainer>
          <ProjectImage
            src={`${ProjectInfo.image.path}`}
            style={ProjectInfo.image.style}
          />
        </ImageContainer>
      </ProjectContainer>
    </>
  );
}
