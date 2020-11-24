import React, { useState } from "react";
import styled from "styled-components";
import DarkButton from "../../primaryComponents/buttons/DarkButton";
import TextInput from "../../primaryComponents/inputs/TextInput";
import HeadingOne from "../../headings/HeadingOne";
import RegisterForm from "../registerForm/RegisterFormContainer";

export default ({openModal, closeModal, authentication, error}) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    authentication({
      "email": email,
      "password": password,
    });
    closeModal()
  };

  return (
    <>
      <HeadingOne light >Login</HeadingOne>
      <FormContainer onSubmit={(event) => handleSubmit(event)}>
        <InputsContainer>
          <TextInput name="email" label="E-mail :" type="email" value={email} onChange={(e)=>setemail(e.target.value)} light/>
          <TextInput name="password" label="Mot de passe :" type="password" value={password} onChange={(e)=>setpassword(e.target.value)} light/>
        </InputsContainer>
        <ClickableText onClick={() => openModal(<RegisterForm/>)}>
          Pas de compte ? S’inscrire
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
