import styled from "styled-components";
import { useRouter } from "next/router";
import { language } from "../../../../public/constant";

export default function OBADetails() {
  const router = useRouter();
  let locale = localStorage.getItem('locale') || router.locale;
  const translatedLanguage =
    locale === "en" ? language.en : locale === "fr" ? language.fr : locale === "sp" ? language.sp : "";


  return (
    <ProjectDetails>
      <ProjectHeader>
        <ProjectTitle>{translatedLanguage.mainPage.OBA.title}</ProjectTitle>
        <ProjectLink href={"/projects/oba"}>
          {translatedLanguage.mainPage.OBA.continue}
        </ProjectLink>
      </ProjectHeader>
      <ProjectBio>{translatedLanguage.mainPage.OBA.summary}</ProjectBio>
    </ProjectDetails>
  );
}

const ProjectTitle = styled.h3`
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 1em;
  }
`;
const ProjectDetails = styled.div`
  margin: 10px 20px 0 20px;
`;
const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
const ProjectBio = styled.p`
  color: ${(props) => props.theme.mainCardTextColor};
`;
const ProjectLink = styled.a`
  text-align: right;
  color: ${(props) => props.theme.mainCardLinkColor};
  font-weight: bold;
  font-size: 1.25em;
  text-decoration: none;
  transition: all 0.3s;

  &:hover {
    color: ${(props) => props.theme.mainCardLinkHoverColor};
    text-decoration: none;
  }
  @media (max-width: 768px) {
    font-size: 1em;
  }
`;
