import { keyframes } from "styled-components";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

export default function Tools() {
  return (
    <Container>
      <AppTitle>OnlineBookingApplication</AppTitle>
      <GeneralInfoFirstPart>
        I personally chose to do this project from scratch as the last of my
        bootcamp to recreate and optimize a platform I often use at the gym I go
        to. Members can navigate through the days and the weeks to book multiple
        classes. They can also interact with eachother privately and interact on
        the workout of the day publicly.
      </GeneralInfoFirstPart>
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
      <GeneralInfoSecondPart>
        The two main dishes here are the calendar and the messages between
        users. The ability to switch between a single day view to a weekly view
        and to steer from date to date should be mandatory when building a
        project like mine. The messaging part though is a little plus from the
        other platforms.
      </GeneralInfoSecondPart>
    </Container>
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
const Container = styled.div``;
const AppTitle = styled.h3`
  width: 100%;
  text-shadow: 0px 0px 2px #101010;
  font-family: Georgia, serif;
  font-size: 1.5em;
  letter-spacing: 3px;
  word-spacing: 2px;
  color: #101010;
  font-weight: 700;
  text-decoration: none;
  font-style: normal;
  font-variant: small-caps;
  text-transform: none;
  margin: 60px 0 40px 60px;

  @media (max-width: 768px) {
    margin: 60px auto 40px auto;
    text-align: center;
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
const GeneralInfoFirstPart = styled.p`
  margin: 20px 60px auto 60px;
  text-indent: 2em;
  text-align: justify;
  line-height: 2;
  font-weight: 600;

  @media (max-width: 768px) {
    text-indent: 0;
    margin: 20px 30px auto 30px;
  }

`;
const GeneralInfoSecondPart = styled.p`
  margin: 20px 60px auto 60px;
  text-indent: 2em;
  text-align: justify;
  line-height: 2;
  font-weight: 600;

  @media (max-width: 768px) {
    text-indent: 0;
    margin: 20px 30px auto 30px;
  }

`;
