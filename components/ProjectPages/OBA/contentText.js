import styled from "styled-components";

export default function ContentText() {
  return <InfoContainer>
      <ContentParagraph>I would definitely take more time before getting into the core of the application before doing anything major. Whether it's the choice of packages, date picker or just general behavior. After a couple of discussions with my technical coaches, I did change my database structure a lot. This change was necessary so that I don't have any duplicated data. Obviously it's not perfect, but satisfaction is the main feeling I have looking back at this project.
      </ContentParagraph>
    </InfoContainer>
}

const InfoContainer = styled.div`
  margin: 40px auto 40px auto;
  width: 80%;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
  }

`
const ContentParagraph = styled.p`
margin: auto 40px;
text-indent: 2em;
text-align: justify;
line-height: 2;
font-weight: 600;

@media (max-width: 768px) {
  text-indent: 0;
  margin: 30px;
}

`