import { useEffect, useState } from 'react';
import { ProfileHeader, ProfileNavigation } from 'components';
import { useLocation, useParams } from 'react-router-dom';
import * as S from './styles';

interface RouteState {
  state: {
    userId: number;
  };
}

export const ProfilePage = () => {
  const { username } = useParams();
  const { state } = useLocation() as RouteState;
  const isMyPage = username === localStorage.getItem('name');
  const myId = localStorage.getItem('id');
  const userId = localStorage.getItem('profile-id') || state.userId + '';
  const [current, setCurrent] = useState(Number(myId) || Number(userId));

  useEffect(() => {
    if (isMyPage) {
      setCurrent(Number(myId));
    } else {
      localStorage.setItem('profile-id', state ? state.userId + '' : userId);
      setCurrent(Number(userId));
    }
  }, [isMyPage, myId, userId, state]);

  return (
    <S.Wrap>
      <ProfileHeader userId={current} />
      <ProfileNavigation userId={current} />
    </S.Wrap>
  );
};
