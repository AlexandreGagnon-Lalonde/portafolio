import Link from "next/link";
import { useRouter } from 'next/router';
import styled from "styled-components";

import { COLORS } from "../pages/constant";

export default function Navigation() {
  const router = useRouter();

  console.log(router.route)
  return (
    <LinkContainer>
      <Link href={"/"} passHref>
        <NavigationLink style={router.route === '/' ? { color: `${COLORS.orange}`} : null}>Home</NavigationLink>
      </Link>
      <Link href={"/projects"} passHref>
        <NavigationLink style={router.route === '/projects' ? { color: `${COLORS.orange}`} : null}>Projects</NavigationLink>
      </Link>
      <Link href={"/archive"} passHref>
        <NavigationLink style={router.route === '/archive' ? { color: `${COLORS.orange}`} : null}>Archive</NavigationLink>
      </Link>
      <Link href={"/contact"} passHref>
        <NavigationLink style={router.route === '/contact' ? { color: `${COLORS.orange}`} : null}>Contact Me</NavigationLink>
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

  &.active {
    color: red;
  }
`;
