import styled from 'styled-components';

export const Button = styled.button`
  position: relative;
  width: 100%;
  & + & {
    margin-top: 45px;
  }
  &:nth-of-type(3) {
    margin-top: 35px;
  }
  p.likes {
    font-size: 12px;
    margin-top: 5px;
    color: white;
  }
  .follow {
    width: 18px;
    height: 18px;
    position: absolute;
    bottom: -4px;
    left: 15px;
    opacity: 0.8;
  }
  .icon {
    width: 30px;
    height: 30px;
    display: block;
    margin: 0 auto;
    color: white;
    filter: drop-shadow(2px 3px 1px rgb(0 0 0 / 0.3));
  }
  &:nth-of-type(2) .icon {
    width: 27px;
    height: 27px;
  }
`;
