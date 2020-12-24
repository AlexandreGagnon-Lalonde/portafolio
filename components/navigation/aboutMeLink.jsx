import styled from "styled-components";
import Link from "next/link";

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
  color: ${(props) => props.theme.navigationAboutMeLinkColor};
  text-decoration: none;
  transition: all 0.3s;
  width: auto;
  z-index: 1;

  &:hover {
    color: ${(props) => props.theme.navigationAboutMeLinkHoverColor};
    text-decoration: none;
  }
`;
