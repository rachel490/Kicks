import styled from 'styled-components';

export const Table = styled.table`
  text-align: center;
  border-collapse: collapse;
  width: 100%;
  position: relative;
`;

export const TableHead = styled.thead`
  position: sticky;
  top: 0;
  width: 100%;
  background-color: #f1f1f1;
  box-shadow: 0 2px 0 #333;
  th {
    padding: 15px 10px;
    font-weight: bold;
  }
`;

export const TableBody = styled.tbody`
  tr {
    border-bottom: 1px solid #ddd;
    &:hover {
      background-color: #ddd;
    }
  }
  td {
    padding: 20px 5px;
  }
`;
