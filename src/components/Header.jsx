import React from 'react';
import styled from 'styled-components';
import { StyledLink } from '../utils/style/Atom';
// import lightLogo from '../assets/light-logo.png';
import darkLogo from '../assets/dark-logo.png';

const HeaderContainer = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;

  nav {
    margin-left: auto;
  }

  img {
    width: 150px;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
        <StyledLink to={`/`}>
          <img src={darkLogo} alt="Logo Shiny Agency" />
        </StyledLink>
        <nav>
          <StyledLink to={`/`}>Accueil</StyledLink>
          <StyledLink to={`/survey/1`} $isFullLink>Questionnaire</StyledLink>
          <StyledLink to={`/freelances`}>Profils</StyledLink>
          <StyledLink to={`/tests`} $isFullLink>Faire le test</StyledLink>
        </nav>
    </HeaderContainer>
  )
}
