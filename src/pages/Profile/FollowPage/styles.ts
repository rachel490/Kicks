import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
`;

export const FollowList = styled.ul`
  height: 100%;
`;

export const FollowItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0 ${({ theme }) => theme.style.edge_padding};
  border-bottom: ${({ theme }) => theme.style.border_light};
  cursor: pointer;
  &:hover {
    background-color: #fafafa;
  }
  a {
    display: flex;
    align-items: center;
    flex: 1;
    padding: 12px 0;
  }
`;

export const Name = styled.p`
  margin-left: 10px;
  font-weight: 500;
`;
