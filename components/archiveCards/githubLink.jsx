import Link from "next/link";
import styled from "styled-components";
import { VscGithubInverted } from "react-icons/vsc";

export default function GitHubLink({ github, index }) {
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
    <Link href={`${github}`} passHref>
      <PlatformLink>
        <VscGithubInverted />
      </PlatformLink>
    </Link>
  );
}
