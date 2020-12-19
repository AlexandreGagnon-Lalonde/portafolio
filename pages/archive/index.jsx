import Head from "next/head";
import styled from "styled-components";
import Navigation from "../../components/navigation/navigation";
import ArchiveItem from "../../components/archiveCards/archiveItem";
import { ArchiveInfo } from "../../public/constant";

export default function Archive() {
  return (
    <>
      <Head>
        <title>Archive</title>
      </Head>
      <Navigation />
      <Container>
        {ArchiveInfo.map((info, index) => {
          return <ArchiveItem ProjectInfo={info} index={index} />;
        })}
      </Container>
    </>
  );
}

const Container = styled.div`
  margin: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1.5em;
`;
