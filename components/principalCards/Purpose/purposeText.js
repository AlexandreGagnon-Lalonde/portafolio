import styled from "styled-components";

import { COLORS } from "../../../public/constant";

export default function PurposeText() {
  return (
    <InfoContainer>
      <PurposeParagraph>
        The project is also adapted for a seemless mobile experience. The UI is
        pretty simple, all the boxes of content are in order of importance. Dark
        mode is rather popular these days. I decided to go with only the dark
        theme to save the users eyes since adding that functionality would've
        made me late for the deadline.
      </PurposeParagraph>
      <GenericAnimation>a</GenericAnimation>
      <PurposeParagraph>
        MongoDB is the main database used to contain the data useful for the
        users and the classes. It would be interesting to see if SQL would be a
        better use rather than collecting all the users data for a specific
        information. The interactions between the front-end, the back-end and
        the database were quite straightforward, but the main issue is to
        structure all those interactions together to make a smooth relation
        between the stacks. The amount of planification required for this kind
        of project took me by surprise.
      </PurposeParagraph>
    </InfoContainer>
  );
}

const InfoContainer = styled.div`
  width: 100%;
  height: 100vh;
`;
const PurposeParagraph = styled.p`
  margin: 20px 60px auto 30px;
  text-indent: 2em;
  text-align: justify;
  line-height: 2;
  font-weight: 600;
`;
const GenericAnimation = styled.div`
  margin: 100px auto;
`