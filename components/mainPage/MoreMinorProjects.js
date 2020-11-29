import React from "react";
import styled from "styled-components";
import Link from "next/link";

import { COLORS } from "../../public/constant";

const MoreMinorProjects = () => {
  return (
    <Container>
      <MoreProjectsLink href={"/archive"} passHref>
        <ArchiveLink>Click down here to see the archive</ArchiveLink>
      </MoreProjectsLink>
    </Container>
  );
};

const Container = styled.div`
  grid-row: 1 / 3;
  grid-column: 2;
  background: ${COLORS.blue};
  background: radial-gradient(ellipse at right, ${COLORS.blue} 0%, ${COLORS.white} 50%);
  transition: all 0.2s;

  &:hover {
    background: radial-gradient(ellipse at right, ${COLORS.blue} 30%, ${COLORS.white} 65%);
  }
`
const MoreProjectsLink = styled(Link)`
  height: 100%;
`;
const ArchiveLink = styled.a`
display: block;
  height: 100%;
  text-decoration: none;
  color: ${COLORS.black};
`

export default MoreMinorProjects;
