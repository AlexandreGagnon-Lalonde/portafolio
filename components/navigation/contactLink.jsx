import styled from "styled-components";
import Link from "next/link";
import { COLORS } from "../../public/constant";

export default function ContactLink() {
  return (
    <Link href={"/#contact"} passHref>
      <NavigationLink>Contact</NavigationLink>
    </Link>
  );
}

const NavigationLink = styled.a`
  display: inline-block;
  font-weight: bold;
  color: ${(props) => props.theme.navigationContactLinkColor};
  text-decoration: none;
  transition: all 0.3s;
  width: auto;

  &:hover {
    color: ${(props) => props.theme.navigationContactLinkHoverColor};
    text-decoration: none;
  }
`;
