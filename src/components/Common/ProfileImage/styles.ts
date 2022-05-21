import styled from 'styled-components';

export const ImageContainer = styled.div<{ size: string }>`
  width: ${({ size }) => size + 'px'};
  height: ${({ size }) => size + 'px'};
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;
