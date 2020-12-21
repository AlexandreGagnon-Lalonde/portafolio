import Head from "next/head";
import Presentation from "../components/mainPage/Presentation";
import Navigation from "../components/navigation/navigation";
import PlatformLinks from "../components/contact/PlatformLink";
import ScrollToTopButton from "../components/mainPage/ScrollToTopButton";
import CarouselComponent from "../components/mainPage/CarouselComponent";
import TechnologiesCarousel from '../components/mainPage/TechnologiesCarousel';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portafolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Presentation />
      <TechnologiesCarousel />
      <CarouselComponent />
      <PlatformLinks />
      <ScrollToTopButton />
    </>
  );
}
