import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const Nav = styled.nav`
  position: absolute;
  bottom: 70px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 70px;
  height: 300px;
`;

export const Button = styled.button`
  .icon {
    width: 40px;
    height: 40px;
		color: white;
  }

  img {
    width: 55px;
    height: 55px;
    border-radius: 50%;
  }
`;
