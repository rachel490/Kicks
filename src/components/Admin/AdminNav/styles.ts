import styled from 'styled-components';

export const Nav = styled.nav`
  min-width: 290px;
  height: 100%;
  background-color: #5f5f5f;
`;

export const NavTitle = styled.h2`
  font-size: 24px;
  text-align: center;
  padding: 25px 0;
  font-weight: bold;
  color: white;
`;

export const MenuItem = styled.p`
  font-size: 16px;
  text-align: right;
  padding-right: 37px;
  margin-bottom: 11px;
  a {
    color: #aaa;
    &.active {
      color: ${({ theme }) => theme.color.text_white};
    }
  }
`;
