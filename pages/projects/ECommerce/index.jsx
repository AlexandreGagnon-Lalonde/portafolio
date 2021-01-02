import Head from "next/head";
import styled from "styled-components";
import Navigation from "../../../components/navigation/navigation";
import ScrollToTopButton from '../../../components/mainPage/ScrollToTopButton';

export default function ECommerce() {
  return (
    <>
      <Head>
        <title>OBA</title>
      </Head>
      <Navigation />
      <ScrollToTopButton />
      <AppTitle>Wearables E-Commerce</AppTitle>
    </>
  );
}

const FirstPartOfProject = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const AppTitle = styled.h3`
  width: 100%;
  text-shadow: 0px 0px 2px #101010;
  font-family: Georgia, serif;
  font-size: 1.5em;
  letter-spacing: 3px;
  word-spacing: 2px;
  color: #101010;
  font-weight: 700;
  text-decoration: none;
  font-style: normal;
  font-variant: small-caps;
  text-transform: none;
  margin: 60px 0 40px 60px;
  color: ${props => props.theme.projectPageTitle};

  @media (max-width: 768px) {
    margin: 60px auto 40px auto;
    text-align: center;
  }
`;
