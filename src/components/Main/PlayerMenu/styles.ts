import styled from 'styled-components';

export const Wrap = styled.div<{ isShown: boolean }>`
  display: ${props => (props.isShown ? 'flex' : 'none')};
  position: absolute;
  right: ${({ theme }) => theme.style.edge_padding};
  bottom: 35px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
`;

export const Button = styled.button`
  position: relative;
  width: 100%;
  & + & {
    margin-top: 45px;
  }
  &:nth-of-type(even) {
    margin-top: 38px;
  }
  img {
    width: 48px;
    height: 48px;
    object-fit: cover;
    border-radius: 50%;
  }
  .follow {
    width: 18px;
    height: 18px;
    position: absolute;
    bottom: -4px;
    left: 15px;
    opacity: 0.8;
  }
  .icon {
    width: 30px;
    height: 30px;
    display: block;
    margin: 0 auto;
    color: white;
    filter: drop-shadow(2px 3px 1px rgb(0 0 0 / 0.3));
  }
  &:nth-of-type(2) .icon {
    width: 27px;
    height: 27px;
  }
`;
