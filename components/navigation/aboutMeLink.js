import styled from "styled-components";
import Link from "next/link";
import { COLORS } from "../../public/constant";

export default function AboutMeLink() {
  return (
    <Link href={"/#about"} passHref>
      <NavigationLink>About</NavigationLink>
    </Link>
  );
}

const NavigationLink = styled.a`
  display: inline-block;
  font-weight: bold;
  color: ${COLORS.white};
  text-decoration: none;
  transition: all 0.5s;
  width: auto;
  z-index: 1;

  &:hover {
    color: ${COLORS.orange};
    text-decoration: none;
  }
`;
