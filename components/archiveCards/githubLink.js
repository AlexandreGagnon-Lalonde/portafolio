import Link from "next/link";
import styled from "styled-components";
import { VscGithubInverted } from "react-icons/vsc";
import { COLORS } from "../../public/constant";

export default function GitHubLink({ github, index }) {
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
    <Link href={`${github}`} passHref>
      <PlatformLink>
        <VscGithubInverted />
      </PlatformLink>
    </Link>
  );
}
