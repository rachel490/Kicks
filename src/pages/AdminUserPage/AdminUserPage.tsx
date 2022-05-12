import React from 'react';
import * as S from './styles';

export const AdminUserPage = () => {
  return (
    <S.Wrap>
      <S.PageOption>
        <input type="text" placeholder="search" />
      </S.PageOption>
      <S.DataList>유저 데이터 테이블</S.DataList>
    </S.Wrap>
  );
};
