import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

import { COLORS } from "../../pages/constant";

export default function ContactLink() {
  const route = useRouter().route;

  return (
    <Link href={"/contact"} passHref>
      <NavigationLink
        style={route === "/contact" ? { color: `${COLORS.orange}` } : null}
        onClick={(ev) => ev.stopPropagation()}
      >
        Contact Me
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
