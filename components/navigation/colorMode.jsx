import styled from "styled-components";
import useDarkMode from "use-dark-mode";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ColorMode() {
  const darkMode = useDarkMode(true);

  return (
    <>
      <ColorModeButton
        onClick={darkMode.value ? darkMode.disable : darkMode.enable}
      >
        {darkMode.value ? <FiSun /> : <FiMoon />}
      </ColorModeButton>
    </>
  );
}

const ColorModeButton = styled.button`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colorModeButton};
  transition: all 0.3s;
  
  &:hover {
    color: ${props => props.theme.colorModeButtonHover};
  }
`;
