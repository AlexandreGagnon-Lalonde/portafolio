import styled from "styled-components";
import Link from "next/link";
import { withTranslation } from '../../i18n'

const HomeLink = ({ t }) => {
  return (
    <Link href={"/"} passHref>
      <p>{t('description')}</p>
      <NavigationLink>Alexandre GL</NavigationLink>
    </Link>
  );
}

const NavigationLink = styled.a`
  display: inline-block;
  font-weight: bold;
  color: ${(props) => props.theme.navigationHomeLinkColor};
  text-decoration: none;
  transition: all 0.3s;
  width: auto;
  letter-spacing: 0px;
  background-color: ${(props) => props.theme.navigationHomeLinkBackground};

  &:hover {
    color: ${(props) => props.theme.navigationHomeLinkHoverColor};
    text-decoration: none;
  }
`;

export default withTranslation('common')(HomeLink)