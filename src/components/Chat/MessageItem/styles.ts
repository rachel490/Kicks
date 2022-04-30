import styled from 'styled-components';

export const MessageItemContainer = styled.li`
  display: flex;
  align-items: center;
  &.my-message {
    justify-content: flex-end;
    p {
      color: ${({ theme }) => theme.color.text_white};
      background-color: ${({ theme }) => theme.color.main};
    }
  }
  img {
    width: 30px;
    width: 30px;
    border-radius: 50%;
  }
  p {
    margin-left: 10px;
    padding: 10px 12px;
    font-size: 14px;
    background-color: ${({ theme }) => theme.color.msg_bg};
    border-radius: 20px;
    margin-right: 5px;
    white-space: pre-wrap;
    line-height: 1.3;
  }
  span {
    font-size: 13px;
    color: #aaa;
  }
  & + li {
    margin-top: 10px;
  }
`;
