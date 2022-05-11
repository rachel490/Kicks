import styled from 'styled-components';

export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(213, 213, 213, 0.85);
  z-index: 10;
`;

export const Modal = styled.div`
  width: 80%;
  padding: 30px;
  background: #727272;
  border-radius: 10px;
`;

export const Message = styled.p`
  text-align: center;
  line-height: 1.5;
  margin-bottom: 25px;
  color: ${({ theme }) => theme.color.text_white};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    margin: 0 10px;
    width: 80px;
    padding: 8px 0;
    color: ${({ theme }) => theme.color.text_white};
    background: #4c4c4c;
    border-radius: 5px;
    &:hover {
      background: ${({ theme }) => theme.color.main};
    }
  }
`;
