import React from "react";
import styled from "styled-components";
import axios from 'axios';
import { useMutation } from 'react-query';

import HeadingOne from "../headings/HeadingOne";
import AdvertForm from "../forms/advertForm/AdvertForm"

export default ({location}) => {
  const advertsCall = axios.create({
    baseURL: process.env.REACT_APP_API_URL + "/housing_adverts",
    headers: {
      Authorization: localStorage.token,
    }
  });
  const createAdvert = async (advert) => advertsCall.post("", advert)
    .then((res) => res.data )
    .catch((err) => {
      if (err.response) {
        console.log(err.response.statusText);
      } else if (err.request) {
        console.log(err.request);
      } else {
        console.log(err.message);
      }
    });
  const [mutate] = useMutation(createAdvert);

  return (
    <PageContainer>
      <HeadingOne>Créer une annonce d’hébergement</HeadingOne>
      <AdvertForm callback={mutate} location={location}/>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  color: #1C1C1C;
  justify-self: center;
  margin: 2rem auto 0;
  width: 33.5rem;
`;