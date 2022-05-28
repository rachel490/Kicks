import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  #profile {
    display: none;
  }
`;

export const ImageInput = styled.label`
  position: relative;
  label {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid #cacaca;
    border-radius: 50%;
    cursor: pointer;
    padding-left: 1px;
  }
  svg {
    width: 22px;
    height: 22px;
    fill: #888;
  }
`;

export const NameInput = styled.input`
  width: 90%;
  margin-top: 30px;
  padding: 10px 10px;
  border: 1px solid #cacaca;
  border-radius: 4px;
  text-align: center;
`;
