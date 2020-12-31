import Carousel from "react-bootstrap/Carousel";
import MainProjectLungor from "./principalCards/Lungor/MainProjectLungor";
import MainProjectOBA from "./principalCards/OBA/MainProjectOBA";
import MoreMinorProjects from "./principalCards/archive/MoreMinorProjects";
import MainProjectECommerce from "./principalCards/ECommerce/MainProjectECommerce";
import styled from "styled-components";

export default function CarouselComponent() {
  return (
    <Container id={"project"}>
      <Carousel interval={null}>
        <Carousel.Item>
          <MainProjectOBA />
        </Carousel.Item>
        <Carousel.Item>
          <MainProjectECommerce />
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
