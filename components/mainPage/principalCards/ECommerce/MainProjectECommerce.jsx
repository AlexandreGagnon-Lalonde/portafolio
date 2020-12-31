import styled from "styled-components";
import ECommImage from "./ECommImage";
import ECommDetails from "./ECommDetails";

export default function MainProjectECommerce() {
  return (
    <ProjectContainer>
      <ECommImage />
      <ECommDetails />
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
