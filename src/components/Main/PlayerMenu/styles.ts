import styled from 'styled-components';

export const Wrap = styled.div<{ isShown: boolean }>`
  display: ${props => (props.isShown ? 'flex' : 'none')};
  justify-content: flex-end;
  width: 100%;
`;

export const Nav = styled.nav`
  position: absolute;
  bottom: 70px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 60px;
  height: 300px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;

  .icon {
    width: 32px;
    height: 32px;
    color: white;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;
