import styled from "styled-components";
import { COLORS } from "../../public/constant";

export default function PresentationName() {
  return (
    <NameContainer>
      <Hello>
        Hello! <ObjectEmphasis>{"{"}</ObjectEmphasis>
      </Hello>
      <ObjectName>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name
        <ObjectEmphasis>:</ObjectEmphasis> Alexandre Gagnon-Lalonde, <br />{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;aspiration
        <ObjectEmphasis>:</ObjectEmphasis> Full-Stack Web Developer <br />
        <ObjectEmphasis>{"}"}</ObjectEmphasis>
      </ObjectName>
    </NameContainer>
  );
}

const Hello = styled.h2`
  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;
const NameContainer = styled.div`
  grid-column: 1 / 3;
  margin: 60px auto 20px auto;
`;
const ObjectEmphasis = styled.span`
  font-weight: bold;
  color: ${props => props.theme.presentationNameEmphasisColor};
`;
const ObjectName = styled.h2`
  margin-bottom: 50px;

  @media (max-width: 768px) {
    margin-bottom: 0;
    font-size: 1.5em;
  }
`;
