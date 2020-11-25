import styled from "styled-components";

import XYZ from "./xyz/xyz";
import Navigation from "../navigation";

const Archive = () => {
  return (
    <>
      <Navigation />
      <Container>
        <XYZ />
      </Container>
    </>
  );
};

const Container = styled.div`
  margin-top: 40px;
`;

export default Archive;
