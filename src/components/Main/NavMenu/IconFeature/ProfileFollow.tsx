import axios from 'axios';
import useSWR from 'swr';
import { Link } from 'react-router-dom';
import * as S from './styles';
import { ReactComponent as FollowIcon } from 'assets/svg/follow.svg';
import { FOLLOWING_API, FOLLOW_API } from 'utils/api';
import { IFollow, IUser } from 'types';
import { fetcher } from 'utils/swr';
import { ProfileImage } from 'components';
import isLogin from 'utils/isLogin';

interface Props {
  userData: IUser;
}

export const ProfileFollow = ({ userData }: Props) => {
  const { id, name, profile_image_url } = userData;
  const { data: follow, mutate } = useSWR(FOLLOWING_API(36), fetcher);
  const followData = follow?.data as IFollow[];
  const isFollowed =
    followData && followData.findIndex(({ member }) => member.id === id) !== -1;

  const handleFollow = () => {
    const config = {
      method: 'post',
      url: FOLLOW_API(id),
      headers: {
        Authorization: `Bearer ${localStorage.getItem('AC_Token')}`
      }
    };
    axios(config)
      .then(() => {
        mutate();
      })
      .catch(error => console.log(error));
  };

  return (
    <S.Button>
      <Link to={`/${name}`} state={{ userId: id }}>
        <ProfileImage size="48" url={profile_image_url} />
      </Link>
      {isLogin() && !isFollowed && <FollowIcon className="follow" onClick={handleFollow} />}
    </S.Button>
  );
};
