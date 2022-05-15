import React, { useEffect } from 'react';
import * as S from './styles';

interface Prop {
  title: string;
  description: string;
  isShown: boolean;
  setIsShown: Function;
}

export const DescriptionBox = ({
  title,
  description,
  isShown,
  setIsShown
}: Prop) => {
  const handleClick = () => {
    setIsShown(!isShown);
  };
  const price = '129,000';

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
          <span>{price}</span>원
        </h1>
        <h2 className="name">{title}</h2>
        <span className="secondhand">중고</span>
        <p className="desc">{description}</p>
      </S.ContentBox>
    </S.Wrap>
  );
};
