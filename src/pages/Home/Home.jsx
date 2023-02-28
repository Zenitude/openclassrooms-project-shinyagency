import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

import { ReactComponent as Illustration } from '../../assets/home-illustration.svg';

const HomeContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${colors.backgroundLight};
  div {
    width: 50%;
  }
`;

const StyledLink = styled(Link)`
    padding: 15px;
    color: ${colors.white};
    text-decoration: none;
    font-size: 18px;
    border-radius: 30px;
    background-color: ${colors.primary};
`;

function Home() {
  return (
    <HomeContainer>
      <div>
        <h1>Repérez vos besoins, on s'occupe du reste, avec les meilleurs talents</h1>
        <StyledLink to={`#`}>Faire le test</StyledLink>
      </div>
      <Illustration />
    </HomeContainer>
  );
}

export default Home;
