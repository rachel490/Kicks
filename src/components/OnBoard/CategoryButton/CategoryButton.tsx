import React, { useState } from 'react';
import * as S from './styles';

interface Prop {
  category: string;
  setCategory: Function;
}

export const CategoryButton = ({ category, setCategory }: Prop) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const eventTarget = e.target as HTMLElement;
    setIsSelected(!isSelected);
    setCategory(eventTarget.innerText);
  };

  return (
    <S.Button onClick={handleClick} isSelected={isSelected}>
      {category}
    </S.Button>
  );
};
