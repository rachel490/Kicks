import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const VideoContent = styled.ul`
  flex: 1;
  & > div > div:first-child {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3px;
    padding: 3px 10px;
  }
`;

export const VideoLink = styled(Link)`
  img {
    min-width: 115px;
    width: 100%;
    height: 157px;
    object-fit: cover;
  }
`;
