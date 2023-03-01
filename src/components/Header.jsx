import React, { useContext } from 'react';
import styled from 'styled-components';
import { StyledLink } from '../utils/style/Atom';
import { ThemeContext } from '../utils/Context';
import lightLogo from '../assets/light-logo.png';
import darkLogo from '../assets/dark-logo.png';

const HeaderContainer = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  
  nav {
    margin-left: auto;
    padding-right: 15px;
  }

  img {
    width: 150px;
  }
`;

export default function Header() {
  const { theme } = useContext(ThemeContext);
  return (
    <HeaderContainer>
        <StyledLink to={`/`}>
          <img src={theme === 'light' ? darkLogo : lightLogo} alt="Logo Shiny Agency" />
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
