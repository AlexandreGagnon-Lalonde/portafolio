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
    </div>
  );
}

const AboutMeContainer = styled.div`
  display: grid;
  grid-template-columns: 55% 45%;
  grid-template-rows: 55% 45%;
  height: 100vh;
`;
