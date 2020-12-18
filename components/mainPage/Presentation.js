import styled from "styled-components";
import Picture from "./Picture";
import PresentationName from "./PresentationName";
import PresentationText from "./PresentationText";

export default function Presentation() {
  return (
    <Container>
      <PresentationName />
      <Picture />
      <PresentationText />
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-rows: 30% 70%;
  min-height: 100vh;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
