import styled from 'styled-components';

export const Form = styled.form`
  margin: 170px 185px 0 20px;
  padding: 30px 12px;
  border-top: 1px solid black;
  justify-content: space-between;
  width: 100%;
  position: relative;
`;

export const Button = styled.button`
  background-color: #efe0e0;
  font-size: 15px;
  padding: 10px 15px;
  border-radius: 5px;
  position: absolute;
  top: -60px;
  right: 20px;
`;

export const Main = styled.div`
  display: flex;
  width: 100%;

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
  width: 100%;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
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
  margin-bottom: 10px;
`;

export const Sub = styled.div`
  margin-top: 50px;
  display: flex;
  width: 100%;
  justify-content: space-between;

  ${InfoBox} {
    min-width: 100px;
    max-width: 200px;
    overflow-wrap: break-word;
    text-align: center;
  }
`;
