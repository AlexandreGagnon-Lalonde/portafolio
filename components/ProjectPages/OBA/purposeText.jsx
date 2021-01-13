import styled from "styled-components";
import { useRouter } from "next/router";
import { en } from "../../../public/constant";
import { fr } from "../../../public/constant";
import { sp } from "../../../public/constant";

export default function PurposeText() {
  const router = useRouter();
  const { locale } = router;
  const translatedLanguage =
    locale === "en" ? en : locale === "fr" ? fr : locale === "sp" ? sp : "";

  return (
    <InfoContainer>
      <PurposeParagraph>
        {translatedLanguage.OBA.purposeFirstParagraph}
      </PurposeParagraph>
      <PurposeParagraph>
        {translatedLanguage.OBA.purposeSecondParagraph}
      </PurposeParagraph>
    </InfoContainer>
  );
}

const InfoContainer = styled.div`
  width: 100%;
  height: 100vh;
  @media (max-width: 768px) {
    height: 100%;
  }
`;
const PurposeParagraph = styled.p`
  margin: 100px 60px auto 30px;
  text-indent: 2em;
  text-align: justify;
  line-height: 2;
  font-weight: 600;
  @media (max-width: 768px) {
    margin: 30px;
    text-indent: 0;
  }
`;
