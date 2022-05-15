import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  height: calc(100% - ${({ theme }) => theme.style.nav_height});
  overflow: hidden;
  .swiper-container,
  .swiper-wrapper,
  .swiper-slide {
    height: 100% !important;
  }
`;
