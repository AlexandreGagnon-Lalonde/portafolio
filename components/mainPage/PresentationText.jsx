import styled from "styled-components";
import { COLORS } from "../../public/constant";

export default function PresentationText() {
  return (
    <TextContainer>
      <FirstParagraph>
        Look on the right! This is me. You might find my shirt strange... I was
        in Thailand after the 14th IDBF World Dragon Boat Racing Championships,
        but that story is for some other time. The reason you're here is
        probably because I can help you with <Emphasis>&lt;Dev&gt;</Emphasis>
        developing a website
        <Emphasis>&lt;/Dev&gt;</Emphasis>. Well, look no further! Under your
        eyes is my web portfolio and everything you need to know about my
        skills.{" "}
      </FirstParagraph>
      <SecondParagraph>
        Before I let you go explore my work let me tell you a little bit about
        myself. <Emphasis>Disciplined</Emphasis>, <Emphasis>adaptable</Emphasis>{" "}
        and <Emphasis>fast-learner</Emphasis> are the most frequent words you
        would hear if you asked someone who knows me to describe me. Coding
        makes me feel like a child again, it makes me feel like i'm playing with
        Legos! You have so many different blocks and so many paths you can take
        to create something cool.
      </SecondParagraph>
    </TextContainer>
  );
}

const TextContainer = styled.div`
  width: 80%;
  margin: auto;
  text-indent: 2em;
  text-align: justify;
  @media (max-width: 768px) {
    text-indent: 0;
  }
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
const Emphasis = styled.span`
  font-weight: bold;
  font-style: italic;
  color: ${props => props.theme.presentationNameEmphasisColor};
`;
