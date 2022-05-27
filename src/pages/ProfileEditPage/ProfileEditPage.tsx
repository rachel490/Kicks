import React, { useEffect, useState } from 'react';
import { AppContainer, PageHeader, ProfileImage } from 'components';
import * as S from './styles';
import useSWR from 'swr';
import { EDIT_IMAGE_API, EDIT_NAME_API, USER_DATA_API } from 'utils/api';
import { fetcherWithToken } from 'utils/swr';
import { IUserData } from 'types';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BsCameraFill } from 'react-icons/bs';

export const ProfileEditPage = () => {
  const userId = localStorage.getItem('id');
  const { data: user } = useSWR(
    USER_DATA_API(Number(userId)),
    fetcherWithToken
  );
  const userData = user?.data as IUserData;
  const [newName, setNewName] = useState('');
  const [newImage, setNewImage] = useState<any>({ url: '', file: '' });
  const isUpdated =
    newImage.url !== userData?.profile_image_url || newName !== userData?.name;
  const navigate = useNavigate();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target?.files) return;
    const file = e.target.files[0];
    setNewImage({
      url: URL.createObjectURL(file),
      file: file
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', newImage.file);

    if (isUpdated) {
      axios
        .all([
          // axios({
          //   method: 'post',
          //   url: EDIT_IMAGE_API,
          //   data: formData,
          //   headers: {
          //     'Content-Type': 'multipart/form-data',
          //     Authorization: `Bearer ${localStorage.getItem('AC_Token')}`
          //   }
          // }),
          axios({
            method: 'put',
            url: EDIT_NAME_API,
            data: {
              name: newName
            },
            headers: {
              Authorization: `Bearer ${localStorage.getItem('AC_Token')}`
            }
          })
        ])
        .then(() => {
          localStorage.setItem('name', newName);
          navigate(`/${newName}`);
        })
        .catch(error => {
          console.log(...formData);
          console.log(error);
        });
    }
  };

  useEffect(() => {
    setNewName(userData?.name);
    setNewImage({ url: userData?.profile_image_url, file: {} });
  }, [userData?.name, userData?.profile_image_url]);

  return (
    <AppContainer>
      <PageHeader title="프로필 수정" backTo={`/${newName}`} />
      <S.EditForm onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          id="profile"
          onChange={handleImageChange}
        />
        <S.ImageInput htmlFor="profile">
          <ProfileImage size="140" url={newImage.url || ''} />
          <label htmlFor="profile">
            <BsCameraFill />
          </label>
        </S.ImageInput>
        <S.NameInput
          type="text"
          value={newName || ''}
          onChange={handleNameChange}
        />
        <span>프로필 사진과 닉네임을 입력해주세요</span>
        <S.SubmitButton type="submit" className={isUpdated ? 'active' : ''}>
          완료
        </S.SubmitButton>
      </S.EditForm>
    </AppContainer>
  );
};
