import Head from "next/head";
import styled from "styled-components";
import GeneralInfo from "../../../components/ProjectPages/OBA/generalInfo";
import Purpose from "../../../components/ProjectPages/OBA/purpose";
import Content from "../../../components/ProjectPages/OBA/content";
import Navigation from "../../../components/navigation/navigation";
import PlatformLinks from "../../../components/contact/PlatformLink";
import ScrollToTopButton from '../../../components/mainPage/ScrollToTopButton';

export default function OBA() {
  return (
    <>
      <Head>
        <title>OBA</title>
      </Head>
      <Navigation />
      <ScrollToTopButton />
      <FirstPartOfProject>
        <GeneralInfo id={"intro"} />
        <Purpose id={"purpose"} />
      </FirstPartOfProject>
      <SecondPartOfProject>
        <Content id={"content"} />
        <PlatformLinks id={"contact"} />
      </SecondPartOfProject>
    </>
  );
}

const FirstPartOfProject = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const SecondPartOfProject = styled.div``;
