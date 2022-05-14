import React from 'react';
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
  }
  return (
    <S.ContentBox isShown={isShown}>
      <S.HideBtn onClick={handleClick}>숨기기</S.HideBtn>
      <h1 className="price">129,000</h1>
      <h2 className="name">{title}</h2>
      <span className="secondhand">중고</span>
      <p className="desc">{description}</p>
    </S.ContentBox>
  );
};
