import { ProfileHeader, ProfileNavigation } from 'components';
import { useParams } from 'react-router-dom';
import * as S from './styles';

export const ProfilePage = () => {
  const { userId } = useParams();
  // console.log('profile', userId);

  return (
    <S.Wrap>
      <ProfileHeader userId={Number(userId)} />
      <ProfileNavigation userId={Number(userId)} />
    </S.Wrap>
  );
};
