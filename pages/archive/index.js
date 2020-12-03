import styled from "styled-components";

import XYZ from "../../components/archiveCards/xyz";
import ABC from "../../components/archiveCards/abc";
import HomeLink from '../../components/navigation/HomeLink'
import Navigation from '../../components/navigation/navigation';

const Archive = () => {
  return (
    <>
      <Navigation />
      <Container>
        <XYZ />
        <ABC />
      </Container>
    </>
  );
};

const Container = styled.div`
  margin: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1.5em;
`;

export default Archive;
