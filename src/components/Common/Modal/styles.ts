import styled from 'styled-components';

export const Overlay = styled.div<{ isOpen?: boolean }>`
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 375px;
  height: 100vh;
  background: rgba(213, 213, 213, 0.85);
  z-index: 1000;
`;

export const Modal = styled.div`
  width: 265px;
  padding: 30px;
  background: white;
  border-radius: 10px;
`;

export const Message = styled.p`
  text-align: center;
  line-height: 1.5;
  margin-bottom: 25px;
  color: black;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    margin: 0 10px;
    width: 80px;
    padding: 8px 0;
    border-radius: 5px;
    &:hover {
      background: ${({ theme }) => theme.color.main};
    }

    &.yes {
      background-color: #c13128;
      color: white;
    }

    &.no {
      background-color: #ececec;
      color: black;
    }
  }
`;
