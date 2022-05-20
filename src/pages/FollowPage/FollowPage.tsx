import { PageHeader, ProfileImage } from 'components';
import { useLocation } from 'react-router-dom';
import useSWR from 'swr';
import { IFollow } from 'types';
import { FOLLOWER_API, FOLLOWING_API } from 'utils/api';
import { fetcher } from 'utils/swr';
import * as S from './styles';

interface RouteState {
  state: {
    userId: number;
  };
}

export const FollowPage = () => {
  const location = useLocation();
  const { state } = useLocation() as RouteState;
  const userName = decodeURI(location.pathname.split('/')[1]);
  const page = location.pathname.split('/')[2];

  const { data: follow } = useSWR(
    page === 'following'
      ? FOLLOWING_API(state.userId)
      : FOLLOWER_API(state.userId),
    fetcher
  );

  const followData = follow?.data as IFollow[];

  const pageTitle = `${userName}님의 ${
    page === 'following' ? '팔로잉' : '팔로워'
  }`;

  const addFollowing = () => {};
  const deleteFollowing = () => {};

  return (
    <S.Wrap>
      <PageHeader title={pageTitle} backTo={'/' + userName} />
      <S.FollowList>
        {followData &&
          followData?.map(({ id, member }) => (
            <S.FollowItem key={id}>
              <ProfileImage size="50" url={member.profile_image_url} />
              <S.Name>{member.name || ''}</S.Name>
              {userName === localStorage.getItem('name') ? (
                page === 'following' ? (
                  <S.Button onClick={deleteFollowing}>삭제</S.Button>
                ) : (
                  <S.Button onClick={addFollowing}>팔로우</S.Button>
                )
              ) : null}
            </S.FollowItem>
          ))}
      </S.FollowList>
    </S.Wrap>
  );
};
