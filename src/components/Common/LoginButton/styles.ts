import styled from 'styled-components';

interface StyleProps {
  padding: number;
}

export const LoginButtonContainer = styled.button<StyleProps>`
  display: flex;
  margin: 0 auto;
  padding: ${({ padding }) => padding + 'px'} 0;

  a {
    display: block;
    font-size: 13px;
    padding: 8px 13px;
    background-color: ${({ theme }) => theme.color.main};
    color: ${({ theme }) => theme.color.text_white};
    border-radius: 20px;
  }
`;
