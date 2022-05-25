import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import * as S from './styles';
import { AdminContainer } from 'pages/AdminUserPage/styles';
import { IUserAdmin, IVideoItem } from 'types';
import { UserDataTable, VideoDataTable } from 'components';
import { ADMIN_CONTENT_API } from 'utils/api';
import useSWR from 'swr';
import { fetcherWithToken } from 'utils/swr';

export const AdminDashBoard = () => {
  const { userId } = useParams() as { userId: string };
  const { data: videos } = useSWR(
    ADMIN_CONTENT_API(0, 0, userId),
    fetcherWithToken
  );
  const location = useLocation();
  const currentUser = (location.state as IUserAdmin[]) || [];
  const videoData = videos?.data as IVideoItem[];
  console.log(videoData);

  return (
    <AdminContainer>
      <S.BoardTitle>User DashBoard</S.BoardTitle>
      <UserDataTable userData={currentUser} />
      <S.ContentTitle>{currentUser[0].name}님이 업로드한 영상</S.ContentTitle>
      <VideoDataTable videoData={videoData ? videoData : []} />
    </AdminContainer>
  );
};
