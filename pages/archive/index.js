import styled from "styled-components";

import ToDoList from "../../components/archiveCards/todolist";
import PatatapClone from "../../components/archiveCards/patatapClone";
import SortingAlgo from '../../components/archiveCards/sortingAlgo'
import HomeLink from '../../components/navigation/HomeLink'
import Navigation from '../../components/navigation/navigation';
import ScoreKeeper from '../../components/archiveCards/scoreKeeper'
import GuessingGame from '../../components/archiveCards/guessingGame'
import Library from '../../components/archiveCards/library'
import FrogRace from '../../components/archiveCards/frogRace'
import DotGame from '../../components/archiveCards/dotGame'
import Stopwatch from '../../components/archiveCards/stopwatch'
import GeneratedArt from '../../components/archiveCards/generatedArt'
const Archive = () => {
  return (
    <>
      <Navigation />
      <Container>
        <ToDoList />
        <PatatapClone />
        <SortingAlgo />
        <ScoreKeeper />
        <GuessingGame />
        <Library />
        <FrogRace />
        <DotGame />
        <Stopwatch />
        <GeneratedArt />
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
