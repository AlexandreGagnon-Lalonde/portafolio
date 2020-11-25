import styled from "styled-components";

import { COLORS, ABOUTMETEXT } from "./constant";

const PresentationText = () => {
  return <Container>{ABOUTMETEXT}</Container>;
};

const Container = styled.div`
  grid-column: 1;
  grid-row: 1 / 3;
  margin: 25px;
  text-indent: 1em;
  text-align: justify;
`;

export default PresentationText;
