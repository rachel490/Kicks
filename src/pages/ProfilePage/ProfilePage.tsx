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

  return (
    <S.Wrap>
      <ProfileHeader userId={state.userId} />
      <ProfileNavigation userId={state.userId} />
    </S.Wrap>
  );
};
