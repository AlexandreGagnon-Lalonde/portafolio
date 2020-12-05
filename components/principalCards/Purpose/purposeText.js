import styled from "styled-components";

export default function PurposeText() {
  return <InfoContainer>
      <PurposeParagraph></PurposeParagraph>
    </InfoContainer>
}

const InfoContainer = styled.div`
  width: 100%;
  height: 100vh;
`
const PurposeParagraph = styled.p`
margin: 20px 60px auto 30px;
text-indent: 2em;
text-align: justify;
line-height: 2;
font-weight: 600;

`