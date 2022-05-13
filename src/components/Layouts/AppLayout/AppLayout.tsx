import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import * as S from './styles';
import { ReactComponent as ChatIcon } from 'assets/svg/chat_nav.svg';
import { ReactComponent as HomeIcon } from 'assets/svg/home.svg';
import { ReactComponent as ProfileIcon } from 'assets/svg/profile.svg';
import { ReactComponent as SearchIcon } from 'assets/svg/searchbar.svg';
import { ReactComponent as UploadIcon } from 'assets/svg/upload.svg';

export const AppLayout = () => {
  const menuList = [
    { name: '홈', linkTo: '/', component: <HomeIcon /> },
    { name: '검색', linkTo: '/search', component: <SearchIcon /> },
    { name: '업로드', linkTo: '/upload', component: <UploadIcon /> },
    { name: '채팅', linkTo: '/chats', component: <ChatIcon /> },
    { name: '프로필', linkTo: '/profile', component: <ProfileIcon /> }
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
              <div className="icon">{menu.component}</div>
              <span>{menu.name}</span>
            </NavLink>
          </S.MenuItem>
        ))}
      </S.MainNavigation>
    </S.AppContainer>
  );
};
