import styled from "styled-components";
import Link from "next/link";

const CoolAnimation = () => {
  return (
    <ButtonContainer>
      <Button href={"/projects"}>More</Button>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  grid-column: 2;
  grid-row: 2;
`;
const Button = styled(Link)``;

export default CoolAnimation;
