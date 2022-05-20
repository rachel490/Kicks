import React, { useEffect } from 'react';
import { IVideoItem } from 'types';
import * as S from './styles';

interface Prop {
  videoData: IVideoItem;
  isShown: boolean;
  setIsShown: Function;
}

export const DescriptionBox = ({ videoData, isShown, setIsShown }: Prop) => {
  const { title, description, price, used_status } = videoData;

  const handleClick = () => setIsShown(!isShown);

  useEffect(() => {
    setIsShown(true);
  }, [setIsShown]);

  return (
    <S.Wrap>
      <S.HideBtn onClick={handleClick}>
        {isShown ? '영상만 보기' : '전체 보기'}
      </S.HideBtn>
      <S.ContentBox isShown={isShown}>
        <h1 className="price">
          <span>{price.toLocaleString()}</span>원
        </h1>
        <h2 className="name">{title}</h2>
        <span className="secondhand">{used_status ? '중고' : '새 상품'}</span>
        <p className="desc">{description}</p>
      </S.ContentBox>
    </S.Wrap>
  );
};
