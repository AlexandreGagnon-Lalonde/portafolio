import styled from "styled-components";
import Link from "next/link";

import { VscGithubInverted, VscGithub } from "react-icons/vsc";
import { SiLinkedin } from "react-icons/si";
import { HiOutlineMail } from 'react-icons/hi'

import { COLORS } from "../../public/constant";

export default function PlatformLinks () {
  return (
    <LinkyContainer id={'contact'}>
      <Linky href={'https://github.com/AlexandreGagnon-Lalonde'}><VscGithubInverted style={{ fontSize: '1.5em'}} /></Linky>
      <Linky href={'https://www.linkedin.com/in/alexandregagnonlalonde/'}><SiLinkedin style={{ fontSize: '1.5em'}} /></Linky>
      <Linky href={'mailto:alexandregagnonlalonde@gmail.com'}><HiOutlineMail style={{ fontSize: '1.5em'}} /></Linky>
    </LinkyContainer>
  );
};

const LinkyContainer = styled.div`
  width: 100%;
  padding: 40px 0 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 80px;
border-top-left-radius: 40px;
border-top-right-radius: 40px;
background: ${COLORS.blue};
background: linear-gradient(0deg, ${COLORS.blue} 60%, rgba(251,246,240,1) 100%);

`
const Linky = styled.a`
  color: ${COLORS.white};
  background-color: ${COLORS.orange};
  padding: 15px;
  border-radius: 10px;
  opacity: 0.7;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 1;
    color: ${COLORS.white};
  }
`