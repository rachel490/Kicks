import styled from 'styled-components';

export const VideoSection = styled.div`
  & + & {
    margin-top: 10px;
  }
  .video-container {
    display: flex;
    padding-left: 10px;
  
    a {
      padding-left: 3px;
    }

    a:last-child {
      padding-right: 10px;
    }
  }
`;

export const SectionTitle = styled.h3`
  padding: 10px ${({ theme }) => theme.style.edge_padding};
`;
