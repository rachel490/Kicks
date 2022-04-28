import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};

  * {
    box-sizing: border-box;
  }
  body {
    font-size: 14px;
    color: ${({ theme }) => theme.color.text};
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
    color: ${({ theme }) => theme.color.text};
  }
`;

export default GlobalStyle;
