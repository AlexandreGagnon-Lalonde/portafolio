import Head from "next/head";
import styled from "styled-components";
import GeneralInfo from "../../../components/ProjectPages/OBA/generalInfo";
import Purpose from "../../../components/ProjectPages/OBA/purpose";
import Content from "../../../components/ProjectPages/OBA/content";
import Navigation from "../../../components/navigation/navigation";
import PlatformLinks from "../../../components/contact/PlatformLink";

const OBA = () => {
  return (
    <>
      <Head>
        <title>OBA</title>
      </Head>
      <Navigation />
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
};

const FirstPartOfProject = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const SecondPartOfProject = styled.div``;
export default OBA;
