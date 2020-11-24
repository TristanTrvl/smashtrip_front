import React from "react";
import styled from "styled-components";

export default ({ name, label, children, light }) => {
  return (
    <InputLabelContainer>
      <Label htmlFor={name} light={light}> {label} </Label>
      {children}
    </InputLabelContainer>
  );
};

const Label = styled.label`
  color: ${(props) => (props.light ? "#f9f9f9" :"#1c1c1c")};
  font-family: Roboto;
  font-weight: 500;
  font-size: 1rem;
  margin-bottom: 0.25rem;
`;
const InputLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
