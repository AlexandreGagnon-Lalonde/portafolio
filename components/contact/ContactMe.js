import styled from "styled-components";
import Link from "next/link";

import PlatformLink from './PlatformLink';

import { VscGithubInverted, VscGithub } from "react-icons/vsc";
import { SiNetlify } from "react-icons/si";

import { COLORS } from "../../public/constant";

export default function ContactMe () {
  return (
      <PlatformLink />
  );
};

const ContactContainer = styled.div`
margin-top: 80px;
border-top-left-radius: 40px;
border-top-right-radius: 40px;
background: ${COLORS.blue};
background: linear-gradient(0deg, ${COLORS.blue} 90%, rgba(251,246,240,1) 100%);
`