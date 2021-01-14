import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { language } from "../../public/constant";

export default function ContactLink() {
  const router = useRouter();
  let locale = localStorage.getItem('locale') || router.locale;
  const translatedLanguage =
    locale === "en" ? language.en : locale === "fr" ? language.fr : locale === "sp" ? language.sp : "";

  return (
    <Link href={"/#contact"} passHref>
      <NavigationLink>{translatedLanguage.navBar.contact}</NavigationLink>
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
