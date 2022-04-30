import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PageHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: ${({ theme }) => theme.style.header_height};
  padding: 0 ${({ theme }) => theme.style.edge_padding};
  border-bottom: 1px solid #dadada;
`;

export const BackIcon = styled(Link)`
  position: absolute;
  left: ${({ theme }) => theme.style.edge_padding};
  img {
    display: block;
    width: 30px;
  }
`;

export const PageTitle = styled.h2`
  width: 100%;
  text-align: center;
  font-weight: 600;
`;
