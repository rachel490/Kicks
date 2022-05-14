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
  padding: 12px ${({ theme }) => theme.style.edge_padding};
  border-bottom: ${({ theme }) => theme.style.border_light};
  cursor: pointer;
  &:hover {
    background-color: #fafafa;
  }
`;

export const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
`;

export const Name = styled.p`
  margin-left: 10px;
  font-weight: 500;
  margin-bottom: 5px;
`;

export const Button = styled.button`
  margin-left: auto;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 2px 5px;
`;
