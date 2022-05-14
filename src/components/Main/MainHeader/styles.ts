import styled from 'styled-components';

export const Header = styled.div`
  width: 100%;
  position: absolute;
  top: 20px;
  padding: 0 ${({ theme }) => theme.style.edge_padding};
  text-align: center;
  z-index: 1000;
`;

export const Category = styled.div`
  display: inline-block;
  padding: 0 5px;
  margin-right: -25px;

  button {
    font-size: 15px;
    line-height: 35px;
    font-weight: 600;
    color: #555;
    text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.5);
    padding: 0 10px;
    position: relative;
    &:hover,
    &.active {
      color: #f3f3f3;
      text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
    }
    &:last-of-type::before {
      content: '';
      position: absolute;
      width: 1px;
      height: 14px;
      background-color: #888;
      left: 0;
      top: 48%;
      box-shadow: 1px 1px 1px rgba(255, 255, 255, 0.1);
      transform: translateY(-50%);
    }
  }
`;

export const Notification = styled.div`
  cursor: pointer;
  float: right;
  .icon {
    width: 30px;
    height: 30px;
    color: white;
    filter: drop-shadow(2px 3px 1px rgb(0 0 0 / 0.3));
  }
`;
