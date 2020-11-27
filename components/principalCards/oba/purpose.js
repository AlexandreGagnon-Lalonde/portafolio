import styled from "styled-components";

import PurposeImage from '../Purpose/purposeImage';
import PurposeText from '../Purpose/purposeText';

export default function Purpose() {
  return <InfoContainer>
      <PurposeImage src={'/assets/2projfill.jpg'}/>
      <PurposeText />
    </InfoContainer>
}

const InfoContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 100vh;
`