import React from "react";
import styled from "styled-components";
import Link from "next/link";

const MoreMinorProjects = () => {
  return (
    <Container>
      <MoreProjectsLink href={"/archive"}>
        Archive of minor projects
      </MoreProjectsLink>
    </Container>
  );
};

const Container = styled.div`
  grid-row: 1 / 3;
  grid-column: 2;
`
const MoreProjectsLink = styled(Link)``;

export default MoreMinorProjects;
