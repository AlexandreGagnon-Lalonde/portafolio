import styled from "styled-components";
import { keyframes } from "styled-components";

export default function TechnologiesAnimation() {
  return (
    <TechnologiesContainer>
      <ReactLogo>
        <ReactImage src={"/static/react.png"} />
      </ReactLogo>
      <NodeLogo>
        <NodeImage src={"/static/node.png"} />
      </NodeLogo>
      <MongoLogo>
        <MongoImage src={"/static/MongoDB_logo_01.png"} />
      </MongoLogo>
      <StyledComponentLogo>
        <StyledCompImage src={"/static/styled_component.png"} />
      </StyledComponentLogo>
    </TechnologiesContainer>
  );
}

const rotateLogos = keyframes`
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
`;
const rotateLogo = keyframes`
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(-360deg)
  }
`;

const TechnologiesContainer = styled.div`
  height: 300px;
  margin: 40px auto 40px auto;
  width: 300px;
  animation: ${rotateLogos} 30s infinite linear;
`;
const ReactLogo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  animation: ${rotateLogo} 30s infinite linear;
`;
const ReactImage = styled.img`
  width: 120px;
`;
const NodeLogo = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  animation: ${rotateLogo} 30s infinite linear;
`;
const NodeImage = styled.img`
  width: 120px;
`;
const MongoLogo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  animation: ${rotateLogo} 30s infinite linear;
`;
const MongoImage = styled.img`
  width: 120px;
`;
const StyledComponentLogo = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  animation: ${rotateLogo} 30s infinite linear;
`;
const StyledCompImage = styled.img`
  width: 120px;
`;
