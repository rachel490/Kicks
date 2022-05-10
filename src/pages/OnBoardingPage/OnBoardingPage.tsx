import React, { useState } from 'react';
import * as S from './styles';
import { AppContainer, CategoryButton } from 'components';

export const OnBoardingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<String[]>([]);

  const setCategory = (category: string) => {
    if (!selectedCategory.includes(category)) {
      setSelectedCategory([...selectedCategory, category]);
    } else {
      setSelectedCategory(
        selectedCategory.filter(selected => selected !== category)
      );
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

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
    <AppContainer>
      <S.Form onSubmit={handleSubmit}>
        <S.Header>관심 카테고리를 모두 선택하고 추천 받아 보세요!</S.Header>
        <S.CategoryWrap>
          {categoryList.map((category, idx) => (
            <CategoryButton
              key={idx}
              category={category}
              setCategory={setCategory}
            />
          ))}
        </S.CategoryWrap>
        <S.Buttons>
          <S.Button type="submit">다음에 할게요</S.Button>
          <S.Button
            type="submit"
            className={selectedCategory.length > 0 ? 'category' : 'noCategory'}
          >
            선택 완료!
          </S.Button>
        </S.Buttons>
      </S.Form>
    </AppContainer>
  );
};
