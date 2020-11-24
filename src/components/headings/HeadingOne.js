import React from "react";
import styled from "styled-components";

export default ({ children, light }) => {
  return <Heading light={light} >{children}</Heading>;
};

const Heading = styled.h1`
  color: ${(props) => (props.light ? "#f9f9f9" :"#1c1c1c")};;
  font-family: Roboto;
  font-size: 2rem;
  font-weight: 500;
  margin: 0;
`;
