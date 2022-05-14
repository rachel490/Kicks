import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 100%;
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
`;

export const MainContainer = styled.div`
  height: 675px;
  overflow: scroll;
  padding: 20px;
`;

export const FileInputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 13px;
  margin-bottom: 20px;
`;

export const FileInputBox = styled.div`
  text-align: center;
  font-size: 12px;

  input {
    display: none;
  }

  label {
    cursor: pointer;
    width: 132px;
    height: 132px;
    border: 2px dashed #d1d1d1;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 30px 0;
    margin-bottom: 6px;

    &:hover {
      border-color: #c13128;
      background-color: rgba(0, 0, 0, 0.02);
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
  select,
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

  select {
    appearance: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size: 20px;

    &:invalid {
      color: #dddddd;
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
    height: 120px;
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

export const SubmitButton = styled.button`
  width: 100%;
  height: 70px;
  position: absolute;
  z-index: 200;
  bottom: 0;
  left: 0;
  background-color: #c13128;
  color: white;
  font-size: 16px;
`;
