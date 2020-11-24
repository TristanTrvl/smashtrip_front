import styled from "styled-components";
import BaseButton from "./BaseButton";

export default styled(BaseButton)`
  background: ${(props) => (props.inverted ? "#f9f9f9;" : "#EA5818")};
  border-color: #EA5818;
  color: ${(props) => (props.inverted ? "#EA5818;" : "#f9f9f9")};
  :hover {
    background: ${(props) => (props.inverted ? "#EA5818;" : "#f9f9f9")};
    color: ${(props) => (props.inverted ? "#f9f9f9;" : "#EA5818")};
  }
`;