import styled from "styled-components";

export default function ContentImage({ src }) {
  return <InfoContainer>
      <StyledImage src={src}/>
    </InfoContainer>
}

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
`
const StyledImage = styled.img`
width: 90%;
margin: 20px;
border-radius: 10px;
box-shadow: 0px 2px 22px 2px rgba(16,16,16,1);
`