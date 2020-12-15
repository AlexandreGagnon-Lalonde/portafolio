import styled from "styled-components";
import Picture from "./Picture";
import { COLORS, ABOUTMETEXT } from "../../public/constant";

export default function PresentationText() {
  return (
    <Container>
      <NameContainer>
        <Hello>
          Hello! <ObjectEmphasis>{"{"}</ObjectEmphasis>
        </Hello>
        <ObjectName>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name
          <ObjectEmphasis>:</ObjectEmphasis> Alexandre Gagnon-Lalonde, <br />{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;aspiration
          <ObjectEmphasis>:</ObjectEmphasis> Web Developer <br />
          <ObjectEmphasis>{"}"}</ObjectEmphasis>
        </ObjectName>
      </NameContainer>
      <Picture />
      <TextContainer>
        <FirstParagraph>
          Look on the right! This is me. You might find my shirt strange... I
          was in Thailand after the 14th IDBF World Dragon Boat Racing
          Championships, but that story is for some other time. The reason
          you're here is probably because I can help you with{" "}
          <Emphasis>&lt;Dev&gt;</Emphasis>
          developing a website
          <Emphasis>&lt;/Dev&gt;</Emphasis>. Well, look no further! Under your
          eyes is my web portfolio and everything you need to know about my
          skills.{" "}
        </FirstParagraph>
        <SecondParagraph>
          Before I let you go explore my work let me tell you a little bit about
          myself. <Emphasis>Disciplined</Emphasis>,{" "}
          <Emphasis>adaptable</Emphasis> and <Emphasis>fast-learner</Emphasis>{" "}
          are the most frequent words you would hear if you asked someone who
          knows me to describe me. Coding makes me feel like a child again, it
          makes me feel like i'm playing with Legos! You have so many different
          blocks and so many paths you can take to create something cool.
        </SecondParagraph>
      </TextContainer>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-rows: 30% 70%;
  min-height: 100vh;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
const TextContainer = styled.div`
  width: 80%;
  margin: auto;
  text-indent: 2em;
  text-align: justify;
  @media (max-width: 768px) {
    text-indent: 0;
  }
`;
const ObjectName = styled.h2`
  margin-bottom: 50px;

  @media (max-width: 768px) {
    margin-bottom: 0;
    font-size: 1.5em;
  }
`;
const Hello = styled.h2`
  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;
const NameContainer = styled.div`
  grid-column: 1 / 3;
  margin: 60px auto 20px auto;
`;
const FirstParagraph = styled.p`
  line-height: 2;
`;
const SecondParagraph = styled.p`
  line-height: 2;
  margin-top: 50px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;
const ObjectEmphasis = styled.span`
  font-weight: bold;
  color: ${COLORS.orange};
w`;
const Emphasis = styled.span`
  font-weight: bold;
  font-style: italic;
  color: ${COLORS.orange};
`;
