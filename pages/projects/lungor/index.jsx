import Head from "next/head";
import styled from "styled-components";
import Navigation from "../../../components/navigation/navigation";

export default function Lungor() {
  return (
    <>
      <Head>
        <title>Lungor</title>
      </Head>
      <Navigation />
      <div>
        <ProjectTechnologies>
          <Technology>React</Technology>
          <Technology>Node</Technology>
          <Technology>Mongo</Technology>
        </ProjectTechnologies>
      </div>
    </>
  );
}

const ProjectTechnologies = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const Technology = styled.li``;
