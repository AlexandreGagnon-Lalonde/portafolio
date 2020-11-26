import React from "react";
import styled from "styled-components";

const Lungor = () => {
  return (
    <div>
      <ProjectTechnologies>
        <Technology>React</Technology>
        <Technology>Node</Technology>
        <Technology>Mongo</Technology>
      </ProjectTechnologies>
    </div>
  );
};
const ProjectTechnologies = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const Technology = styled.li``;

export default Lungor;
