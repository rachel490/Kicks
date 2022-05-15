import styled from 'styled-components';

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
