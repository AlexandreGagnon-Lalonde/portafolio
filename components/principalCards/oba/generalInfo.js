import styled from "styled-components";

import Tools from '../tools';
import AppImage from '../appImage';

export default function GeneralInfo() {
  return <InfoContainer>
      <Tools/>
      <AppImage src={'asd'}/>
    </InfoContainer>
}

const InfoContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: gray;
  color: white;
`