import styled from "styled-components";

import Tools from "./tools";
import AppImage from "./appImage";

export default function GeneralInfo() {
  return (
    <InfoContainer>
      <Tools />
      <AppImage src={"/static/OBAmobile.png"} />
    </InfoContainer>
  );
}

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
