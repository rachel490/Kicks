import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};

  @font-face {
  font-family: 'Apple SD Gothic Neo';
  font-weight: 100;
  src: url("/fonts/AppleSDGothicNeoL.ttf") format('truetype');
}

@font-face {
  font-family: 'Apple SD Gothic Neo';
  font-weight: 200;
  src: url("fonts/AppleSDGothicNeoUL.ttf") format('truetype');
}

@font-face {
  font-family: 'Apple SD Gothic Neo';
  font-weight: 300;
  src: url("fonts/AppleSDGothicNeoL.ttf") format('truetype');
}
@font-face {
  font-family: 'Apple SD Gothic Neo';
  font-weight: 400;
  src: url("fonts/AppleSDGothicNeoR.ttf") format('truetype');
}
@font-face {
  font-family: 'Apple SD Gothic Neo';
  font-weight: 500;
  src: url("fonts/AppleSDGothicNeoM.ttf") format('truetype');
}
@font-face {
  font-family: 'Apple SD Gothic Neo';
  font-weight: 600;
  src: url("fonts/AppleSDGothicNeoSB.ttf") format('truetype');
}
@font-face {
  font-family: 'Apple SD Gothic Neo';
  font-weight: 700;
  src: url("fonts/AppleSDGothicNeoB.ttf") format('truetype');
}
@font-face {
  font-family: 'Apple SD Gothic Neo';
  font-weight: 800;
  src: url("fonts/AppleSDGothicNeoEB.ttf") format('truetype');
}
@font-face {
  font-family: 'Apple SD Gothic Neo';
  font-weight: 900;
  src: url("fonts/AppleSDGothicNeoH.ttf") format('truetype');
}

  * {
    box-sizing: border-box;
  }
  body {
    font-size: 14px;
    color: ${({ theme }) => theme.color.text};
    background: #f1f1f1;
    font-family: 'Apple SD Gothic Neo', sans-serif;
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
