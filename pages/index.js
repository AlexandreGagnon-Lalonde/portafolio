import Head from "next/head";
import Link from "next/link";
import Carousel from 'react-bootstrap/Carousel'

import styled from "styled-components";

import PresentationText from "../components/mainPage/PresentationText";
import Picture from "../components/mainPage/Picture";
import CoolAnimation from "../components/mainPage/CoolAnimation";
import Navigation from "../components/navigation/navigation";
import MainProjectLungor from "../components/principalCards/lungor/MainProjectLungor";
import MainProjectOBA from "../components/principalCards/oba/MainProjectOBA";
import MoreMinorProjects from "../components/mainPage/MoreMinorProjects";
import PlatformLinks from '../components/contact/PlatformLink'
import ScrollToTopButton from '../components/mainPage/ScrollToTopButton'
export default function Home() {
  return (
    <AppContainer>
      <Head>
        <title>Portafolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <AboutMeContainer id={'about'}>
        <PresentationText />
      </AboutMeContainer>
      <ProjectContainer id={'project'}>
      <Carousel interval={null}>
        <Carousel.Item><MainProjectOBA /></Carousel.Item>
        <Carousel.Item><MainProjectLungor /></Carousel.Item>
        <Carousel.Item><MoreMinorProjects /></Carousel.Item>
      </Carousel>
        
        
        
      </ProjectContainer>
      <PlatformLinks />
      <ScrollToTopButton />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  width: 100%;
`
const AboutMeContainer = styled.div`
`;
const ProjectContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`;
