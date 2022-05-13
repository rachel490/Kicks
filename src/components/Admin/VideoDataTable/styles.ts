import styled from 'styled-components';
import { Table } from 'components/Admin/UserDataTable/styles';

export const TableContainer = styled.div`
  overflow-y: scroll;
  height: calc(100% - 300px);
`;

export const ContentTable = styled(Table)`
  td {
    line-height: 1.3;
    max-width: 200px;
    word-break: break-word;
    padding: 10px 10px;
    &:nth-of-type(1) {
      width: 8%;
    }
    &:nth-of-type(2) {
      width: 14%;
    }
    &:nth-of-type(3) {
      width: 18%;
    }
    &:nth-of-type(4) {
      width: 18%;
    }
    &:nth-of-type(6) {
      width: 10%;
    }
    img {
      width: 120px;
      height: 120px;
      object-fit: cover;
    }
    a {
      word-break: break-all;
      color: #2121c0;
      text-decoration: underline;
    }
  }
`;
export const DeleteButton = styled.button`
  display: block;
  margin: 0 auto;
  padding: 2px 15px;
  font-size: 12px;
  background-color: #690000;
  color: ${({ theme }) => theme.color.text_white};
`;
