import styled from "styled-components";

import LessonText from "../Lesson/lessonText";
import LessonImage from "../Lesson/lessonImage";

export default function Lesson() {
  return (
    <InfoContainer>
      <LessonImage src={"/static/mainapp.png"} />
    </InfoContainer>
  );
}

const InfoContainer = styled.div`
  width: 100%;
`;
