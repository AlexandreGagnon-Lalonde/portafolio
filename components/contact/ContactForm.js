import styled from "styled-components";
import Link from "next/link";

import { COLORS } from "../../public/constant";

export default function ContactForm() {
  return (
    <Form>
        <FormInputs>
          <MessagerInfo>
            <NameContainer>
              <label htmlFor={"name"}>Full name</label>
              <input type={"text"} id={"name"} name={"name"} required />
            </NameContainer>
            <EmailContainer>
              <label htmlFor={"email"}>Email</label>
              <input type={"email"} id={"email"} name={"email"} required />
            </EmailContainer>
            <SubjectContainer>
              <label htmlFor={"subject"}>Subject</label>
              <input type={"text"} id={"subject"} name={"subject"} required />
            </SubjectContainer>
          </MessagerInfo>
          <MessageContainer>
            <label htmlFor={"message"}>Message</label>
            <TextArea id={"message"} name={"message"} rows={'10'} cols={'50'} />
          </MessageContainer>
        </FormInputs>
      <SubmitButton>Let's get it</SubmitButton>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
  justify-content: space-around;
  background-color: ${COLORS.yellow};
  padding: 25px;
  border-radius: 10px;
`;
const FormInputs = styled.div`
display: flex;
  justify-content: space-around;
margin-bottom: 30px;
`
const MessagerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const TextArea = styled.textarea`
  resize: none;
`;
const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const EmailContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const SubjectContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const SubmitButton = styled.button`

`