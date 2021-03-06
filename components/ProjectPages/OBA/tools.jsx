import styled from "styled-components";
import TechnologiesAnimation from "./TechnologiesAnimation";
import { useRouter } from "next/router";
import { language } from "../../../public/constant";

export default function Tools() {
  const locale = localStorage.getItem('locale')
  const translatedLanguage =
    locale === "en" ? language.en : locale === "fr" ? language.fr : locale === "sp" ? language.sp : "";

  return (
    <Container>
      <AppTitle>{translatedLanguage.OBA.title}</AppTitle>
      <GeneralInfoFirstPart>
        {translatedLanguage.OBA.generalInfoFirstPart}
      </GeneralInfoFirstPart>
      <TechnologiesAnimation />
      <GeneralInfoSecondPart>
        {translatedLanguage.OBA.generalInfoSecondPart}
      </GeneralInfoSecondPart>
    </Container>
  );
}

const Container = styled.div``;
const AppTitle = styled.h3`
  width: 100%;
  text-shadow: 0px 0px 2px #101010;
  font-family: Georgia, serif;
  font-size: 1.5em;
  letter-spacing: 3px;
  word-spacing: 2px;
  color: #101010;
  font-weight: 700;
  text-decoration: none;
  font-style: normal;
  font-variant: small-caps;
  text-transform: none;
  margin: 60px 0 40px 60px;
  color: ${(props) => props.theme.projectPageTitle};

  @media (max-width: 768px) {
    margin: 60px auto 40px auto;
    text-align: center;
  }
`;
const GeneralInfoFirstPart = styled.p`
  margin: 20px 60px auto 60px;
  text-indent: 2em;
  text-align: justify;
  line-height: 2;
  font-weight: 600;

  @media (max-width: 768px) {
    text-indent: 0;
    margin: 20px 30px auto 30px;
  }
`;
const GeneralInfoSecondPart = styled.p`
  margin: 20px 60px auto 60px;
  text-indent: 2em;
  text-align: justify;
  line-height: 2;
  font-weight: 600;

  @media (max-width: 768px) {
    text-indent: 0;
    margin: 20px 30px auto 30px;
  }
`;
