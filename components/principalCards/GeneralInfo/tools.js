import { keyframes } from "styled-components";
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring';

export default function Tools() {

  return (
    <Container>
      <AppTitle>OnlineBookingApplication</AppTitle>
      <TechnologiesContainer>
        <ReactLogo>react</ReactLogo>
        <NodeLogo>node</NodeLogo>
        <MongoLogo>mongo</MongoLogo>
        <StyledComponentLogo>styled compo</StyledComponentLogo>
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
  background-color: turquoise;
  height: 300px;
  width: 300px; 
  animation: ${rotateLogos} 20s infinite linear

`
const ReactLogo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
    animation: ${rotateLogo} 20s infinite linear

`
const NodeLogo = styled.div`
  position: absolute;
  top: 0;
  right: 0;
    animation: ${rotateLogo} 20s infinite linear

`
const MongoLogo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
    animation: ${rotateLogo} 20s infinite linear

`
const StyledComponentLogo = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  animation: ${rotateLogo} 20s infinite linear

`