import React from 'react';
import * as S from './styles';
import { IoIosNotificationsOutline } from 'react-icons/io';

export const MainHeader = () => {
  return (
    <S.Header>
      <S.Category>
        <button>팔로잉</button>
        <span>|</span>
        <button>추천</button>
      </S.Category>
      <S.Notification>
        <IoIosNotificationsOutline className="icon"/>
      </S.Notification>
    </S.Header>
  );
};
