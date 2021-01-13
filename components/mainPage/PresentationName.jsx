import styled from "styled-components";
import { useRouter } from "next/router";
import { en } from "../../public/constant";
import { fr } from "../../public/constant";
import { sp } from "../../public/constant";

export default function PresentationName() {
  const router = useRouter();
  const { locale } = router;
  const translatedLanguage =
    locale === "en" ? en : locale === "fr" ? fr : locale === "sp" ? sp : "";

  return (
    <NameContainer>
      <Hello>
        {translatedLanguage.mainPage.hello}{" "}
        <ObjectEmphasis>{"{"}</ObjectEmphasis>
      </Hello>
      <ObjectName>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {translatedLanguage.mainPage.nameKey}
        <ObjectEmphasis>:</ObjectEmphasis> Alexandre Gagnon-Lalonde, <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{translatedLanguage.mainPage.jobKey}
        <ObjectEmphasis>:</ObjectEmphasis>
        {translatedLanguage.mainPage.jobValue}
        <br />
        <ObjectEmphasis>{"}"}</ObjectEmphasis>
      </ObjectName>
    </NameContainer>
  );
}

const Hello = styled.h2`
  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;
const NameContainer = styled.div`
  grid-column: 1 / 3;
  margin: 60px auto 20px auto;
`;
const ObjectEmphasis = styled.span`
  font-weight: bold;
  color: ${(props) => props.theme.presentationNameEmphasisColor};
`;
const ObjectName = styled.h2`
  margin-bottom: 50px;

  @media (max-width: 768px) {
    margin-bottom: 0;
    font-size: 1.5em;
  }
`;
