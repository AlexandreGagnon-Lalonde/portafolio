import React from "react";
import styled from "styled-components";
import Link from "next/link";

const MoreMinorProjects = () => {
  return (
    <Container>
      <MoreProjectsLink href={"/archive"} passHref>
        <ArchiveLink>Archive of minor projects</ArchiveLink>
      </MoreProjectsLink>
    </Container>
  );
};

const Container = styled.div`
  grid-row: 1 / 3;
  grid-column: 2;
`
const MoreProjectsLink = styled(Link)`
  height: 100%;
`;
const ArchiveLink = styled.a`
display: block;
  height: 100%;
`

export default MoreMinorProjects;
