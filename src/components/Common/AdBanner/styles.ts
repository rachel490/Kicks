import styled from 'styled-components';

export const AdBannerContainer = styled.div`
  position: relative;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-position: center;
    object-fit: cover;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
`;
