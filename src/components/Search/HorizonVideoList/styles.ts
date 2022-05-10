import styled from 'styled-components';

export const VideoSection = styled.div`
  & + & {
    margin-top: 10px;
  }
`;

export const SectionTitle = styled.h3`
  padding: 10px ${({ theme }) => theme.style.edge_padding};
`;

export const ListContainer = styled.ul`
  display: flex;
  overflow: hidden;
  padding-left: 10px;
  li + li {
    padding-left: 3px;
  }
  video {
    width: 115px;
  }
`;
