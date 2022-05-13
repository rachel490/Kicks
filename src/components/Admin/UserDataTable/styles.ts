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
    vertical-align: middle;
    padding: 20px 5px;
  }
`;

export const StatusButton = styled.div`
  button {
    display: block;
    margin: 0 auto;
    padding: 2px 20px;
    font-size: 12px;
    & + button {
      margin-top: 4px;
    }
    &:first-of-type {
      background-color: #000b72;
    }
    &:last-of-type {
      background-color: #690000;
    }
  }
  button,
  a,
  a:focus {
    color: ${({ theme }) => theme.color.text_white};
  }
`;
