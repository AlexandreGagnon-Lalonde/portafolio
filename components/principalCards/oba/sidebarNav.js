import Link from "next/link";
import styled from "styled-components";

import { COLORS } from "../../../public/constant";

export default function SideBarNav() {
  return (
    <SideBarContainer>
      <Link href={"#intro"} passHref>
        <SideBarLink>Introduction</SideBarLink>
      </Link>
      <Link href={"#purpose"} passHref>
        <SideBarLink>Purpose</SideBarLink>
      </Link>
      <Link href={"#content"} passHref>
        <SideBarLink>Content</SideBarLink>
      </Link>
      <Link href={"#contact"} passHref>
        <SideBarLink>Contact Me</SideBarLink>
      </Link>
    </SideBarContainer>
  );
}

const SideBarContainer = styled.div`
  position: fixed;
  bottom: 5px;
  left: 5px;
  height: 130px;
  border-radius: 10px;
  background-color: ${COLORS.orange};
  padding: 10px;
  z-index: 1;
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
