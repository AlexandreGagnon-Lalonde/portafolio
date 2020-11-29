import styled from "styled-components";
import Link from "next/link";

import PlatformLink from './PlatformLink';

import { COLORS } from "../../public/constant";

export default function ContactForm() {
  return (
    <FooterContainer>
      <PlatformLink />
      <Form>
          <FormInputs>
            <MessagerInfo>
              <NameContainer>
                <label htmlFor={"name"}>Full name</label>
                <Input type={"text"} id={"name"} name={"name"} required />
              </NameContainer>
              <EmailContainer>
                <label htmlFor={"email"}>Email</label>
                <Input type={"email"} id={"email"} name={"email"} required />
              </EmailContainer>
              <SubjectContainer>
                <label htmlFor={"subject"}>Subject</label>
                <Input type={"text"} id={"subject"} name={"subject"} required />
              </SubjectContainer>
            </MessagerInfo>
            <MessageContainer>
              <label htmlFor={"message"}>Message</label>
              <TextArea id={"message"} name={"message"} rows={'10'} cols={'50'} />
            </MessageContainer>
          </FormInputs>
        <SubmitButton>Let's get it</SubmitButton>
      </Form>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
display: flex;
  justify-content: space-around;
  width: 100%;
  background-color: transparent;
  padding: 50px 25px 25px 25px;
  margin-top: 20px;
`
const Form = styled.form`
  display: flex;
  width: 70%;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 75px;
  margin-right: 50px;
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
  width: 30%;
`;
const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const TextArea = styled.textarea`
  resize: none;
  border: 2px solid ${COLORS.black};
  border-radius: 10px;
  outline: none;
  padding: 5px;

  &:focus {
    border: 2px solid ${COLORS.orange};
  }
`;
const Input = styled.input`
border: 2px solid ${COLORS.black};
border-radius: 10px;
  padding: 5px;
  outline: none;

  &:focus {
    border: 2px solid ${COLORS.orange};
  }
`
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
  background-color: ${COLORS.white};
  border: 2px solid ${COLORS.orange};
  border-radius: 10px;
  padding: 0 5px;
  color: ${COLORS.orange};
  font-weight: bold;
  transition: all 0.2s;
  height: 40px;

  &:hover {
    color: ${COLORS.white};
    border: 2px solid ${COLORS.white};
    background-color: ${COLORS.orange};
    font-size: 1.2em;
  }
`