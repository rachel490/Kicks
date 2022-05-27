import React, { useEffect, useState } from 'react';
import { AppContainer, PageHeader, ProfileImage } from 'components';
import * as S from './styles';
import useSWR from 'swr';
import { EDIT_NAME_API, USER_DATA_API } from 'utils/api';
import { fetcherWithToken } from 'utils/swr';
import { IUserData } from 'types';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const ProfileEditPage = () => {
  const userId = localStorage.getItem('id');
  const { data: user } = useSWR(
    USER_DATA_API(Number(userId)),
    fetcherWithToken
  );
  const userData = user?.data as IUserData;
  const [newName, setNewName] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
  };

  const handleSubmit = () => {
    if (newName !== userData?.name) {
      axios
        .put(
          EDIT_NAME_API,
          {
            name: newName
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('AC_Token')}`
            }
          }
        )
        .then(() => {
          localStorage.setItem('name', newName);
          navigate(`/${newName}`);
        });
    }
  };

  useEffect(() => {
    setNewName(userData?.name);
  }, [userData]);

  return (
    <AppContainer>
      <PageHeader title="프로필 수정" backTo="/" />
      <S.EditContent>
        <ProfileImage size="140" url={userData?.profile_image_url} />
        <input type="text" value={newName || ''} onChange={handleChange} />
        <span>프로필 사진과 닉네임을 입력해주세요</span>
      </S.EditContent>
      <S.SubmitButton
        onClick={handleSubmit}
        className={newName !== userData?.name ? 'active' : ''}
      >
        완료
      </S.SubmitButton>
    </AppContainer>
  );
};
