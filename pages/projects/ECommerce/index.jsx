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
    </>
  );
}

const FirstPartOfProject = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
