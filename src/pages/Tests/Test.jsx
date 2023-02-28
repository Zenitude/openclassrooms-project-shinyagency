import React, { useState } from 'react';
import styled from 'styled-components';

const TestsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Balloon = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50px;
  background-color: #e20202;
  transform: scale(${({size}) => size});
`;

function Tests() {
  const [size, setSize] = useState(1);
  
  return (
    <TestsContainer>
      <h1 onClick={() => setSize(size + 0.1)}>Page Tests</h1>
      <Balloon size={size}/>
    </TestsContainer>
  );
}

export default Tests;