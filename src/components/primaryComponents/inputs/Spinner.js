import React from "react";
import styled from "styled-components";
import InputLabel from "./Label";

export default ({ name, label, number, onNumberChange,light }) => {
  const spinner = (
    <SpinnerContainer light={light}>
          <SpinnerButton
            onClick={() =>
              number > 0 ? onNumberChange(number - 1) : ""
            }
          >
            -
          </SpinnerButton>
          <Input
            type="number"
            name={name}
            id={name}
            value={number}
            onChange={(e) => onNumberChange(parseInt(e.target.value))}
          />
          <SpinnerButton onClick={() => onNumberChange(number + 1)}>
            +
          </SpinnerButton>
        </SpinnerContainer>
  );
  let input = spinner;
  if (label) {
    input = (
      <InputLabel name={name} label={label}>
        {spinner}
      </InputLabel>
    );
  }
  return input;
};

const SpinnerContainer = styled.div`
  background: #f9f9f9;
  border: 1px solid;
  border-color: ${(props) => (props.light ? "#f9f9f9" :"#1c1c1c")};
  border-radius: 0.5rem;
  display: flex;
  gap: 1rem;
  padding: 5px 0.5rem;
  width: fit-content;
`;
const SpinnerButton = styled.button.attrs(() => ({
  type: "button",
}))`
  background: #1c1c1c;
  border: none;
  border-radius: 0.5rem;
  color: #f9f9f9;
  display: block;
  font-size: 1rem;
  height: 1.5rem;
  width: 1.5rem;
`;
const Input = styled.input`
  background: #f9f9f9;
  border: none;
  font-size: 1rem;
  text-align: center;
  width: 2ch;
  -moz-appearance: textfield;
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;