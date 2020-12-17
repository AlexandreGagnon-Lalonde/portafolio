import Head from "next/head";
import styled from "styled-components";
import GeneralInfo from "../../../components/principalCards/oba/generalInfo";
import Purpose from "../../../components/principalCards/oba/purpose";
import Content from "../../../components/principalCards/oba/content";
import Navigation from "../../../components/navigation/navigation";
import ContactMe from "../../../components/contact/ContactMe";

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
        <ContactMe id={"contact"} />
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
