import styled from "styled-components";
import Link from "next/link";

import { VscGithubInverted, VscGithub } from "react-icons/vsc";
import { SiLinkedin } from "react-icons/si";

import { COLORS } from "../../public/constant";

export default function PlatformLinks () {
  return (
    <LinkyContainer>
      <Linky href={'https://github.com/AlexandreGagnon-Lalonde'}><VscGithubInverted style={{ fontSize: '1.5em'}} /></Linky>
      <Linky href={'https://www.linkedin.com/in/alexandregagnonlalonde/'}><SiLinkedin style={{ fontSize: '1.5em'}} /></Linky>
    </LinkyContainer>
  );
};

const LinkyContainer = styled.div`
  width: 65px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 15%;
`
const Linky = styled.a`
  color: ${COLORS.white};
  background-color: ${COLORS.orange};
  padding: 20px;
  border-radius: 10px;
  opacity: 0.8;
  transition: all 0.2s;

  &:hover {
    opacity: 1;
  }
`