import styled from 'styled-components';

export const MessageBoxContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px ${({ theme }) => theme.style.edge_padding};
  background: #ccc;
  img {
    width: 20px;
    height: 20px;
  }
`;

export const Form = styled.form`
  position: relative;
  width: 100%;
  margin-left: 10px;
`;

export const ChatTextArea = styled.textarea`
  display: block;
  width: 100%;
  font-size: 14px;
  height: 30px;
  border: none;
  font-family: inherit;
  resize: none;
  background: #aaa;
  border-radius: 20px;
  padding: 5px 10px;
  overflow: hidden;
  &::placeholder {
    color: #555;
  }
  &:focus {
    outline: none;
  }
`;

export const SendButton = styled.button`
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  width: 25px;
  height: 25px;
  border-radius: 50%;
  color: #fff;
  background-color: ${({ theme }) => theme.color.main};
`;
