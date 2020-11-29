import styled from "styled-components";
import Link from "next/link";

import { COLORS } from "../../public/constant";

export default function HomeLink() {
  return (
    <Link href={"/"} passHref>
      <NavigationLink
        onClick={(ev) => ev.stopPropagation()}
      >
        BringMeBack
      </NavigationLink>
    </Link>
  );
}

const NavigationLink = styled.a`
  display: inline-block;
  font-weight: bold;
  color: ${COLORS.black};
  text-decoration: none;
  transition: all 0.5s;
  width: auto;
  letter-spacing: 0px;
  background-color: ${COLORS.blue};
  border-radius: 10px;
  padding: 10px;

  &:hover {
    letter-spacing: 10px;
  }
`;
