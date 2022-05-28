import styled from 'styled-components';

export const AdminContainer = styled.div`
  width: 75%;
  height: 100%;
  margin: 0 auto;
`;

export const PageOption = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 150px;
  line-height: 150px;
  text-align: right;
`;

export const DataList = styled.div`
  overflow-y: scroll;
  height: calc(100% - 150px);
  ::-webkit-scrollbar {
    display: block;
    width: 6px;
    margin-top: 30px;
  }
  ::-webkit-scrollbar-track {
    background-color: #fff;
    -webkit-border-radius: 6px;
    border-radius: 6px;
  }
  ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 6px;
    border-radius: 6px;
    background: #cacaca;
  }
`;

export const TableContainer = styled(DataList)`
  margin-top: -25px;
`;

export const SearchUser = styled.div`
  display: flex;
  border: 1px solid #dadada;
  background-color: #fafafa;
  padding: 10px;

  input {
    padding: 0;
    background: transparent;
  }
  svg {
    margin-left: 7px;
    width: 16px;
    height: 16px;
  }
`;
