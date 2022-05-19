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

  // console.log('profile', state.userId, username, typeof username, typeof state.userId);

  return (
    <S.Wrap>
      <ProfileHeader userId={Number(state.userId)} />
      {/* <ProfileNavigation userId={Number(userId)} /> */}
    </S.Wrap>
  );
};
