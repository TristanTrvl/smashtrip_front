import React from "react";
import axios from 'axios';
import { useQuery } from 'react-query';
import styled from "styled-components";
import TournamentCard from "../tournament/TournamentCard";

export default () => {
  const fetchTournaments = async () => {
    const graphql = {
      query: `
        query ($cCode: String!, $perPage: Int!, $name: String) {
          tournaments(query: {
            perPage: $perPage
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
              venueAddress
              startAt
              slug
              images {
                url
              }
            }
          }
        },
    `,
      variables: { cCode: 'FR', perPage: 50, name: "" },
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

  const { 
    data:tournamentsData, 
    isFetching:tournamentsIsFetching, 
    error:tournamentsError 
  } = useQuery('tournaments', () => fetchTournaments())
  
  const tournamentsJsx = tournamentsData?.map((tournament) => (
    <TournamentCard key={tournament.id} tournament={tournament}/>
  ));

  if ( !tournamentsData && tournamentsIsFetching ) return <p>Fetching Tournaments...</p>

  if ( tournamentsError ) return <p>{tournamentsError}</p>

  return (
    <TournamentList>
      {tournamentsJsx}
    </TournamentList>
  );
}

const TournamentList = styled.div`
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 2rem;
`;