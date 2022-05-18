import { Link } from 'react-router-dom';
import useSWR from 'swr';
import * as S from './styles';
import { USER_DATA_API } from 'utils/api';
import { fetcherWithToken } from 'utils/swr';
import { IUserData } from 'data/types';


export const ProfileHeader = ({ userId }: { userId: number }) => {
  const { data } = useSWR(USER_DATA_API(userId), fetcherWithToken);
  const userData = data?.data as IUserData;

  return (
    <S.ProfileHeader>
      <img
        src={
          userData.profile_image_url
            ? userData.profile_image_url
            : 'https://images.unsplash.com/photo-1651070216681-22fe5a718c06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
        }
        alt="profile"
        className="profile-img"
      />
      <div className="profile-username">
        <span>@{userData.name}</span>
      </div>
      <S.ProfileStats>
        <li>
          <strong className="profile-stat-value">{userData.videos}</strong>
          <span className="profile-stat-name">Videos</span>
        </li>
        <li>
          <Link to={userData.followings ? `${userId}/following` : '#'}>
            <strong className="profile-stat-value">
              {userData.followings}
            </strong>
            <span className="profile-stat-name">Following</span>
          </Link>
        </li>
        <li>
          <Link to={userData.followers ? `${userId}/follower` : '#'}>
            <strong className="profile-stat-value">{userData.followers}</strong>
            <span className="profile-stat-name">Followers</span>
          </Link>
        </li>
      </S.ProfileStats>
      <button className="profile-edit-btn">Edit Profile</button>
    </S.ProfileHeader>
  );
};
