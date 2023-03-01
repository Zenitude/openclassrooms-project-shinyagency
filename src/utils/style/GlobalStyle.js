import React, { useContext} from 'react';
import { createGlobalStyle } from 'styled-components';
import { ThemeContext } from '../Context';

const StyledGlobalStyle = createGlobalStyle`
  * {
    font-family: 'Trebuchet MS', Helvetica, sans-serif;
  }

  body {
    background-color : ${({ isDarkmode }) => 
        isDarkmode ? '#2F2E41' : 'white'
    };
    margin: 0;
  }

  main{
    padding: 20px;
  }
`;

export default function GlobalStyle() {
    const { theme } = useContext(ThemeContext);

    return (<StyledGlobalStyle isDarkmode={theme === 'dark'}/>)

}