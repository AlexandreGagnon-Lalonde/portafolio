import Head from "next/head";
import styled from "styled-components";

import GeneralInfo from "../../../components/principalCards/oba/generalInfo";
import Purpose from "../../../components/principalCards/oba/purpose";
import Content from "../../../components/principalCards/oba/content";
import Lesson from "../../../components/principalCards/oba/lesson.js";
import SideBarNav from "../../../components/principalCards/oba/sidebarNav";
import Navigation from "../../../components/navigation/navigation";
import HomeLink from "../../../components/navigation/HomeLink";
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

const ProjectTechnologies = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const Technology = styled.li``;
const FirstPartOfProject = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }

`;
const SecondPartOfProject = styled.div``;
export default OBA;
