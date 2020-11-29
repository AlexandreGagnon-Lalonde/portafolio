import styled from "styled-components";
import Link from "next/link";

import { COLORS } from "../../public/constant";

export default function HomeLink() {
  return (
    <Link href={"/"} passHref>
      <NavigationLink
        onClick={(ev) => ev.stopPropagation()}
      >
        Contact
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

  &:hover {
    color: ${COLORS.orange};
  }
`;
