import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { StyledLink } from '../../utils/style/Atom';

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

function Home() {
  return (
    <HomeContainer>
      <div>
        <h1>Repérez vos besoins, on s'occupe du reste, avec les meilleurs talents</h1>
        <StyledLink to={`#`} $isFullLink>Faire le test</StyledLink>
      </div>
      <Illustration />
    </HomeContainer>
  );
}

export default Home;
