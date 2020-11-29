import Head from "next/head";
import Link from "next/link";

import styled from "styled-components";

import PresentationText from "../components/mainPage/PresentationText";
import Picture from "../components/mainPage/Picture";
import CoolAnimation from "../components/mainPage/CoolAnimation";
import Navigation from "../components/navigation/navigation";
import MainProjectLungor from "../components/principalCards/lungor/MainProjectLungor";
import MainProjectOBA from "../components/principalCards/oba/MainProjectOBA";
import MoreMinorProjects from "../components/mainPage/MoreMinorProjects";
import ContactForm from '../components/contact/ContactForm'
import PlatformLink from '../components/contact/PlatformLink'

import { COLORS } from "../public/constant";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Portafolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <AboutMeContainer id={'about'}>
        <PresentationText />
        <Picture />
        <CoolAnimation />
      </AboutMeContainer>
      <ProjectContainer id={'project'}>
        <MainProjectOBA />
        <MainProjectLungor />
        <MoreMinorProjects />
      </ProjectContainer>
      <ContactMe id={'contact'}><ContactForm /><PlatformLink /></ContactMe>
    </div>
  );
}

const AboutMeContainer = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-rows: 60% 40%;
  height: 100vh;
`;
const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: 45% 45% 10%;
  height: 100vh;
`;
const ContactMe = styled.div`
  height: 100vh;
`;
