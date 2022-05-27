import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;
export const EditContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  input {
    width: 90%;
    margin: 30px 0 20px;
    padding: 10px 10px;
    border: 1px solid #cacaca;
    border-radius: 4px;
    text-align: center;
  }
  span {
    font-size: 13px;
    color: #aaa;
  }
`;

export const SubmitButton = styled.button`
  margin-top: auto;
  padding: 15px 0;
  color: #fff;
  background-color: ${({ theme }) => theme.color.main};
`;
