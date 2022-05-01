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
  input {
    display: none;
  }

  label {
    cursor: pointer;
    margin: 30px 0;
    width: 100%;
    border: 2px dashed rgba(22, 24, 35, 0.2);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 30px 0;

    img {
      width: 50px;
      margin-bottom: 10px;
    }

    h2 {
      font-weight: bold;
      font-size: 16px;
      margin-bottom: 5px;
    }

    span {
      color: ${({ theme }) => theme.color.nav_active_bg};
    }

    button {
      font-size: 17px;
      margin-top: 20px;
      border-radius: 10px;
      color: ${({ theme }) => theme.color.text_white};
      background-color: #fe2c55;
      width: 180px;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        background-color: #ff1764;
      }
    }

    &:hover {
      border-color: #fe2c55;
      background-color: rgba(0, 0, 0, 0.03);
    }
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  input[type='text'] {
    border: ${({ theme }) => theme.style.border_light};
    height: 35px;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;

    &::placeholder {
      font-size: 13px;
      color: #fe2c55;
    }
  }

  input[type='number'] {
    width: 80%;
    border: ${({ theme }) => theme.style.border_light};
    height: 35px;
    padding: 10px;
    border-radius: 10px;
    margin: 0 10px 10px 0;

    &::placeholder {
      font-size: 13px;
      color: #fe2c55;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  input[type='checkbox'] {
    display: none;

    & + label:before {
      margin-right: 5px;
      content: '';
      display: inline-block;
      width: 17px;
      height: 17px;
      line-height: 17px;
      border: 1px solid #cbcbcb;
      border-radius: 50%;
      vertical-align: middle; /*체크 전과 체크 후 높이 차이 때문에 설정*/
    }

    &:checked + label:before {
      content: '✔';
      color: #fff;
      border-radius: 50%;
      background-color: #fe2c55;
      border-color: #fe2c55;
      font-size: 13px;
      text-align: center;
    }
  }

  label {
    color: #fe2c55;
    font-size: 13px;
  }

  textarea {
    resize: none;
    border: ${({ theme }) => theme.style.border_light};
    border-radius: 10px;
    padding: 10px;
    font-family: inherit;
    height: 100px;
    margin-bottom: 10px;

    &::placeholder {
      font-size: 13px;
      color: #fe2c55;
    }
  }
`;

export const ThumbnailInputContainer = styled.div`
  input {
    display: none;
  }

  label {
    border: ${({ theme }) => theme.style.border_light};
    border-radius: 10px;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    font-size: 13px;
    color: #fe2c55;
    cursor: pointer;

    div {
      cursor: pointer;
      font-size: 13px;
      border-radius: 10px;
      color: ${({ theme }) => theme.color.text_white};
      background-color: #fe2c55;
      width: 100px;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &:hover {
      border-color: #fe2c55;
      background-color: rgba(0, 0, 0, 0.03);
    }
  }
`;
