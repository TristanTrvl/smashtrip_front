import React, { useEffect, useState } from "react";
import axios from 'axios';
import styled from "styled-components";
import Label from "../primaryComponents/inputs/Label";

export default ({name, value, label, callback}) => {
  const fetchTournaments = async (name) => {
    const graphql = {
      query: `
        query ($cCode: String!, $name: String) {
          tournaments(query: {
            filter: {
              countryCode: $cCode,
              upcoming: true
              hasOnlineEvents: false
              name: $name
            }
          }) {
            nodes {
              id
              name
            }
          }
        },
    `,
      variables: { cCode: 'FR', name },
    };    
    const requestOptions = {
      headers: { Authorization: process.env.REACT_APP_SMASHGG_TOKEN },
    };
    return axios.post(process.env.REACT_APP_SMASHGG_API_URL, graphql, requestOptions)
      .then((res) => res.data.data.tournaments.nodes )
      .catch((err) => {
        if (err.response) {
          console.log(err.response.statusText);
        } else if (err.request) {
          console.log(err.request);
        } else {
          console.log(err.message);
        }
      });
  };

  const [display, setdisplay] = useState(false)
  const [data, setdata] = useState([])
  const [input, setinput] = useState(value)

  useEffect(() => {
    fetchTournaments(input).then((value) => setdata(value))
  }, [input])

  const onClick = (event, id) => {
    setinput(event.currentTarget.innerText);
    callback(id);
    setdisplay(false);
  }

  const onChange = async (event) => {
    const input = event.currentTarget.value
    setinput(input);
  }

  const toggle = () => {
    setdisplay(!display)
  }

  let dataListComponent;
  if (display && data?.length) {
    dataListComponent = (
      <Suggestions>
        {data.map((data, index) => (
          <SuggestionRow key={index} onClick={(event) => onClick(event, data.id)}>
            {data.name}
          </SuggestionRow>
        ))}
      </Suggestions>
    )
  }

  return (
    <SearchInput>
      <Label name={name} label={label} >
        <Input type="search" name={name} onChange={onChange} onClick={toggle} value={input} />
      </Label>
      {dataListComponent}
    </SearchInput>
  )
}

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
const SearchInput = styled.div`
  position: relative;
`;
const Suggestions = styled.ul`
  border: 1px solid #1C1C1C;
  border-top: none;
  box-sizing: border-box;
  left: .5rem;
  list-style: none;
  margin: 0;
  max-height: 15rem;
  overflow-x: scroll;
  padding: 0;
  position: absolute;
  width: calc(100% - 1rem);
  z-index: 10;
`; 
const SuggestionRow = styled.li`
  background-color: #f9f9f9;
  padding: .5rem;
  &:not(:first-child) {
    border-top: 1px solid #1C1C1C;
  }
`;