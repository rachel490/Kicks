import styled from 'styled-components';

export const ContentBox = styled.div`
  padding: 16px;
  width: 300px;
  height: 160px;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  z-index: 1000;
  bottom: 0;
  border-radius: 10px;
  margin: 0 0 90px 10px ;
  color: white;

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
    margin-top: 25px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3; /* 라인수 */
		-webkit-box-orient: vertical;
		word-wrap: break-word;
		line-height: 14px;
		height: 42px; 
	}
`;
