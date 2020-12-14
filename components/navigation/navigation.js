import styled from "styled-components";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';

import { FaHamburger, FaRegWindowMinimize } from "react-icons/fa";
import { FiMinimize } from "react-icons/fi";
import { VscChromeMinimize } from "react-icons/vsc";
import { GiHamburgerMenu } from "react-icons/gi";

import AboutMeLink from "./aboutMeLink";
import ProjectsLink from "./projectsLink";
import ArchiveLink from "./archiveLink";
import ContactLink from "./contactLink";
import HomeLink from './HomeLink';

import { COLORS } from "../../public/constant";

export default function Navigation() {
  const [minimizedNavBar, setMinimizedNavBar] = useState(true);

  const route = useRouter().pathname;
  console.log(route)

  const handleClick = (ev) => {
    setMinimizedNavBar(!minimizedNavBar);
  };

  const minimizeMenuStyles = {
    color: `${COLORS.white}`,
    transform: "scale(1.5)",
    margin: "auto",
  };

  return (
    <>
      {!minimizedNavBar ? (
        <MinimizedNavBar>
          <GiHamburgerMenu style={minimizeMenuStyles} onClick={handleClick} />
        </MinimizedNavBar>
      ) : route === '/' ? (
        
        <ExpandedNavBar>
          <HomeLink />
          <Links>
            <AboutMeLink />
            <ProjectsLink />
            <ContactLink />
          </Links>
        </ExpandedNavBar>
      ) : <MinimizedNavBar><HomeLink /></MinimizedNavBar>}
    </>
  );
}

const ExpandedNavBar = styled.div`
  position: fixed;
  width: 100%;
  background-color: ${COLORS.blue};
  padding: 10px;
  display: flex;
  justify-content: space-between;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  z-index: 1;
`;
const MinimizedNavBar = styled.div`
  position: fixed;
  top: 0;
  background-color: ${COLORS.blue};
  padding: 10px;
  display: flex;
  justify-content: space-between;
  border-bottom-right-radius: 10px;
  z-index: 1;
`;
const Links = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-around;
`;
