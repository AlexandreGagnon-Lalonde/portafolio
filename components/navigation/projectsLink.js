import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

import { COLORS } from "../../pages/constant";

export default function ProjectsLink() {
  const route = useRouter().route;

  return (
    <Link href={"/projects"} passHref>
      <NavigationLink
        style={route === "/projects" ? { color: `${COLORS.orange}` } : null}
        onClick={(ev) => ev.stopPropagation()}
      >
        Projects
      </NavigationLink>
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
  }
`;
