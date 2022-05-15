import styled from 'styled-components';

export const Wrap = styled.div`
  left: ${({ theme }) => theme.style.edge_padding};
  position: absolute;
  bottom: 25px;
  width: 290px;
  z-index: 1000;
`;

export const ContentBox = styled.div<{ isShown: boolean }>`
  display: ${props => (props.isShown ? 'block' : 'none')};
  width: 100%;
  max-height: 150px;
  padding: 16px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  color: white;
  .price {
    font-size: 16px;
    span {
      font-size: 18px;
    }
  }

  .name {
    font-size: 14px;
    margin: 5px 0 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
  }

  .secondhand,
  .desc {
    font-size: 12px;
    opacity: 0.8;
  }

  .desc {
    margin-top: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* 라인수 */
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    line-height: 14px;
  }
`;

export const HideBtn = styled.button`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 2px 5px;
  font-size: 12px;
  color: #f1f1f1;
  border-radius: 6px;
  margin: 4px 3px;
  margin-left: auto;
  display: block;
`;
