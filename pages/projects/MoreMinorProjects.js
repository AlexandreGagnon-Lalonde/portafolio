import React from "react";
import styled from "styled-components";
import Link from "next/link";

const MoreMinorProjects = () => {
  return (
    <MoreProjectsLink href={"/archive"}>
      Archive of minor projects
    </MoreProjectsLink>
  );
};

const MoreProjectsLink = styled(Link)``;

export default MoreMinorProjects;
