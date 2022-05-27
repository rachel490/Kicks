import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useSWR from 'swr';
import * as S from './styles';
import { USER_DATA_API } from 'utils/api';
import { fetcherWithToken } from 'utils/swr';
import { IUserData } from 'types';
import { ProfileImage, Loading } from 'components';

export const ProfileHeader = ({ userId }: { userId: number }) => {
  const { data } = useSWR(USER_DATA_API(userId), fetcherWithToken);
  const userData = data?.data as IUserData;
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    if (userData && userData.name === localStorage.getItem('name')) {
      setIsUser(true);
    }
  }, [userData]);

  return (
    <S.Wrap>
      {userData ? (
        <>
          <ProfileImage size="100" url={userData.profile_image_url} />
          <div className="profile-username">
            <span>@{userData.name}</span>
          </div>
          <S.ProfileStats>
            <li>
              <strong className="profile-stat-value">{userData.videos}</strong>
              <span className="profile-stat-name">Videos</span>
            </li>
            <li>
              <Link
                to={userData.followers ? `/${userData.name}/follower` : '#'}
                state={{ userId }}
              >
                <strong className="profile-stat-value">
                  {userData.followers}
                </strong>
                <span className="profile-stat-name">Followers</span>
              </Link>
            </li>
            <li>
              <Link
                to={userData.followings ? `/${userData.name}/following` : '#'}
                state={{ userId }}
              >
                <strong className="profile-stat-value">
                  {userData.followings}
                </strong>
                <span className="profile-stat-name">Followings</span>
              </Link>
            </li>
          </S.ProfileStats>
          {isUser ? (
            <S.Buttons>
              <button className="profile-btn">
                <Link to="/profile/edit">Edit</Link>
              </button>
              <button className="profile-btn">Logout</button>
            </S.Buttons>
          ) : (
            <S.Buttons>
              <button className="profile-btn">Follow</button>
              <button className="profile-btn">Message</button>
            </S.Buttons>
          )}
        </>
      ) : (
        <Loading />
      )}
    </S.Wrap>
  );
};
