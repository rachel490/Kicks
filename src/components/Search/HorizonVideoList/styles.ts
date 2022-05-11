import styled from 'styled-components';

export const VideoSection = styled.div`
  & + & {
    margin-top: 10px;
  }
  .video-container {
    display: flex;
    padding-left: 10px;
    li + li {
      padding-left: 3px;
    }
    video {
      width: 115px;
    }
  }
`;

export const SectionTitle = styled.h3`
  padding: 10px ${({ theme }) => theme.style.edge_padding};
`;

export const NoUser = styled.div`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    font-size: 13px;
    padding: 8px 13px;
    background-color: ${({ theme }) => theme.color.main};
    color: ${({ theme }) => theme.color.text_white};
    border-radius: 20px;
  }
`;
