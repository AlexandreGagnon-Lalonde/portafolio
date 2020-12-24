import styled from "styled-components";
import { useRouter } from "next/router";
import AboutMeLink from "./aboutMeLink";
import ProjectsLink from "./projectsLink";
import ContactLink from "./contactLink";
import HomeLink from "./HomeLink";

export default function Navigation() {
  const route = useRouter().pathname;

  return (
    <>
      {route === "/" ? (
        <ExpandedNavBar>
          <HomeLink />
          <Links>
            <AboutMeLink />
            <ProjectsLink />
            <ContactLink />
          </Links>
        </ExpandedNavBar>
      ) : (
        <MinimizedNavBar>
          <HomeLink />
        </MinimizedNavBar>
      )}
    </>
  );
}

const ExpandedNavBar = styled.div`
  position: fixed;
  width: 100%;
  background-color: ${(props) => props.theme.navigationBackground};
  padding: 10px;
  display: flex;
  justify-content: space-between;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  z-index: 2;
  transition: all 0.3s;
  @media (max-width: 768px) {
    padding: 5px;
  }
`;
const MinimizedNavBar = styled.div`
  position: fixed;
  top: 0;
  background-color: ${(props) => props.theme.navigationBackground};
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
  @media (max-width: 768px) {
    width: 250px;
  }
`;
