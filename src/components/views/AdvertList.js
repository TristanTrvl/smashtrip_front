import React, { useState } from "react";
import styled from "styled-components";
import axios from 'axios';
import { useQuery } from 'react-query';
import AdvertCard from "../advert/AdvertCard";
import AdvertDetails from "../advert/AdvertDetails";

export default () => {
  const [detailsId, setDetailsId] = useState(null)
  const advertsCall = axios.create({
    baseURL: process.env.REACT_APP_API_URL + "/housing_adverts"
  });
  const fetchAdverts = async () => advertsCall.get()
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
  const fetchAdvert = async (key, id) => advertsCall.get("/" + id)
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
 
  const { 
    data:advertsData, 
    isFetching:advertsIsFetching, 
    error:advertsError,
  } = useQuery('adverts', fetchAdverts);
  const { 
    data:advertData, 
    isFetching:advertIsFetching, 
    error:advertError,
    refetch:advertFetch 
  } = useQuery(['advert', detailsId], fetchAdvert, {
    enabled: detailsId
  });

  const advertsJsx = advertsData?.map((advert) => (
    <AdvertCard key={advert.id} advert={advert} onClick={() => setDetailsId(advert.id)}/>
  ));

  if ( !advertsData && advertsIsFetching ) return <p>Fetching Adverts...</p>

  if ( advertsError ) return <p>{advertsError}</p>

  return (
    <AdvertsPage>
      <AdvertList>
        {advertsJsx}
      </AdvertList>
      <AdvertDetails advert={advertData}/>
    </AdvertsPage>
  );
}

const AdvertsPage = styled.div`
  display: flex;
  margin: 2rem 3rem 0;
`;
const AdvertList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;