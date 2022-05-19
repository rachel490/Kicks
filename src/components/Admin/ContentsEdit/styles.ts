import styled from 'styled-components';

export const Form = styled.form`
  justify-content: space-between;
  width: 100%;
`;

export const Button = styled.button`
  background-color: #efe0e0;
  font-size: 15px;
  padding: 10px 15px;
  border-radius: 5px;
`;

export const Main = styled.div`
  display: flex;
  border-top: 1px solid black;
  padding-top: 20px;
  img {
    min-width: 360px;
    height: 360px;
    object-fit: cover;
    margin-right: 35px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  height: 100%;
  width: 60%;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
  margin-left: 30px;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  span {
    font-size: 12px;
  }

  input {
    width: 100%;
    padding: 3px 5px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 5px;
  }

  textarea {
    display: block;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    height: 100px;
    padding: 3px 5px;
    outline: none;
    resize: none;
    white-space: pre-wrap;
    overflow-y: scroll;
  }
`;

export const StatusBox = styled.div`
  display: flex;
  align-items: center;

  ${InfoBox} {
    margin-right: 30px;
  }
`;

export const Label = styled.label`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const Sub = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  margin-left: auto;
  justify-content: space-between;
`;

export const TableData = styled.div`
  overflow-wrap: break-word;
  text-align: center;
  .title {
    font-size: 15px;
    font-weight: 600;
    background-color: #f1f1f1;
    padding: 13px 0;
    border-bottom: 2px solid #333;
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 50px;
    padding: 5px 10px;
    font-size: 12px;
  }
  img {
    width: 50px;
  }
  a {
    color: #2121c0;
    text-decoration: underline;
  }
  &:nth-of-type(1),
  &:nth-of-type(2) {
    flex-basis: 12%;
  }
  &:nth-of-type(3) {
    flex-basis: 20%;
  }
  &:nth-of-type(4),
  &:nth-of-type(5) {
    flex: 1;
  }
`;
