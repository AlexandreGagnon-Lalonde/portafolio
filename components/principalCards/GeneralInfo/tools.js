import { keyframes } from "styled-components";
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring';

export default function Tools() {

  return (
    <Container>
      <AppTitle>OnlineBookingApplication</AppTitle>
      <TechnologiesContainer>
        <ReactLogo><ReactImage src={'/assets/react.png'} /></ReactLogo>
        <NodeLogo><NodeImage src={'/assets/node.png'} /></NodeLogo>
        <MongoLogo><MongoImage src={'/assets/MongoDB_logo_01.png'} /></MongoLogo>
        <StyledComponentLogo><StyledCompImage src={'/assets/styled_component.png'} /></StyledComponentLogo>
      </TechnologiesContainer>
    </Container>
  )
}

const rotateLogos = keyframes`
0% {
      transform: rotate(0deg)
    }
    100% {
      transform: rotate(360deg)
    }
`
const rotateLogo = keyframes`
0% {
  transform: rotate(0deg)
}
100% {
  transform: rotate(-360deg)
}

`
const Container = styled.div`
  height: 100vh;
`
const AppTitle = styled.h3`

`
const TechnologiesContainer = styled.div`
  position: absolute;
  top: 30%;
  left: calc(25% - 300px / 2);
  height: 300px;
  width: 300px; 
  animation: ${rotateLogos} 30s infinite linear

`
const ReactLogo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
    animation: ${rotateLogo} 30s infinite linear

`
const ReactImage = styled.img`
  width: 120px;
`
const NodeLogo = styled.div`
  position: absolute;
  top: 0;
  right: 0;
    animation: ${rotateLogo} 30s infinite linear

`
const NodeImage = styled.img`
  width: 120px;
`
const MongoLogo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
    animation: ${rotateLogo} 30s infinite linear

`
const MongoImage = styled.img`
  width: 120px;
`
const StyledComponentLogo = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  animation: ${rotateLogo} 30s infinite linear

`
const StyledCompImage = styled.img`
  width: 120px;
`