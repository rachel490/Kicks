import styled from 'styled-components';

export const MessageListContainer = styled.ul`
  flex: 1;
  padding: ${({ theme }) => theme.style.edge_padding};
  padding-right: 5px;

  & > div > div:first-of-type {
    overflow-x: auto !important;
    margin-bottom: 0 !important;
  }
`;

export const DateSection = styled.section`
  margin-right: 10px;
  & + & {
    margin-top: 25px;
  }
`;

export const Date = styled.p`
  text-align: center;
  font-size: 13px;
  color: #888;
  position: relative;
  margin-bottom: 15px;

  &:before,
  &:after {
    content: '';
    height: 1px;
    width: 120px;
    background-color: #bbb;
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
  }
  &:before {
    left: 0;
  }
  &:after {
    right: 2px;
  }
`;
