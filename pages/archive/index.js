import styled from "styled-components";

import ToDoList from "../../components/archiveCards/todolist";
import PatatapClone from "../../components/archiveCards/patatapClone";
import SortingAlgo from '../../components/archiveCards/sortingAlgo'
import HomeLink from '../../components/navigation/HomeLink'
import Navigation from '../../components/navigation/navigation';

const Archive = () => {
  return (
    <>
      <Navigation />
      <Container>
        <ToDoList />
        <PatatapClone />
        <SortingAlgo />
      </Container>
    </>
  );
};

const Container = styled.div`
  margin: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1.5em;
`;

export default Archive;
