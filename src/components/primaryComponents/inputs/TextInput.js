import React from "react";
import styled from "styled-components";
import InputLabel from "./Label";

export default ({ name, value, type, label, onChange, light }) => {
  let input = <Input type={type} name={name} value={value} />;
  if (label) {
    input = (
      <InputLabel name={name} label={label} light={light}>
        <Input type={type} name={name} id={name} value={value} onChange={(e) => onChange(e)} light={light} />
      </InputLabel>
    );
  }
  return input;
};

const Input = styled.input`
  background: #f9f9f9;
  border: 1px solid;
  border-color: ${(props) => (props.light ? "#f9f9f9" :"#1c1c1c")};
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  -moz-appearance: textfield;
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
`;
