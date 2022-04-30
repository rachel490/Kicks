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
  height: 50px;
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
