import React from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import LoginForm from "../forms/loginForm/LoginFormContainer";
import RegisterForm from "../forms/registerForm/RegisterFormContainer";
import PrimaryButton from "../primaryComponents/buttons/PrimaryButton";
import logo from "../../images/smash_trip_logo.svg"

export default ({ isLoggedIn, openModal }) => {
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
          <NavClickableText onClick={() => openModal(<LoginForm/>)}>
            Login
          </NavClickableText>
        </li>
        <li>
          <PrimaryButton onClick={() => openModal(<RegisterForm/>)}>
            S'inscrire
          </PrimaryButton>
        </li>
      </>
    );
  }

  return (
    <NavBarContainer>
      <Link exact="true" to="/">
        <LogoImg
          src={logo}
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
  height: 5rem;
  left: 0px;
  padding: 0 3rem;
  position: sticky;
  top: 0px;
  width: 100%;
`;
const LogoImg = styled.img`
  width: 6rem;
`;
const NavList = styled.ul`
  align-items: center;
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin-left: auto;
  padding: 0;
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
