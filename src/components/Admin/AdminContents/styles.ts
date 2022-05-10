import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const DropDown = styled.select`
  position: absolute;
  top: 88px;
  right: 200px;
`;

export const ContentsContainer = styled.div`
  margin: 170px 185px 0 20px;
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
