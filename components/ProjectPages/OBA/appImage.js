import styled from "styled-components";

export default function AppImage({ src }) {
  return <InfoContainer>
      <StyledImage src={src}/>
    </InfoContainer>
}

const InfoContainer = styled.div`
  position: relative;
  @media (max-width: 768px) {
    text-align: center;
  }

`
const StyledImage = styled.img`
  width: 85%;
  margin: 60px 30px 60px 60px;
  border-radius: 10px;
  box-shadow: 0px 2px 22px 2px rgba(16,16,16,1);
  @media (max-width: 768px) {
    margin: 30px auto;
  }

`