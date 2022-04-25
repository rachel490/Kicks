import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AppContainer, Contents, MainNavigation } from './styles';

export const AppLayout = () => {
  return (
    <AppContainer>
      <Contents>
        <Outlet />
      </Contents>
      <MainNavigation>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/search">검색</Link>
        </li>
        <li>
          <Link to="/upload">업로드</Link>
        </li>
        <li>
          <Link to="/chat">채팅</Link>
        </li>
        <li>
          <Link to="/mypage">마이페이지</Link>
        </li>
      </MainNavigation>
    </AppContainer>
  );
};
