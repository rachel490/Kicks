import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100vw;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  width: 100%;
  height: 60px;
  svg {
    margin-left: 50px;
    width: 100px;
    height: 60px;
    cursor: pointer;
  }
`;

export const Main = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  height: calc(100vh - 60px);
  background-color: #fff;
`;
