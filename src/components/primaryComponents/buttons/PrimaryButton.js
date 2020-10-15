import styled from "styled-components";
import BaseButton from "./BaseButton";

const PrimaryButton = styled(BaseButton)`
  background: ${(props) => (props.inverted ? "#f9f9f9;" : "#EA5818")};
  border: 1px solid #ea5818;
  color: ${(props) => (props.inverted ? "#EA5818;" : "#f9f9f9")};
  :hover {
    background: ${(props) => (props.inverted ? "#EA5818;" : "#f9f9f9")};
    color: ${(props) => (props.inverted ? "#f9f9f9;" : "#EA5818")};
  }
`;

export default PrimaryButton;
