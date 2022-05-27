import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;
export const EditForm = styled.form`
  height: calc(100% - ${({ theme }) => theme.style.header_height});
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  span {
    font-size: 13px;
    color: #aaa;
  }
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
  margin: 30px 0 20px;
  padding: 10px 10px;
  border: 1px solid #cacaca;
  border-radius: 4px;
  text-align: center;
`;

export const SubmitButton = styled.button`
  width: 100%;
  margin-top: auto;
  padding: 15px 0;
  color: #fff;
  background-color: #bebebe;
  &.active {
    background-color: ${({ theme }) => theme.color.main};
  }
`;
