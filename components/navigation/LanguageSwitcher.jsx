import styled from "styled-components";
import { useRouter } from "next/router";

export default function LanguageSwitcher() {
  const router = useRouter();

  const handleLanguageChange = (e) => {
    const locale = e.target.value;
    localStorage.setItem("locale", locale);
    router.push("/", "/", { locale });
  };

  return (
    <>
      <SelectMenu
        onChange={handleLanguageChange}
        value={localStorage.getItem("locale")}
      >
        <option value={"en"}>En</option>
        <option value={"fr"}>Fr</option>
        {/* <option value={"sp"}>Sp</option> */}
      </SelectMenu>
    </>
  );
}

const SelectMenu = styled.select`
  appearance: none;
  border: none;
  background-color: ${(props) => props.theme.navigationBackground};
  color: ${(props) => props.theme.navigationHomeLinkColor};
  font-weight: bold;
  padding: 0 5px;
  transition: all 0.3s;

  &:hover {
    color: ${(props) => props.theme.navigationHomeLinkHoverColor};
    text-decoration: none;
  }
`;
