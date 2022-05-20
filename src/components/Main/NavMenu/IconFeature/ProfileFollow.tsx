import axios from 'axios';
import { Link } from 'react-router-dom';
import { FOLLOWING_API, FOLLOW_API } from 'utils/api';
import { Button } from '../styles';
import { ProfileImage } from 'components';
import { IFollow, IUser } from 'types';
import { ReactComponent as FollowIcon } from 'assets/svg/follow.svg';
import useSWR from 'swr';
import { fetcher } from 'utils/swr';

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
    <Button>
      <Link to={`/${name}`} state={{ userId: id }}>
        <ProfileImage size="48" url={profile_image_url} />
      </Link>
      {!isFollowed && <FollowIcon className="follow" onClick={handleFollow} />}
    </Button>
  );
};
