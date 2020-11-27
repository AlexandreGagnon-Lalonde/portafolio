import styled from "styled-components";

import Tools from '../GeneralInfo/tools';
import AppImage from '../GeneralInfo/appImage';

export default function GeneralInfo() {
  return <InfoContainer>
      <Tools/>
      <AppImage src={'/assets/1projfill.jpg'}/>
    </InfoContainer>
}

const InfoContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 100vh;
`