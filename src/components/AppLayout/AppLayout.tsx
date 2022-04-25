import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AppContainer, Contents, MainNavigation, MenuItem } from './styles';

export const AppLayout = () => {
  const menuList = [
    { name: '홈', linkTo: '/' },
    { name: '검색', linkTo: '/search' },
    { name: '업로드', linkTo: '/upload' },
    { name: '채팅', linkTo: '/chat' },
    { name: '마이페이지', linkTo: '/mypage' }
  ];

  return (
    <AppContainer>
      <Contents>
        <Outlet />
      </Contents>
      <MainNavigation>
        {menuList.map((menu, i) => (
          <MenuItem key={i}>
            <NavLink
              to={menu.linkTo}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {menu.name}
            </NavLink>
          </MenuItem>
        ))}
      </MainNavigation>
    </AppContainer>
  );
};
