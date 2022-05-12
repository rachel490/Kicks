import styled from 'styled-components';

export const Wrap = styled.div`
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
