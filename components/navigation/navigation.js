import styled from "styled-components";
import { useState } from "react";

import { FaHamburger, FaRegWindowMinimize } from "react-icons/fa";
import { FiMinimize } from "react-icons/fi";
import { VscChromeMinimize } from "react-icons/vsc";

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

  const minimizeMenuStyles = {
    color: `${COLORS.white}`,
    transform: "scale(3)",
    margin: "auto",
  };

  return (
    <LinkContainer>
      {navBar ? (
        <>
          <VscChromeMinimize style={minimizeMenuStyles} onClick={handleClick} />
          <AboutMeLink />
          <ProjectsLink />
          <ArchiveLink />
          <ContactLink />
        </>
      ) : (
        <FaHamburger
          style={{ color: `${COLORS.orange}` }}
          onClick={handleClick}
        />
      )}
    </LinkContainer>
  );
}

const LinkContainer = styled.div`
  position: fixed;
  top: 5px;
  right: 5px;
  background-color: ${COLORS.blue};
  padding: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
`;
