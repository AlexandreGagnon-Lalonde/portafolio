import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

import { COLORS } from "../../public/constant";

export default function ProjectsLink() {
  return (
    <Link href={"/#project"} passHref>
      <NavigationLink>Projects</NavigationLink>
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

  &:hover {
    color: ${COLORS.orange};
    text-decoration: none;
  }
`;
