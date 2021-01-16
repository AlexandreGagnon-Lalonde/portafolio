import styled from "styled-components";
import CollabImage from "./CollabImage";
import CollabDetails from "./CollabDetails";

export default function MainProjectECommerce() {
  return (
    <ProjectContainer>
      <CollabImage />
      <CollabDetails />
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
