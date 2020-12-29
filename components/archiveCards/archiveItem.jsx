import styled from "styled-components";
import ArchiveLinks from "./archiveLinks";
import Image from "./projectImage";
import { COLORS } from "../../public/constant";

export default function ArchiveItem({ ProjectInfo, index }) {
  const ProjectContainer = styled.div`
    width: 200px;
    height: 200px;
    margin: 20px;
    padding: 10px;
    background: ${index % 2
      ? (props) => props.theme.archiveEven
      : (props) => props.theme.archiveOdd};
    position: relative;
    transition: all 0.3s;
    border-radius: 100px;

    &:hover {
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
    &:hover ${ProjectName} {
      display: flex;
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
        <ProjectName>{ProjectInfo.displayName}</ProjectName>
      </ProjectContainer>
    </>
  );
}

const ProjectName = styled.div`
  width: 180px;
  height: 180px;
  display: none;
  background-color: rgba(102, 102, 102, 0.8);
  color: ${COLORS.white};
  font-weight: bold;
  font-size: 1.3em;
  text-align: center;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10px;
  left: 10px;
  border-radius: 50%;
  text-shadow: -1px -1px 0 ${COLORS.black}, 1px -1px 0 ${COLORS.black},
    -1px 1px 0 ${COLORS.black}, 1px 1px 0 ${COLORS.black};
`;
