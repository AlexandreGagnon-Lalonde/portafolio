import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

import { FaHamburger } from "react-icons/fa";

import { COLORS } from "../../pages/constant";

export default function Navigation() {
  const [navBar, setNavBar] = useState(true);
  const router = useRouter();

  const handleClick = (ev) => {
    ev.preventDefault();

    setNavBar(!navBar);
  };

  return (
    <LinkContainer onClick={handleClick}>
      {navBar ? (
        <>
          <Link href={"/"} passHref>
            <NavigationLink
              style={
                router.route === "/" ? { color: `${COLORS.orange}` } : null
              }
              onClick={(ev) => ev.stopPropagation()}
            >
              Home
            </NavigationLink>
          </Link>
          <Link href={"/projects"} passHref>
            <NavigationLink
              style={
                router.route === "/projects"
                  ? { color: `${COLORS.orange}` }
                  : null
              }
              onClick={(ev) => ev.stopPropagation()}
            >
              Projects
            </NavigationLink>
          </Link>
          <Link href={"/archive"} passHref>
            <NavigationLink
              style={
                router.route === "/archive"
                  ? { color: `${COLORS.orange}` }
                  : null
              }
              onClick={(ev) => ev.stopPropagation()}
            >
              Archive
            </NavigationLink>
          </Link>
          <Link href={"/contact"} passHref>
            <NavigationLink
              style={
                router.route === "/contact"
                  ? { color: `${COLORS.orange}` }
                  : null
              }
              onClick={(ev) => ev.stopPropagation()}
            >
              Contact Me
            </NavigationLink>
          </Link>
        </>
      ) : (
        <FaHamburger style={{ color: `${COLORS.orange}` }} />
      )}
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
  display: inline-block;
  font-weight: bold;
  color: ${COLORS.white};
  text-decoration: none;
  transition: all 0.5s;
  width: auto;

  &:hover {
    color: ${COLORS.orange};
  }
`;
