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
  min-height: 70px;
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #86878b;
`;

export const MenuItem = styled.li`
  width: 100%;
  height: 100%;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 11px;
    text-align: center;

    .icon {
      width: 22px;
      height: 22px;
      margin-bottom: 8px;
    }
  }
`;
