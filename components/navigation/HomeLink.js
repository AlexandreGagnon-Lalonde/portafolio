import styled from "styled-components";
import Link from "next/link";

import { COLORS } from "../../public/constant";
import { FaHamburger, FaRegWindowMinimize } from "react-icons/fa";

export default function HomeLink() {
  return (
<Link href={"/"} passHref>
            <NavigationLink onClick={(ev) => ev.stopPropagation()}>
              Alexandre GL
            </NavigationLink>
          </Link>  );
}

const NavigationLink = styled.a`
  display: inline-block;
  font-weight: bold;
  color: ${COLORS.white};
  text-decoration: none;
  transition: all 0.5s;
  width: auto;
  letter-spacing: 0px;
  background-color: ${COLORS.blue};

  &:hover {
    color: ${COLORS.orange};
  }
`;
