import { ProfileHeader, ProfileNavigation } from 'components';
import * as S from './styles';

export const ProfilePage = () => {
  return (
    <S.Wrap>
      <ProfileHeader />
      <ProfileNavigation />
    </S.Wrap>
  );
};
