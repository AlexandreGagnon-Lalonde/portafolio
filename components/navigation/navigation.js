import styled from "styled-components";
import { useState } from "react";

import { FaHamburger } from "react-icons/fa";

import AboutMeLink from "./aboutMeLink";
import ProjectsLink from "./projectsLink";
import ArchiveLink from "./archiveLink";
import ContactLink from "./contactLink";

import { COLORS } from "../../pages/constant";

export default function Navigation() {
  const [navBar, setNavBar] = useState(true);

  const handleClick = (ev) => {
    setNavBar(!navBar);
  };

  return (
    <LinkContainer onClick={handleClick}>
      {navBar ? (
        <>
          <AboutMeLink />
          <ProjectsLink />
          <ArchiveLink />
          <ContactLink />
        </>
      ) : (
        <FaHamburger style={{ color: `${COLORS.orange}` }} />
      )}
    </LinkContainer>
  );
}

const LinkContainer = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  background-color: ${COLORS.blue};
  padding: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
`;
