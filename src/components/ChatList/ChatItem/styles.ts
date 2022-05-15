import styled from 'styled-components';

export const ChatItemContainer = styled.li`
  display: flex;
  padding: 20px ${({ theme }) => theme.style.edge_padding};
  border-bottom: ${({ theme }) => theme.style.border_light};
  cursor: pointer;
  &:hover {
    background-color: #fafafa;
  }
  img {
    width: 50px;
    height: 50px;
    border-radius: 50px;
  }
`;

export const ChatPreview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
  .chat_user {
    margin-bottom: 5px;
    font-weight: 600;
    font-size: 15px;
  }
  .last_chatted_at {
    font-size: 13px;
    font-weight: 400;
    margin-left: 7px;
    padding-left: 7px;
    position: relative;
    &:before {
      content: '';
      width: 2px;
      height: 2px;
      border-radius: 50%;
      background: #333;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      position: absolute;
    }
  }
`;
