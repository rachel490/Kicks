import React from 'react';
import * as S from './styles';

export const OnBoardingPage = () => {
  const categoryList = [
    '구두',
    '단화',
    '아식스',
    '휠라',
    '나이키',
    '슬립온',
    '아디다스',
    '블루',
    '무채색',
    '덩크',
    '리복',
    '컨버스',
    '오프화이트',
    '프라다',
    '조던',
    '하이탑',
    '골든구스',
    '마르지엘라',
    '구찌',
    '화이트',
    '클락스',
    '레더',
    '뉴발란스'
  ];

  return (
    <S.Wrap>
      <S.Header>관심 카테고리를 모두 선택하고 추천 받아 보세요!</S.Header>
      <S.CategoryWrap>
        {categoryList.map(category => (
          <S.CategoryButton>{category}</S.CategoryButton>
        ))}
      </S.CategoryWrap>
      <S.Buttons>
        <S.Button>다음에 할게요</S.Button>
        <S.Button>선택 완료!</S.Button>
      </S.Buttons>
    </S.Wrap>
  );
};
