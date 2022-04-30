import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import * as S from './styles';

export const AppLayout = () => {
  const menuList = [
    { name: '홈', linkTo: '/' },
    { name: '검색', linkTo: '/search' },
    { name: '업로드', linkTo: '/upload' },
    { name: '채팅', linkTo: '/chat' },
    { name: '프로필', linkTo: '/profile' }
  ];

  return (
    <S.AppContainer>
      <Outlet />
      <S.MainNavigation>
        {menuList.map((menu, i) => (
          <S.MenuItem key={i}>
            <NavLink
              to={menu.linkTo}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {menu.name}
            </NavLink>
          </S.MenuItem>
        ))}
      </S.MainNavigation>
    </S.AppContainer>
  );
};
