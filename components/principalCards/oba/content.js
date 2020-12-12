import styled from "styled-components";

import ContentText from "../Content/contentText";
import ContentImage from "../Content/contentImage";

export default function Content() {
  return (
    <InfoContainer>
      <ContentText />
      <ContentImage src={"/static/mainapp.png"} />
    </InfoContainer>
  );
}

const InfoContainer = styled.div`
  width: 100%;
`;
