import styled from "styled-components";

import XYZ from "../../components/archiveCards/xyz";
import Navigation from "../../components/navigation/navigation";
import HomeLink from '../../components/navigation/HomeLink'

const Archive = () => {
  return (
    <>
      <HomeLink />
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
