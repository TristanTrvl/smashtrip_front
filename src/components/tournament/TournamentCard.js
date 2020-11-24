import React from "react";
import { NavLink } from "react-router-dom";
import moment from "moment";
import styled from "styled-components";
import DarkButton from "../primaryComponents/buttons/DarkButton";
import PrimaryButton from "../primaryComponents/buttons/PrimaryButton";
import CustomButton from "../primaryComponents/buttons/CustomButton";


export default ({tournament}) => {
  let cover = <Placeholder />;
  if (tournament.images[0]?.url) {
    cover= <CoverImage src={tournament.images[0].url} alt=""/> 
  };
  return (
    <TournamentCard key={tournament.id}>
      <TournamentInfo>
        { cover }
        <div>
          <TournamentName>{tournament.name}</TournamentName>
          <TournamentAdress>{tournament.venueAddress}</TournamentAdress>
          {/* TODO */}
        </div>
      </TournamentInfo>
      <TournamentActions>
        <TournamentActionsGroup>
          {/* TODO */}
          <DarkButton as={NavLink} to={
            {
              pathname: "/advert-list",
              advertListProps: { 
                id :tournament.id, 
                name:tournament.name
              },
            }
          }>
            Voir les hébergements
          </DarkButton>
          <PrimaryButton as={NavLink} to={
            {
              pathname: "/new-advert",
              newAdvertProps: { 
                id :tournament.id, 
                name:tournament.name
              },
            }
          }>
              Créer un hébergement
          </PrimaryButton>
        </TournamentActionsGroup>
        <TournamentActionsGroup>
          <CustomButton as={"a"} href={"https://smash.gg/" + tournament.slug} target="_blank" color={"#cb333b"} inverted >Voir sur Smash.gg</CustomButton>
        </TournamentActionsGroup>
      </TournamentActions>
    </TournamentCard>
  );
};

const TournamentCard = styled.div`
  background: #F9F9F9;
  border: 1px solid #1C1C1C;
  box-sizing: border-box;
  box-shadow: 0 0 .5rem rgba(0, 0, 0, 0.25);
  border-radius: .5rem;
  width: 36rem;
`;
const TournamentInfo = styled.div`
  display: flex;
  gap: 1rem;
  height: 6.5rem;
  padding: 1rem;
`;
const TournamentActions = styled.div`
  border-top: 1px solid #1C1C1C;
  padding: 1rem;
`;
const TournamentActionsGroup = styled.div`
  display: flex;
  gap: 1rem;
  &:not(:first-child) {
    margin-top: .5rem;
  }
`;
const CoverImage = styled.img`
  height: 6rem;
  width: 6rem;
`;
const Placeholder = styled.div`
  background-color: #104088; 
  height: 6rem;
  width: 6rem;
`;
const TournamentName = styled.h2`
  color: #1C1C1C;
  font-family: Be Vietnam;
  font-size: 1.25rem;
  margin: 0;
`;
const TournamentAdress = styled.p`
  color: #565656;
  font-family: Be Vietnam;
  font-size: 1rem;
  margin: 0;
`;
const TournamentDate = styled.p`
  color: #1C1C1C;
  font-family: Roboto;
  font-size: 1rem;
  margin: 0;
`;