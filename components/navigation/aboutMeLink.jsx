import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { en } from "../../public/constant";
import { fr } from "../../public/constant";
import { sp } from "../../public/constant";

export default function AboutMeLink() {
  const router = useRouter();
  const { locale } = router;
  const translatedLanguage =
    locale === "en" ? en : locale === "fr" ? fr : locale === "sp" ? sp : "";

  return (
    <Link href={"/#about"} passHref>
      <NavigationLink>{translatedLanguage.about}</NavigationLink>
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
