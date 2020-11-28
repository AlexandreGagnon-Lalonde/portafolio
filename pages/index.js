import Head from "next/head";
import Link from "next/link";

import styled from "styled-components";

import PresentationText from "../components/mainPage/PresentationText";
import Picture from "../components/mainPage/Picture";
import CoolAnimation from "../components/mainPage/CoolAnimation";
import Navigation from "../components/navigation/navigation";

import { COLORS } from "../public/constant";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Portafolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <AboutMeContainer>
        <PresentationText />
        <Picture />
        <CoolAnimation />
      </AboutMeContainer>
      <ProjectContainer></ProjectContainer>
      <ContactMe></ContactMe>
    </div>
  );
}

const AboutMeContainer = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-rows: 60% 40%;
  height: 100vh;
`;
const ProjectContainer = styled.div``
const ContactMe = styled.div``
