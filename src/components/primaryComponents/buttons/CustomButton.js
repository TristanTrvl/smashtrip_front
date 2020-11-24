import styled from "styled-components";
import BaseButton from "./BaseButton";

export default styled(BaseButton)`
  background: ${(props) => (props.inverted ? "#f9f9f9;" : props.color)};
  border-color: ${(props) => props.color};
  color: ${(props) => (props.inverted ? props.color : "#f9f9f9")};
  :hover {
    background: ${(props) => (props.inverted ? props.color : "#f9f9f9")};
    color: ${(props) => (props.inverted ? "#f9f9f9;" : props.color)};
  }
`;
