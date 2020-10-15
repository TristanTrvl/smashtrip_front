import React from "react";
import styled from "styled-components";
import BaseButton from "./BaseButton";

const LightButton = styled(BaseButton)`
  background: ${(props) => (props.inverted ? "#1c1c1c;" : "#f9f9f9")};
  border: 1px solid #f9f9f9;
  color: ${(props) => (props.inverted ? "#f9f9f9;" : "#1c1c1c")};
  :hover {
    background: ${(props) => (props.inverted ? "#f9f9f9;" : "#1c1c1c")};
    color: ${(props) => (props.inverted ? "#1c1c1c;" : "#f9f9f9")};
  }
`;

export default LightButton;
