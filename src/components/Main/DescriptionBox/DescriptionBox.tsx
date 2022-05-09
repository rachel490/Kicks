import React from 'react';
import * as S from './styles';

export const DescriptionBox = ({
  title,
  description
}: {
  title: string;
  description: string;
}) => {
  return (
    <S.ContentBox>
      <h1 className="price">129,000</h1>
      <h2 className="name">{title}</h2>
      <span className="secondhand">중고</span>
      <p className="desc">{description}</p>
    </S.ContentBox>
  );
};
