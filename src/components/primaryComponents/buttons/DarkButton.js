import styled from "styled-components";
import BaseButton from "./BaseButton";

export default styled(BaseButton)`
  background: ${(props) => (props.inverted ? "#f9f9f9;" : "#1c1c1c")};
  border-color: #1c1c1c;
  color: ${(props) => (props.inverted ? "#1c1c1c" : "#f9f9f9")};
  :hover {
    background: ${(props) => (props.inverted ? "#1c1c1c" : "#f9f9f9")};
    color: ${(props) => (props.inverted ? "#f9f9f9;" : "#1c1c1c")};
  }
`;
