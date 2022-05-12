import React from 'react';
import { NavLink } from 'react-router-dom';
import * as S from './styles';

export const AdminNav = () => {
  const menuList = [
    { name: '유저', linkTo: '/admin/user' },
    { name: '메인 콘텐츠', linkTo: '/admin/contents' }
  ];

  return (
    <S.Nav>
      <S.NavTitle>Admin</S.NavTitle>
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
    </S.Nav>
  );
};
