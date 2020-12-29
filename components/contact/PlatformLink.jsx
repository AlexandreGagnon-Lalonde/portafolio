import styled from "styled-components";
import { VscGithubInverted } from "react-icons/vsc";
import { SiLinkedin } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";

export default function PlatformLinks() {
  return (
    <LinkyContainer id={"contact"}>
      <Linky href={"https://github.com/AlexandreGagnon-Lalonde"}>
        <VscGithubInverted style={{ fontSize: "1.5em" }} />
      </Linky>
      <Linky href={"https://www.linkedin.com/in/alexandregagnonlalonde/"}>
        <SiLinkedin style={{ fontSize: "1.5em" }} />
      </Linky>
      <Linky href={"mailto:alexandregagnonlalonde@gmail.com"}>
        <HiOutlineMail style={{ fontSize: "1.5em" }} />
      </Linky>
    </LinkyContainer>
  );
}

const LinkyContainer = styled.div`
  width: 100%;
  padding: 160px 0 40px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 40px;
  background: ${(props) => props.theme.contactBackground};
  background: ${(props) => props.theme.contactGradient};
`;
const Linky = styled.a`
  color: ${(props) => props.theme.contactIconColor};
  background-color: ${(props) => props.theme.contactIconBackground};
  padding: 15px;
  border-radius: 10px;
  opacity: 0.7;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 1;
    color: ${(props) => props.theme.contactIconHoverColor};
  }
`;
