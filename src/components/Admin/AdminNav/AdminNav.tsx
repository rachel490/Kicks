import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import * as S from './styles';

export const AdminNav = () => {
  const menuList = [
    { name: '유저', linkTo: '/admin/user' },
    { name: '메인 콘텐츠', linkTo: '/admin/contents' }
  ];

  return (
    <S.Nav>
      <S.NavTitle>
        <Link to="/admin">Admin</Link>
      </S.NavTitle>
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
