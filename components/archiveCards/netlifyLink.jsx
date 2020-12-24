import Link from "next/link";
import styled from "styled-components";
import { SiNetlify } from "react-icons/si";

export default function NetlifyLink({ netlify, index }) {
  const PlatformLink = styled.a`
    color: ${(props) => props.theme.archivePlatformColor};
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      color: ${index % 2
        ? (props) => props.theme.archiveOdd
        : (props) => props.theme.archiveEven};
      transform: scale(1.3);
    }
  `;

  return (
    <Link href={`${netlify}`} passHref>
      <PlatformLink>
        <SiNetlify />
      </PlatformLink>
    </Link>
  );
}
