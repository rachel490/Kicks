import { PageHeader } from 'components';
import { useLocation } from 'react-router-dom';
import useSWR from 'swr';
import { IFollow } from 'data/types';
import { FOLLOWER_API, FOLLOWING_API } from 'utils/api';
import { fetcher } from 'utils/swr';
import * as S from './styles';

export const FollowPage = () => {
  const location = useLocation();
  const page = location.pathname.split('/profile/')[1];
  const { user } = location.state as { user: string };
  const pageTitle = `${user} 의 ${page === 'following' ? '팔로잉' : '팔로워'}`;

  const { data: followData } = useSWR<IFollow[]>(
    page === 'following' ? FOLLOWING_API : FOLLOWER_API,
    fetcher
  );

  const addFollowing = () => {};
  const deleteFollowing = () => {};

  return (
    <S.Wrap>
      <PageHeader title={pageTitle} backTo="/profile" />
      <S.FollowList>
        {followData &&
          followData.map(({ id, member }) => (
            <S.FollowItem key={id}>
              <S.ProfileImg src={member.profile_image_url} alt="profile" />
              <S.Name>{member.name}</S.Name>

              {/* // TODO: 로그인한 유저가 아니면 버튼 숨기기 */}
              {page === 'following' ? (
                <S.Button onClick={deleteFollowing}>삭제</S.Button>
              ) : (
                <S.Button onClick={addFollowing}>팔로우</S.Button>
              )}
            </S.FollowItem>
          ))}
      </S.FollowList>
    </S.Wrap>
  );
};
