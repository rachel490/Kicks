import styled from 'styled-components';

export const ChatListContainer = styled.ul``;

export const ChatItem = styled.li`
  padding: 20px ${({ theme }) => theme.style.edge_padding};
  border-bottom: ${({ theme }) => theme.style.border_light};
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.nav_active_bg};
  }
`;
