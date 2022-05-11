import styled from 'styled-components';

export const Overlay = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.style.header_height};
  width: 100%;
  height: calc(100% - ${({ theme }) => theme.style.header_height});
  background: rgba(213, 213, 213, 0.85);
  z-index: 10;
`;

export const HistoryListContainer = styled.ul`
  width: 100%;
  min-height: 130px;
  background: #fff;
  li {
    padding: 15px ${({ theme }) => theme.style.edge_padding};
    border-top: 1px solid #eaeaea;
  }
`;

export const Title = styled.h3`
  display: flex;
  justify-content: space-between;
  align-content: center;
  font-size: 13px;
  font-weight: bold;
  padding: 10px ${({ theme }) => theme.style.edge_padding};
  background: #f8f8f8;
`;

export const Reset = styled.button`
  color: #888;
  font-weight: 300;
`;

export const EmptyHistory = styled.p`
  line-height: 100px;
  font-size: 13px;
  color: #999;
  text-align: center;
`;

export const HistoryItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-content: center;
  border-bottom: 1px solid #eaeaea;
  cursor: pointer;
`;

export const RemoveButton = styled.button``;
