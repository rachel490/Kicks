import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import * as S from './styles';
import { ReactComponent as FollowIcon } from 'assets/svg/follow.svg';
import { FOLLOW_API } from 'utils/api';
import { IUser } from 'types';
import { ProfileImage } from 'components';
import isLogin from 'utils/isLogin';
import { useFollow } from 'hooks/useFollow';

interface Props {
  userData: IUser;
}

export const ProfileFollow = ({ userData }: Props) => {
  const { id, name, profile_image_url } = userData;
  const isMyProfile = id === Number(localStorage.getItem('id'));
  const { isFollowed, setIsFollowed, checkFollow, loading, setLoading } =
    useFollow();

  useEffect(() => {
    isLogin() && checkFollow(id);
  }, [checkFollow, id]);

  const handleFollow = () => {
    setLoading(true);
    const config = {
      method: 'post',
      url: FOLLOW_API(id),
      headers: {
        Authorization: `Bearer ${localStorage.getItem('AC_Token')}`
      }
    };
    axios(config)
      .then(response => {
        if (!(response.data.message === '팔로우 생성 성공')) {
          return;
        }
        setIsFollowed(true);
      })
      .catch(error => {
        if (
          error.response.status === 400 &&
          error.response.data.message === '본인은 팔로우 할 수 없습니다.'
        ) {
          return alert('본인을 팔로우할 수 없습니다!');
        }
      });
  };

  return (
    <S.Button>
      <Link to={`/${name}`} state={{ userId: id }}>
        <ProfileImage size="48" url={profile_image_url} />
      </Link>
      {isLogin() && !isFollowed && !isMyProfile && (
        <FollowIcon
          className="follow"
          onClick={handleFollow}
          style={{ display: loading ? `none` : 'block' }}
        />
      )}
    </S.Button>
  );
};
