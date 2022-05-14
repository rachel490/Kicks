import { PageHeader } from 'components';
import { useLocation } from 'react-router-dom';
import * as S from './styles';

export const FollowPage = () => {
  const location = useLocation();
  const page = location.pathname.split('/profile/')[1];
  const { user } = location.state as { user: string };
  const pageTitle = `${user} 의 ${page === 'following' ? '팔로잉' : '팔로워'}`;

  return (
    <S.Wrap>
      <PageHeader title={pageTitle} backTo="/profile" />
      <div>유저 목록</div>
    </S.Wrap>
  );
};
