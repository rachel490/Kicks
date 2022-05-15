import React from 'react';
import * as S from './styles';

interface Prop {
  children: React.ReactNode;
  name: string;
  title: string;
}

export const InputBox = ({ children, name, title }: Prop) => {
  return (
    <S.InputBox>
      <S.Label htmlFor={name}>{title}</S.Label>
      {children}
    </S.InputBox>
  );
};
