import styled from 'styled-components';

export const SortByList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  li {
    cursor: pointer;
    padding: 0 10px;
    &.active {
      font-weight: 600;
    }
  }
`;
