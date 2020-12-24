import styled from "styled-components";
import { COLORS, YoutubeStyles } from "../../../public/constant";
import OBAImage from "./OBAImage";
import OBADetails from "./OBADetails";

export default function MainProjectOBA() {
  return (
    <ProjectContainer>
      <OBAImage />
      <OBADetails />
    </ProjectContainer>
  );
}

const ProjectContainer = styled.div`
  background-color: ${props => props.theme.mainCardBackground};
  color: ${props => props.theme.mainCardTextColor};
  border-radius: 20px;
  width: 65%;
  margin: 60px auto auto auto;
  padding-bottom: 30px;
`;
