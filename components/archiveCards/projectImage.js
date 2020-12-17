import styled from "styled-components";
import { COLORS } from "../../public/constant";

export default function Image({ src, styles, projectName }) {
  const ImageContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${COLORS[projectName]};
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
    <ImageContainer>
      <ProjectImage src={src} style={styles} />
    </ImageContainer>
  );
}
