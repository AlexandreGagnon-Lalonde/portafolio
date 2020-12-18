import Carousel from "react-bootstrap/Carousel";
import MainProjectLungor from "../principalCards/lungor/MainProjectLungor";
import MainProjectOBA from "../principalCards/OBA/MainProjectOBA";
import MoreMinorProjects from "./principalCards/MoreMinorProjects";
import styled from "styled-components";

export default function CarouselComponent() {
  return (
    <Container>
      <Carousel interval={null}>
        <Carousel.Item>
          <MainProjectOBA />
        </Carousel.Item>
        <Carousel.Item>
          <MainProjectLungor />
        </Carousel.Item>
        <Carousel.Item>
          <MoreMinorProjects />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;
