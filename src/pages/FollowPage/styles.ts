import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const PageTitle = styled.h3`
  display: flex;
  align-items: center;
  padding: 0 15px;
  height: ${({ theme }) => theme.style.header_height};
  border-bottom: 1px solid #dadada;
  font-size: 15px;
  font-weight: bold;
`;
