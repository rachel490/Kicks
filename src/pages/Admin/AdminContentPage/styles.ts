import { DataList } from 'pages/Admin/AdminUserPage/styles';
import styled from 'styled-components';

export const DropDown = styled.select`
  padding: 2px;
`;

export const ContentsContainer = styled(DataList)`
  height: calc(100% - 180px);
  padding: 30px 12px;
  border-top: 1px solid black;
  display: grid;
  justify-content: space-between;

  &.three {
    grid-template-columns: repeat(3, 240px);
  }

  &.five {
    grid-template-columns: repeat(5, 160px);
  }

  &.ten {
    grid-template-columns: repeat(10, 72px);
  }
`;
