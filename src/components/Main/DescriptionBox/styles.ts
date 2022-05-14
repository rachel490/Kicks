import styled from 'styled-components';

export const ContentBox = styled.div<{ isShown: boolean }>`
  padding: 16px;
  width: 300px;
  max-height: 160px;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  z-index: 1000;
  bottom: 0;
  border-radius: 10px;
  margin: 0 0 90px 10px;
  color: white;
  display: ${props => (props.isShown ? 'block' : 'none')};

  .price {
    font-size: 18px;
    line-height: 27px;
  }

  .name {
    font-size: 14px;
    line-height: 21px;
  }

  .seconhand,
  .desc {
    font-size: 12px;
  }

  .desc {
    margin: 25px 0 5px;
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
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #c4c4c4;
  width: 55px;
  height: 20px;
  font-size: 13px;
  color: black;
  border-radius: 6px;
`;
