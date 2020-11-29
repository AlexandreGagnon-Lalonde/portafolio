import styled from "styled-components";

import PurposeImage from '../Purpose/purposeImage';
import PurposeText from '../Purpose/purposeText';

export default function Purpose() {
  return <InfoContainer>
      <PurposeImage src={'/assets/profilemobile.png'}/>
      <PurposeText />
    </InfoContainer>
}

const InfoContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
  width: 100%;
`