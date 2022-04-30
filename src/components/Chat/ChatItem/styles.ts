import styled from 'styled-components';

export const ChatItemContainer = styled.li`
  display: flex;
  padding: 20px ${({ theme }) => theme.style.edge_padding};
  border-bottom: ${({ theme }) => theme.style.border_light};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.color.nav_active_bg};
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
  .chat_text {
    font-size: 14px;
  }
`;
