import styled from "styled-components";
import Link from "next/link";

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
  color: ${(props) => props.theme.navigationProjectLinkColor};
  text-decoration: none;
  transition: all 0.3s;
  width: auto;

  &:hover {
    color: ${(props) => props.theme.navigationProjectLinkHoverColor};
    text-decoration: none;
  }
`;
