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
import ContactMe from '../components/contact/ContactMe'
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
        <Picture />
      </AboutMeContainer>
      <ProjectContainer id={'project'}>
      <Carousel interval={null}>
        <Carousel.Item><MainProjectOBA /></Carousel.Item>
        <Carousel.Item><MainProjectLungor /></Carousel.Item>
        <Carousel.Item><MoreMinorProjects /></Carousel.Item>
      </Carousel>
        
        
        
      </ProjectContainer>
      <ContactMe />
      <ScrollToTopButton />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  width: 100%;
`
const AboutMeContainer = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  min-height: 100vh;
`;
const ProjectContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`;
