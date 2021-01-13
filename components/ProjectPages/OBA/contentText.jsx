import styled from "styled-components";
import { useRouter } from "next/router";
import { en } from "../../../public/constant";
import { fr } from "../../../public/constant";
import { sp } from "../../../public/constant";

export default function ContentText() {
  const router = useRouter();
  const { locale } = router;
  const translatedLanguage =
    locale === "en" ? en : locale === "fr" ? fr : locale === "sp" ? sp : "";

  return (
    <InfoContainer>
      <ContentParagraph>
        {translatedLanguage.OBA.contentText}
      </ContentParagraph>
    </InfoContainer>
  );
}

const InfoContainer = styled.div`
  margin: 40px auto 40px auto;
  width: 80%;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;
const ContentParagraph = styled.p`
  margin: auto 40px;
  text-indent: 2em;
  text-align: justify;
  line-height: 2;
  font-weight: 600;

  @media (max-width: 768px) {
    text-indent: 0;
    margin: 30px;
  }
`;
