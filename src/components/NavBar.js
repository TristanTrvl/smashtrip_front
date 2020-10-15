import React from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import PrimaryButton from "./primaryComponents/buttons/PrimaryButton";

const NavBar = (props) => {
  const { isLoggedIn } = props;
  let userDisplay;

  if (isLoggedIn) {
    userDisplay = (
      <>
        <li>
          <NavItem to="/account">Mon Compte</NavItem>
        </li>
        <li>
          <PrimaryButton as={NavLink} to="/new-advert">
            Créer une annonce
          </PrimaryButton>
        </li>
      </>
    );
  } else {
    userDisplay = (
      <>
        <li>
          <NavClickableText onClick={() => alert("login")} inverted>
            Login
          </NavClickableText>
        </li>
        <li>
          <PrimaryButton onClick={() => alert("inscription")}>
            S'inscrire
          </PrimaryButton>
        </li>
      </>
    );
  }

  return (
    <NavBarContainer>
      <Link exact to="/">
        <LogoImg
          src={process.env.PUBLIC_URL + "/images/smash_trip_logo.svg"}
          alt="Logo Smash Trip"
        />
      </Link>
      <NavList>
        <li>
          <NavItem to="/tournament-list">Tournois</NavItem>
        </li>
        <li>
          <NavItem to="/advert-list">Hebergements</NavItem>
        </li>
        {userDisplay}
      </NavList>
    </NavBarContainer>
  );
};

const NavBarContainer = styled.nav`
  align-items: center;
  background: #f9f9f9;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  display: flex;
  height: 6rem;
  justify-content: space-between;
  left: 0px;
  padding: 0 3rem;
  position: absolute;
  top: 0px;
  width: 100%;
`;
const LogoImg = styled.img`
  width: 7rem;
`;
const NavList = styled.ul`
  align-items: center;
  display: flex;
  gap: 1.5rem;
  list-style: none;
`;
const NavItem = styled(NavLink)`
  color: #1c1c1c;
  font-family: "Roboto", sans-serif;
  text-decoration: none;
`;
const NavClickableText = styled.button`
  background: none;
  border: none;
  color: #1c1c1c;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  padding: 0;
  text-decoration: none;
`;

export default NavBar;
