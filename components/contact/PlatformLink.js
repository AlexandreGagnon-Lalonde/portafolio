import styled from "styled-components";
import Link from "next/link";

import { VscGithubInverted, VscGithub } from "react-icons/vsc";
import { SiNetlify } from "react-icons/si";

import { COLORS } from "../../public/constant";

export default function PlatformLinks () {
  return (
    <LinkyContainer>
      <Linky href={'https://github.com/AlexandreGagnon-Lalonde'}><VscGithubInverted /></Linky>
      <Linky href={'https://www.linkedin.com/in/alexandregagnonlalonde/'}><SiNetlify /></Linky>
    </LinkyContainer>
  );
};

const LinkyContainer = styled.div`
  background-color: ${COLORS.orange};
  width: 65px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`
const Linky = styled.a`
  color: ${COLORS.white};
`