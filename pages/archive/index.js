import styled from "styled-components";

import XYZ from "../../components/archiveCards/xyz";
import HomeLink from '../../components/navigation/HomeLink'
import Navigation from '../../components/navigation/navigation';

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
