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
    margin-top: 20px;
    font-size: 13px;
    color: #aaa;
  }
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
