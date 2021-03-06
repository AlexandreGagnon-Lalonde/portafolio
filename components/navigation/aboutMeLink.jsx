import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { language } from "../../public/constant";

export default function AboutMeLink() {
  const router = useRouter();
  let locale = localStorage.getItem('locale') || router.locale;
  const translatedLanguage =
    locale === "en" ? language.en : locale === "fr" ? language.fr : locale === "sp" ? language.sp : "";

  return (
    <Link href={"/#about"} passHref>
      <NavigationLink>{translatedLanguage.navBar.about}</NavigationLink>
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
