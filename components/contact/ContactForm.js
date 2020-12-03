import React from 'react'
import styled from "styled-components";
import Link from "next/link";

import PlatformLink from "./PlatformLink";

import { COLORS, SERVER_URL } from "../../public/constant";

export default function ContactForm() {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");

  const submitForm = (ev) => {
    ev.preventDefault();

    const messageObject = {
      email,
      name,
      subject,
      message,
    }
console.log(messageObject)
    fetch(SERVER_URL + "/api/submitform", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(messageObject),
    })
      .then((res) => res.json())
      .then(data => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <FooterContainer>
      <PlatformLink />
      <Form onSubmit={submitForm}>
        <FormInputs>
          <MessagerInfo>
            <NameContainer>
              <label htmlFor={"name"}>Full name</label>
              <Input type={"text"} id={"name"} name={"name"} onChange={(ev) => setName(ev.currentTarget.value)} required />
            </NameContainer>
            <EmailContainer>
              <label htmlFor={"email"}>Email</label>
              <Input type={"email"} id={"email"} name={"email"} onChange={(ev) => setEmail(ev.currentTarget.value)} required />
            </EmailContainer>
            <SubjectContainer>
              <label htmlFor={"subject"}>Subject</label>
              <Input type={"text"} id={"subject"} name={"subject"} onChange={(ev) => setSubject(ev.currentTarget.value)} required />
            </SubjectContainer>
          </MessagerInfo>
          <MessageContainer>
            <label htmlFor={"message"}>Message</label>
            <TextArea id={"message"} name={"message"} rows={"10"} cols={"50"} onChange={(ev) => setMessage(ev.currentTarget.value)} />
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
`;
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
`;
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
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

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
  background-color: ${COLORS.white};
  border: 2px solid ${COLORS.black};
  border-radius: 10px;
  padding: 0 5px;
  color: ${COLORS.black};
  font-weight: bold;
  transition: all 0.2s;
  height: 40px;
  width: 60%;
  margin: auto;

  &:hover {
    color: ${COLORS.orange};
    border: 2px solid ${COLORS.orange};
    font-size: 1.1em;
  }
`;
