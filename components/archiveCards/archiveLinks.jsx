import styled from "styled-components";
import GitHubLink from "./githubLink";
import NetlifyLink from "./netlifyLink";

export default function ArchiveLinks({ github, netlify, index }) {
  const ProjectLinks = styled.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    width: calc(100% - 20px);
  `;

  return (
    <ProjectLinks>
      <GitHubLink github={github} index={index} />
      <NetlifyLink netlify={netlify} index={index} />
    </ProjectLinks>
  );
}
