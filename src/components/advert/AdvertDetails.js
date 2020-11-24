import React from "react";
import styled from "styled-components";
import ReservationForm from "../forms/reservationForm/ReservationFormContainer";

export default ({advert}) => (
  <DetailsContainer>
    {
      advert ? (
        <>
          <DetailsTournament>{advert.event_id}</DetailsTournament>
          <DetailsTitle>{`Hébergement ${advert.user.house.nb_slots} personnes`}</DetailsTitle>
          <DetailsImages>
            <Placeholder />
            <Placeholder />
            <Placeholder />
          </DetailsImages>
          <AdvertDetails>
            <div>
              <p>Hébergeur : {advert.user.username}</p>
              <p>{advert.desc}</p>
              <p>Contacter l'hôte</p>
            </div>
            <AdvertReservationContainer>
              <ReservationForm advertId={advert.id}/>
            </AdvertReservationContainer>
          </AdvertDetails>
        </>
      ) : <EmptyDetails>Clique sur une annonce pour voir ses détails</EmptyDetails> 
    }
  </DetailsContainer>
);

const Placeholder = styled.div`
  background-color: #104088; 
  height: 9rem;
  width: 13rem;
`;
const DetailsContainer = styled.div`
  align-self: flex-start;
  flex: 1;
  margin-left: 6rem;
  position:sticky;
  top: 7rem;
  overflow-y: scroll;
`;
const EmptyDetails = styled.p`
  color: #424242;
  font-weight: 600;
  font-size: 1.25rem;
  text-align: center;
`;
const DetailsTournament = styled.h4`
  color: #424242;
  font-family: Be Vietnam;
  font-weight: 600;
  font-size: 1.25rem;
  margin: 0;
`;
const DetailsTitle = styled.h2`
  color: #1C1C1C;
  font-family: Be Vietnam;
  font-weight: 600;
  font-size: 1.75rem;
  margin: 0;
`;
const DetailsImages = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;
const AdvertDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
`;
const AdvertReservationContainer = styled.div`
  align-items: center;
  background: #F9F9F9;
  border: 1px solid #1C1C1C;
  box-sizing: border-box;
  box-shadow: 0 0 .5rem rgba(0, 0, 0, 0.25);
  border-radius: .5rem;
  padding: 1rem;
  width: 16rem;
`;
