import styled from 'styled-components';

export const VideoContent = styled.ul`
  height: 100%;
  & > div > div:first-child {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3px;
    padding: 3px 10px;
  }
`;
