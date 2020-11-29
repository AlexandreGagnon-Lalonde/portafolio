import { keyframes } from "styled-components";
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring';

export default function Tools() {

  return (
    <Container>
      <AppTitle>OnlineBookingApplication</AppTitle>
      <GeneralInfoFirstPart>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. </GeneralInfoFirstPart>
      <TechnologiesContainer>
        <ReactLogo><ReactImage src={'/assets/react.png'} /></ReactLogo>
        <NodeLogo><NodeImage src={'/assets/node.png'} /></NodeLogo>
        <MongoLogo><MongoImage src={'/assets/MongoDB_logo_01.png'} /></MongoLogo>
        <StyledComponentLogo><StyledCompImage src={'/assets/styled_component.png'} /></StyledComponentLogo>
      </TechnologiesContainer>
      <GeneralInfoSecondPart>Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh.
</GeneralInfoSecondPart>
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
  width: 100%;
  text-align: center;
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
margin-top: 20px;
`
const TechnologiesContainer = styled.div`
  height: 300px;
  margin: 60px auto 60px auto;
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
const GeneralInfoFirstPart = styled.p`
  margin: 20px 20px auto 40px;
`
const GeneralInfoSecondPart = styled.p`
margin: 20px 20px auto 40px;

`