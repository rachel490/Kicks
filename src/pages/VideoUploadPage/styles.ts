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
