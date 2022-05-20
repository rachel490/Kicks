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
