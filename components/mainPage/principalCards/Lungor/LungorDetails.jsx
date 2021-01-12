import styled from "styled-components";
import { COLORS } from "../../../../public/constant";
import { useRouter } from "next/router";
import { en } from "../../../../public/constant";
import { fr } from "../../../../public/constant";
import { sp } from "../../../../public/constant";

export default function OBADetails() {
  const router = useRouter();
  const { locale } = router;
  const translatedLanguage =
    locale === "en" ? en : locale === "fr" ? fr : locale === "sp" ? sp : "";

  return (
    <ProjectDetails>
      <ProjectTitle>{translatedLanguage.mainPage.Lungor.title}</ProjectTitle>
      <ProjectBio>{translatedLanguage.mainPage.Lungor.summary}</ProjectBio>
      {/* <Link href={"/projects/lungor"} passHref>
          <ProjectLink href={"/projects/lungor"}>{translatedLanguage.mainPage.Lungor.continue}</ProjectLink>
        </Link> */}
    </ProjectDetails>
  );
}

const ProjectTitle = styled.h3`
  margin-bottom: 10px;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 1em;
  }
`;
const ProjectDetails = styled.div`
  margin: 10px 20px 20px 20px;
`;
const ProjectBio = styled.p`
  margin-bottom: 10px;
`;
const ProjectLink = styled.a`
  display: block;
  width: 100%;
  text-align: right;
  color: ${COLORS.white};
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s;

  &:hover {
    color: ${COLORS.orange};
  }
`;
