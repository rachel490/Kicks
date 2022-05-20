import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const VideoContent = styled.div`
  flex: 1;

  & > div > div:first-child {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: min-content;
    gap: 3px;
    padding: 3px 10px;
  }
`;

export const VideoLink = styled(Link)`
  display: block;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.14);

  img {
    display: block;
    width: 115px;
    height: 157px;
    object-fit: cover;
  }
`;

export const MessageContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`;
