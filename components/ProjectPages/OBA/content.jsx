import styled from "styled-components";
import ContentText from "./contentText";
import ContentImage from "./contentImage";

export default function Content() {
  return (
    <InfoContainer>
      <ContentText />
      <ContentImage src={"/static/OBA/mainapp.png"} />
    </InfoContainer>
  );
}

const InfoContainer = styled.div`
  width: 100%;
`;
