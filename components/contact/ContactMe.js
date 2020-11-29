import styled from "styled-components";
import Link from "next/link";

import ContactForm from './ContactForm';
import PlatformLink from './PlatformLink';

import { VscGithubInverted, VscGithub } from "react-icons/vsc";
import { SiNetlify } from "react-icons/si";

import { COLORS } from "../../public/constant";

export default function ContactMe () {
  return (
    <ContactContainer id={'contact'}>
      <ContactForm />
    </ContactContainer>
  );
};

const ContactContainer = styled.div`
background: rgb(255,218,119);
background: linear-gradient(0deg, rgba(255,218,119,1) 90%, rgba(251,246,240,1) 100%);
`