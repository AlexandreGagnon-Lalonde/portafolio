import Link from "next/link";

import styled from "styled-components";

import { COLORS } from "./constant";

export default function Navigation() {
  return (
    <LinkContainer>
      <Link href={"/"} passHref>
        <NavigationLink>Home</NavigationLink>
      </Link>
      <Link href={"/projects"} passHref>
        <NavigationLink>Projects</NavigationLink>
      </Link>
      <Link href={"/archive"} passHref>
        <NavigationLink>Archive</NavigationLink>
      </Link>
      <Link href={"/contact"} passHref>
        <NavigationLink>Contact Me</NavigationLink>
      </Link>
    </LinkContainer>
  );
}

const LinkContainer = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  background-color: ${COLORS.blue};
  padding: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
`;
const NavigationLink = styled.a`
  font-weight: bold;
  color: ${COLORS.white};
  text-decoration: none;
`;
