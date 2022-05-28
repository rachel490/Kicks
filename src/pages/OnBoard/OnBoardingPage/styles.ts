import styled from 'styled-components';

export const Form = styled.form`
  padding: 0 20px;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.h1`
  font-size: 16px;
  font-weight: bold;
  margin: 90px 0 20px;
  text-align: center;
`;

export const CategoryWrap = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  & > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 35px 0 50px;
`;

export const Button = styled.button`
  width: 152px;
  height: 45px;
  line-height: 45px;
  border-radius: 3px;
  font-size: 16px;
  font-weight: 500;
  border: 1px solid #e3e3e3;
  margin: 0 5px;
  color: white;
  a {
    display: block;
    width: 100%;
    height: 100%;
  }

  &:last-of-type {
    background-color: #d0d0d0;
    &.active {
      background-color: ${({ theme }) => theme.color.main};
    }
    a {
      color: white;
    }
  }
`;
