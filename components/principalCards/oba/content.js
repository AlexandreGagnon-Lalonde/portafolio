import styled from "styled-components";

import ContentText from '../Content/contentText';
import ContentImage from '../Content/contentImage';

export default function Content() {
  return <InfoContainer>
      <ContentText />
      <ContentImage src={'/assets/3projfill.jpg'}/>
    </InfoContainer>
}

const InfoContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 100vh;
`