import Link from "next/link";
import styled from "styled-components";
import { SiNetlify } from "react-icons/si";
import { COLORS } from "../../public/constant";

export default function NetlifyLink({ netlify, index }) {
  const PlatformLink = styled.a`
    color: ${COLORS.black};
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      color: ${index % 2 ? COLORS.orange : COLORS.blue};
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
