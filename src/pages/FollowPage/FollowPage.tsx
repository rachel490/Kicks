import { PageHeader } from 'components';
import { useLocation, useParams } from 'react-router-dom';
import useSWR from 'swr';
import { IFollow, IUserData } from 'data/types';
import { USER_DATA_API, FOLLOWER_API, FOLLOWING_API } from 'utils/api';
import { fetcher, fetcherWithToken } from 'utils/swr';
import * as S from './styles';

export const FollowPage = () => {
  const location = useLocation();
  const { userId } = useParams();
  const page = location.pathname.split('/profile/')[1];
  const id = Number(userId) as number;

  const { data: user } = useSWR(USER_DATA_API(id), fetcherWithToken);
  const { data: follow } = useSWR(
    page === 'following' ? FOLLOWING_API(id) : FOLLOWER_API(id),
    fetcher
  );

  const userData = user?.data as IUserData;
  const followData = follow?.data as IFollow[];

  const pageTitle =
    userData &&
    `${userData.name}님의 ${page === 'following' ? '팔로잉' : '팔로워'}`;

  const addFollowing = () => {};
  const deleteFollowing = () => {};

  return (
    <S.Wrap>
      <PageHeader title={pageTitle} backTo="/profile" />
      <S.FollowList>
        {followData &&
          followData?.map(({ id, member }) => (
            <S.FollowItem key={id}>
              <S.ProfileImg
                src={
                  member.profile_image_url ||
                  'https://ussecuritysupply.com/wp-content/uploads/2013/05/default_avatar.png'
                }
                alt="profile"
              />
              <S.Name>{member.name || ''}</S.Name>
              {userData.name === localStorage.getItem('name') ? (
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
