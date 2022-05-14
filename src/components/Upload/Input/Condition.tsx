import { useState } from 'react';
import { InputBox } from 'components';
import * as S from './styles';

export const Condition = () => {
  const [isNew, setIsNew] = useState(true);
  const toggleIsNew = () => {
    setIsNew(!isNew);
  };

  return (
    <InputBox name="condition" title="상품 상태">
      <S.Buttons>
        <S.Button type="button" selected={isNew} onClick={toggleIsNew}>
          새상품
        </S.Button>
        <S.Button type="button" selected={!isNew} onClick={toggleIsNew}>
          중고
        </S.Button>
      </S.Buttons>
    </InputBox>
  );
};
