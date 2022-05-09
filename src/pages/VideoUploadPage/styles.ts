import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  width: 100%;
  padding: 20px;
`;

export const FileInputContainer = styled.div`
  margin-bottom: 34px;

  input {
    display: none;
  }

  label {
    cursor: pointer;
    width: 90px;
    height: 90px;
    border: 1px dashed black;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 30px 0;

    &:hover {
      border-color: #fe2c55;
      background-color: rgba(0, 0, 0, 0.03);
    }
  }
`;

export const InputContainer = styled.div``;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 24px;

  input[type='text'],
  input[type='number'],
  textarea {
    height: 44px;
    border: 1px solid #dddddd;
    border-radius: 4px;
    padding: 14px 12px;

    &::placeholder {
      color: #dddddd;
      font-size: 14px;
    }
  }

  input[type='number'] {
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  textarea {
    resize: none;
    font-family: inherit;
    height: 100px;
    margin-bottom: 10px;
  }
`;

export const Label = styled.label`
  font-size: 12px;
  margin-bottom: 8px;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 44px;
  justify-content: space-between;
`;

export const Button = styled.button<{ selected: boolean }>`
  height: 100%;
  width: 165px;
  border: 1px solid ${({ selected }) => (selected ? 'black' : '#ddd')};
  border-radius: 4px;
  background-color: ${({ selected }) => (selected ? 'black' : 'white')};
  color: ${({ selected }) => (selected ? 'white' : '#ddd')};
`;
