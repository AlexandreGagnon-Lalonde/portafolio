import styled from "styled-components";
import Link from "next/link";
import { COLORS } from "../../public/constant";

const CoolAnimation = () => {
  return (
    <ButtonContainer>
      <Link href={"#project"}>
        <NavigationLink>projects down here</NavigationLink>
      </Link>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  grid-column: 2;
  grid-row: 2;
`;
const NavigationLink = styled.a`
  display: block;
  font-weight: bold;
  color: ${COLORS.black};
  text-decoration: none;
  transition: all 0.5s;
  width: auto;
  height: 100%;
  

  &:hover {
    color: ${COLORS.blue};
  }
`;

export default CoolAnimation;
