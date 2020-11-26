import Head from "next/head";
import styled from "styled-components";

const OBA = () => {
  return (
    <>
      <Head>
        <title>OBA</title>
      </Head>

      <div>
        <ProjectTechnologies>
          <Technology>React</Technology>
          <Technology>Node</Technology>
          <Technology>Mongo</Technology>
        </ProjectTechnologies>
      </div>
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
