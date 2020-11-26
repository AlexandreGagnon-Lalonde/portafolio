import Head from "next/head";
import styled from "styled-components";

import GeneralInfo from "../../../components/principalCards/oba/generalInfo";
import Problems from "../../../components/principalCards/oba/problems";
import Lessons from "../../../components/principalCards/oba/lessons";
import SideBarNav from "../../../components/principalCards/oba/sidebarNav";
import Navigation from '../../../components/navigation/navigation';

const OBA = () => {
  return (
    <>
      <Head>
        <title>OBA</title>
      </Head>
      <Navigation />
      <SideBarNav />
      <a name={"info"}>
        <GeneralInfo id={"info"} />
      </a>
      <a name={"problem"}>
        <Problems id={"problem"} />
      </a>
      <a name={"lesson"}>
        <Lessons id={"lesson"} />
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
