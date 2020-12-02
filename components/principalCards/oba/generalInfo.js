import styled from "styled-components";

import Tools from '../GeneralInfo/tools';
import AppImage from '../GeneralInfo/appImage';

export default function GeneralInfo() {
  return <InfoContainer>
      <Tools/>
      <AppImage src={'/assets/OBAmobile.png'}/>
    </InfoContainer>
}

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`