import React, { useEffect, useState } from 'react';
import { EDIT_IMAGE_API, EDIT_NAME_API } from 'utils/api';
import { IUserData } from 'types';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const useProfileForm = (userData: IUserData) => {
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

  return {
    newName,
    newImage,
    isUpdated,
    handleNameChange,
    handleImageChange,
    handleSubmit
  };
};
