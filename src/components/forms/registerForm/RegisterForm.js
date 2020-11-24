import React, { useState } from "react";
import styled from "styled-components";
import DarkButton from "../../primaryComponents/buttons/DarkButton";
import TextInput from "../../primaryComponents/inputs/TextInput";
import HeadingOne from "../../headings/HeadingOne";
import LoginForm from "../loginForm/LoginFormContainer";

export default ({openModal, createUser, error}) => {
  const [email, setemail] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [passwordConfirm, setpasswordConfirm] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createUser({
      "email": email,
      "username": username,
      "password": password,
      "password_confirmation": passwordConfirm
    });
    if(!error) {
      openModal(<LoginForm/>)
    };
  };

  return (
    <>
      <HeadingOne light >Register</HeadingOne>
      <FormContainer onSubmit={(event) => handleSubmit(event)}>
        <InputsContainer>
          <TextInput name="email" label="E-mail :" type="email" value={email} onChange={(e)=>setemail(e.target.value)} light />
          <TextInput name="username" label="Pseudonyme :" type="text" value={username} onChange={(e)=>setusername(e.target.value)} light />
          <TextInput name="password" label="Mot de passe :" type="password" value={password} onChange={(e)=>setpassword(e.target.value)} light />
          <TextInput name="password_confirmation" label="Mot de passe (confirmation) :" type="password" value={passwordConfirm} onChange={(e)=>setpasswordConfirm(e.target.value)} light/>
        </InputsContainer>
        <ClickableText onClick={() => openModal(<LoginForm/>)}>
          Déjà inscris ? Se connecter
        </ClickableText>
        <Submit>Valider</Submit>
      </FormContainer>
    </>
  );
};

const FormContainer = styled.form`
  margin-top: 2rem;
`;
const InputsContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Submit = styled(DarkButton)`
  display: block;
  margin: 1.5rem auto 0;
`;
const ClickableText = styled.button.attrs(() => ({
  type: "button",
}))`
  background: none;
  border: none;
  color: #1c1c1c;
  display: block;
  font-family: "Roboto", sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  margin-top: .25em;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
`;
