import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const PageTitle = styled.h3`
  display: flex;
  align-items: center;
  padding: 0 15px;
  height: ${({ theme }) => theme.style.header_height};
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  font-size: 15px;
  font-weight: bold;
`;

export const AdSection = styled.div`
  cursor: pointer;
  img {
    width: 100%;
    height: 100px;
    object-position: center;
    object-fit: cover;
  }
`;
