import styled from "styled-components";
import { COLORS } from "../../public/constant";
import ArchiveLinks from "./archiveLinks";
import Image from "./image";

export default function ArchiveItem({ ProjectInfo, index }) {
  const ProjectContainer = styled.div`
    width: 200px;
    height: 200px;
    margin: 20px;
    padding: 10px;
    background: ${index % 2 ? COLORS.blue : COLORS.orange};
    position: relative;
    transition: all 0.3s;
    border-radius: 100px;

    &:hover {
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
  `;

  return (
    <>
      <ProjectContainer>
        <ArchiveLinks
          github={ProjectInfo.githubLink}
          netlify={ProjectInfo.netlifyLink}
          index={index}
        />
        <Image
          src={ProjectInfo.image.path}
          styles={ProjectInfo.image.style}
          projectName={ProjectInfo.projectName}
        />
      </ProjectContainer>
    </>
  );
}
