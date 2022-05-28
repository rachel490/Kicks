import { PageHeader, ProfileImage } from 'components';
import { FollowButton } from 'components/Profile/FollowButton/FollowButton';
import { Link, useLocation } from 'react-router-dom';
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

  const { data: follow, mutate } = useSWR(
    page === 'following'
      ? FOLLOWING_API(state.userId)
      : FOLLOWER_API(state.userId),
    fetcher
  );

  const followData = follow?.data as IFollow[];

  const pageTitle = `${userName}님의 ${
    page === 'following' ? '팔로잉' : '팔로워'
  }`;

  return (
    <S.Wrap>
      <PageHeader title={pageTitle} backTo={'/' + userName} />
      <S.FollowList>
        {followData &&
          followData?.map(({ id, member }) => (
            <S.FollowItem key={id}>
              <Link to={`/${member.name}`} state={{ userId: member.id }}>
                <ProfileImage size="50" url={member.profile_image_url} />
                <S.Name>{member.name || ''}</S.Name>
              </Link>
              {userName === localStorage.getItem('name') && (
                <FollowButton
                  mutate={mutate}
                  page={page}
                  id={page === 'following' ? id : member.id}
                />
              )}
            </S.FollowItem>
          ))}
      </S.FollowList>
    </S.Wrap>
  );
};
