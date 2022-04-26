import styled from 'styled-components';
import { COLOR, STYLE } from 'constants/';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 720px;
  margin: 0 auto;
  height: 100%;
  background: #fff;
`;

export const Contents = styled.div`
  flex: 1;
`;

export const MainNavigation = styled.ul`
  display: flex;
  justify-content: space-around;
`;

export const MenuItem = styled.li`
  width: 100%;
  & + & {
    border-left: ${STYLE.BORDER_LIGHT};
  }

  a {
    display: inline-block;
    width: 100%;
    height: 100%;
    height: 70px;
    line-height: 70px;
    font-size: 16px;
    color: ${COLOR.TEXT};
    text-align: center;
    background-color: ${COLOR.BG_NAV};
    &.active {
      background-color: ${COLOR.BG_NAV_ACTIVE};
    }
    &:focus {
      color: ${COLOR.TEXT};
    }
  }
`;
