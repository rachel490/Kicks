import axios from 'axios';
import { PageHeader, ProfileImage } from 'components';
import { useLocation } from 'react-router-dom';
import useSWR from 'swr';
import { IFollow } from 'types';
import {
  FOLLOWER_API,
  FOLLOWING_API,
  FOLLOW_API,
  UNFOLLOW_API
} from 'utils/api';
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

  const addFollowing = (id: number) => {
    axios
      .post(FOLLOW_API(id), {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('AC_Token')}`
        }
      })
      .then(() => {
        mutate();
      })
      .catch(error => console.log(error));
  };

  const deleteFollowing = (id: number) => {
    axios
      .delete(UNFOLLOW_API(id), {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('AC_Token')}`
        }
      })
      .then(() => {
        mutate();
      })
      .catch(error => console.log(error));
  };

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
                  <S.Button onClick={() => deleteFollowing(id)}>삭제</S.Button>
                ) : (
                  <S.Button onClick={() => addFollowing(member.id)}>
                    팔로우
                  </S.Button>
                )
              ) : null}
            </S.FollowItem>
          ))}
      </S.FollowList>
    </S.Wrap>
  );
};
