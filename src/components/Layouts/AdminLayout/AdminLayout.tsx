import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import * as S from './styles';
import { AdminNav } from 'components';
import { ReactComponent as AdminLogo } from 'assets/svg/admin_logo.svg';

export const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/admin') navigate('/admin/users');
  }, [location, navigate]);

  return (
    <S.Wrap>
      <S.Header>
        <AdminLogo />
      </S.Header>
      <S.Main>
        <AdminNav />
        <Outlet />
      </S.Main>
    </S.Wrap>
  );
};
