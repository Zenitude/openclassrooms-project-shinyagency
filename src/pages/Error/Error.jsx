import React from 'react';
import { ReactComponent as Error404 } from '../../assets/404.svg';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  width: 100%;
  text-align: center;
`;

export default function Error() {
  return (
    <ErrorContainer>
      <Error404 />
    </ErrorContainer>
  )
}
