import React, { useEffect, useState } from 'react';
import { AppContainer, PageHeader, ProfileImage } from 'components';
import * as S from './styles';
import useSWR from 'swr';
import { USER_DATA_API } from 'utils/api';
import { fetcherWithToken } from 'utils/swr';
import { IUserData } from 'types';

export const ProfileEditPage = () => {
  const userId = localStorage.getItem('id');
  const { data: user } = useSWR(
    USER_DATA_API(Number(userId)),
    fetcherWithToken
  );
  const userData = user?.data as IUserData;
  const [nickname, setNickname] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  useEffect(() => {
    setNickname(userData?.name);
  }, [userData]);

  return (
    <AppContainer>
      <PageHeader title="프로필 수정" backTo="/" />
      <S.EditContent>
        <ProfileImage size="140" url={userData?.profile_image_url} />
        <input type="text" value={nickname} onChange={handleChange} />
        <span>프로필 사진과 닉네임을 입력해주세요</span>
      </S.EditContent>
      <S.SubmitButton>완료</S.SubmitButton>
    </AppContainer>
  );
};
