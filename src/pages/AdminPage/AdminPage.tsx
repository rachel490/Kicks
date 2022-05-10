import { AdminNav } from 'components';
import React from 'react';
import { Outlet } from 'react-router-dom';
import * as S from './styles';

export const AdminPage = () => {
  return (
    <S.Wrap>
      <S.Header>
				{/* Logo */}
			</S.Header>
      <S.Main>
        <AdminNav />
				<Outlet />
      </S.Main>
    </S.Wrap>
  );
};
