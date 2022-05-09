import React from 'react'
import { Link } from 'react-router-dom';
import * as S from './styles';

export const AdminNav = () => {
	return (
    <S.Nav>
      <Link to="/admin">
        <h1>Admin</h1>
      </Link>
      <Link to="/admin/user">
        <p>유저</p>
      </Link>
      <Link to="/admin/contents">
        <p>메인 콘텐츠</p>
      </Link>
    </S.Nav>
  );
}
