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
  const [current, setCurrent] = useState(0);
  const { username } = useParams();
  const { state } = useLocation() as RouteState;

  const isMyPage = username === localStorage.getItem('name');
  const myId = localStorage.getItem('id') || '36';
  const userId = localStorage.getItem('profile-id') || state.userId + '';

  useEffect(() => {
    if (isMyPage) {
      setCurrent(Number(myId));
    } else {
      localStorage.setItem('profile-id', userId);
      setCurrent(Number(userId));
    }
  }, [isMyPage, myId, userId]);

  return (
    <S.Wrap>
      <ProfileHeader userId={current} />
      <ProfileNavigation userId={current} />
    </S.Wrap>
  );
};
