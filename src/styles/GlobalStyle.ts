import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { COLOR } from 'constants/';

const GlobalStyle = createGlobalStyle`
  ${reset};

  * {
    box-sizing: border-box;
  }
  body {
    font-size: 14px;
    color: ${COLOR.TEXT};
    background: #f1f1f1;
  }
  html, body, #root{
    height: 100%;
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
    color: ${COLOR.TEXT};
  }
`;

export default GlobalStyle;
