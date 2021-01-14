import styled from "styled-components";
import { useRouter } from "next/router";
import { language } from "../../public/constant";

export default function PresentationText() {
  const router = useRouter();
  const { locale } = router;
  const translatedLanguage =
    locale === "en" ? language.en : locale === "fr" ? language.fr : locale === "sp" ? language.sp : "";

  return (
    <TextContainer>
      <FirstParagraph>
        {translatedLanguage.mainPage.introFirstParagraph1}
        <Emphasis>&lt;Dev&gt;</Emphasis>
        {translatedLanguage.mainPage.introFirstParagraph2}
        <Emphasis>&lt;/Dev&gt;</Emphasis>
        {translatedLanguage.mainPage.introFirstParagraph3}
      </FirstParagraph>
      <SecondParagraph>
        {translatedLanguage.mainPage.introSecondParagraph1}
        <Emphasis>{translatedLanguage.mainPage.introSecondParagraph2}</Emphasis>
        ,{" "}
        <Emphasis>{translatedLanguage.mainPage.introSecondParagraph3}</Emphasis>{" "}
        {translatedLanguage.mainPage.introSecondParagraph4}
        <Emphasis>{translatedLanguage.mainPage.introSecondParagraph5}</Emphasis>
        {translatedLanguage.mainPage.introSecondParagraph6}
      </SecondParagraph>
    </TextContainer>
  );
}

const TextContainer = styled.div`
  width: 80%;
  margin: auto;
  text-indent: 2em;
  text-align: justify;
  @media (max-width: 768px) {
    text-indent: 0;
  }
`;
const FirstParagraph = styled.p`
  line-height: 2;
`;
const SecondParagraph = styled.p`
  line-height: 2;
  margin-top: 50px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;
const Emphasis = styled.span`
  font-weight: bold;
  font-style: italic;
  color: ${(props) => props.theme.presentationNameEmphasisColor};
`;
