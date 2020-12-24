import styled from "styled-components";
import Link from "next/link";

export default function HomeLink() {
  return (
    <Link href={"/"} passHref>
      <NavigationLink>Alexandre GL</NavigationLink>
    </Link>
  );
}

const NavigationLink = styled.a`
  display: inline-block;
  font-weight: bold;
  color: ${(props) => props.theme.navigationHomeLinkColor};
  text-decoration: none;
  transition: all 0.3s;
  width: auto;
  letter-spacing: 0px;
  background-color: ${(props) => props.theme.navigationHomeLinkBackground};

  &:hover {
    color: ${(props) => props.theme.navigationHomeLinkHoverColor};
    text-decoration: none;
  }
`;
