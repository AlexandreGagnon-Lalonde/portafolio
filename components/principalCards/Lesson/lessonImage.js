import styled from "styled-components";

export default function LessonImage({ src }) {
  return <InfoContainer>
      <StyledImage src={src}/>
    </InfoContainer>
}

const InfoContainer = styled.div`
  height: 100vh;
  position: relative;
`
const StyledImage = styled.img`
  width: 100%;
  position: absolute;
  bottom: 20%;
`