import React from "react";
import moment from "moment";
import styled from "styled-components";

export default ({advert, onClick}) => (
  <AdvertCardContainer onClick={() => onClick()}>
    <PlaceHolder/>
    <CardContent>
      <TournamentName>{advert.event_id}</TournamentName>
      <AdvertTitle>Hébergement {advert.user.house.nb_slots} personnes</AdvertTitle>
      <AdvertDates>{moment(advert.start_date).format('DD/MM/YYYY')} - {moment(advert.end_date).format('DD/MM/YYYY')}</AdvertDates>
      <AdvertDesc>{advert.desc}</AdvertDesc>
    </CardContent>
  </AdvertCardContainer>
);

const AdvertCardContainer = styled.div`
  background: #F9F9F9;
  border: 1px solid #1C1C1C;
  box-sizing: border-box;
  box-shadow: 0 0 .5rem rgba(0, 0, 0, 0.25);
  border-radius: .5rem;
  cursor: pointer;
  display: flex;
  gap: 1rem;
  padding: 1rem;
  width: fit-content;
`;
const PlaceHolder = styled.div`
  background-color: #104088; 
  height: 7.5rem;
  width: 10rem;
`;
const CardContent = styled.div`
  width 16rem;
`;
const TournamentName = styled.h4`
  color: #565656;
  font-family: Be Vietnam;
  font-size: .75rem;
  margin: 0;
`;
const AdvertTitle = styled.h3`
  color: #1C1C1C;
  font-family: Be Vietnam;
  font-size: 1rem;
  margin:0;
`;
const AdvertDates = styled.p`
  color: #1C1C1C;
  font-family: Roboto;
  font-size: .75rem;
  margin: 0;
`;
const AdvertDesc = styled.p`
  color: #1C1C1C;
  font-family: Roboto;
  font-size: .75rem;
  margin:0;
`;