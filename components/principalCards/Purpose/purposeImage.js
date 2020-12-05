import styled from "styled-components";

export default function PurposeImage({ src }) {
  return <InfoContainer>
      <StyledImage src={src}/>
    </InfoContainer>
}

const InfoContainer = styled.div`
display: block;`
const StyledImage = styled.img`
width: 85%;
margin: 60px 60px 60px 30px;
border-radius: 10px;
box-shadow: 0px 2px 22px 2px rgba(16,16,16,1);
`