import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};

  * {
    box-sizing: border-box;
  }
  body {
    font-size: 14px;
    color: #000;
  }
  input {
    border: none;
    outline: none;
  }
  button {
    border: none;
    background-color: transparent;
  }
  a, a:active{
    text-decoration: none;
    color: #000;
  }
`;

export default GlobalStyle;
