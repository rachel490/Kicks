import styled from 'styled-components';

export const Overlay = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.style.header_height};
  width: 100%;
  height: calc(100% - ${({ theme }) => theme.style.header_height});
  background: rgba(0, 0, 0, 0.3);
  cursor: pointer;
  z-index: 10;
`;

export const HistoryListContainer = styled.ul`
  width: 100%;
  background: #fff;
  h3 {
    font-size: 13px;
    font-weight: bold;
    padding: 10px ${({ theme }) => theme.style.edge_padding};
  }
  li {
    padding: 15px ${({ theme }) => theme.style.edge_padding};
    border-top: 1px solid #eaeaea;
  }
`;
