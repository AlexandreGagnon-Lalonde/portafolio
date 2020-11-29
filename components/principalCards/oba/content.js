import styled from "styled-components";

import ContentText from '../Content/contentText';
import ContentImage from '../Content/contentImage';

export default function Content() {
  return <InfoContainer>
      <ContentText />
      <ContentImage src={"/assets/calendarcomments.png"} />
    </InfoContainer>
}

const InfoContainer = styled.div`
  width: 100%;
`