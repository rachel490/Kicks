import styled from 'styled-components';

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