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
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  html, body, #root{
    height: 100%;
  }
  input {
    border: none;
    outline: none;
  }
  button {
    padding: 0;
    cursor: pointer;
    border: none;
    background-color: transparent;
  }
  a, a:active{
    text-decoration: none;
    color: ${({ theme }) => theme.color.text};
  }
  ul,li{
    list-style: none;
  }
  
  ::-webkit-scrollbar { display: none; }
`;

export default GlobalStyle;
