import styled from "styled-components";
import LungorImage from "./LungorImage";
import LungorDetails from "./LungorDetails";

export default function MainProjectLungor() {
  return (
    <ProjectContainer>
      <LungorImage />
      <LungorDetails />
    </ProjectContainer>
  );
}

const ProjectContainer = styled.div`
  background-color: ${(props) => props.theme.mainCardBackground};
  color: ${(props) => props.theme.mainCardTextColor};
  border-radius: 20px;
  width: 65%;
  margin: 60px auto auto auto;
  padding-bottom: 30px;
  border: ${(props) => props.theme.mainCardBorder};
`;
