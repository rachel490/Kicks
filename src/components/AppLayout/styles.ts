import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 375px;
  margin: 0 auto;
  height: 100%;
  background: #fff;
`;

export const MainNavigation = styled.ul`
  display: flex;
  justify-content: space-around;
`;

export const MenuItem = styled.li`
  width: 100%;
  & + & {
    border-left: ${({ theme }) => theme.style.border_light};
  }

  a {
    display: inline-block;
    width: 100%;
    height: 100%;
    height: 70px;
    line-height: 70px;
    font-size: 16px;
    color: ${({ theme }) => theme.color.text};
    text-align: center;
    background-color: ${({ theme }) => theme.color.nav_bg};
    &.active {
      background-color: ${({ theme }) => theme.color.nav_active_bg};
    }
    &:focus {
      color: ${({ theme }) => theme.color.text};
    }
  }
`;
