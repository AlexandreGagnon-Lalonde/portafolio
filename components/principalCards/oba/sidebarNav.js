import Link from "next/link";
import styled from "styled-components";

import { COLORS } from "../../../public/constant";

export default function SideBarNav() {
  return (
    <SideBarContainer>
      <Link href={"#info"} passHref>
        <SideBarLink>general info</SideBarLink>
      </Link>
      <Link href={"#problem"} passHref>
        <SideBarLink>problems</SideBarLink>
      </Link>
      <Link href={"#lesson"} passHref>
        <SideBarLink>lessons</SideBarLink>
      </Link>
    </SideBarContainer>
  );
}

const SideBarContainer = styled.div`
  position: fixed;
  top: 45%;
  left: 5px;
  height: 100px;
  border-radius: 10px;
  background-color: ${COLORS.orange};
  padding: 10px;
`;
const SideBarLink = styled.a`
  display: block;
  font-weight: bold;
  color: ${COLORS.white};
  text-decoration: none;
  transition: all 0.5s;
  width: auto;
  height: 30px;

  &:hover {
    color: ${COLORS.blue};
  }
`;
