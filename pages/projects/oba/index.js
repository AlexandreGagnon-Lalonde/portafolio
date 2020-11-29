import Head from "next/head";
import styled from "styled-components";

import GeneralInfo from "../../../components/principalCards/oba/generalInfo";
import Purpose from "../../../components/principalCards/oba/purpose";
import Content from "../../../components/principalCards/oba/content";
import Lesson from '../../../components/principalCards/oba/lesson.js'
import SideBarNav from "../../../components/principalCards/oba/sidebarNav";
import Navigation from '../../../components/navigation/navigation';
import HomeLink from '../../../components/navigation/HomeLink'

const OBA = () => {
  return (
    <>
      <Head>
        <title>OBA</title>
      </Head>
      <HomeLink />
      <SideBarNav />
      <a name={"intro"}>
        <GeneralInfo id={"intro"} />
      </a>
      <a name={"purpose"}>
        <Purpose id={"purpose"} />
      </a>
      <a name={"content"}>
        <Content id={"content"} />
      </a>
    </>
  );
};

const ProjectTechnologies = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const Technology = styled.li``;

export default OBA;
