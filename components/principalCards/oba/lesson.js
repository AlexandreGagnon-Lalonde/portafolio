import styled from "styled-components";

import LessonText from '../Lesson/lessonText';
import LessonImage from '../Lesson/lessonImage';

export default function Lesson() {
  return <InfoContainer>
      <LessonImage src={'/assets/4projfill.jpg'} />
      <LessonText />
    </InfoContainer>
}

const InfoContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 100vh;
`