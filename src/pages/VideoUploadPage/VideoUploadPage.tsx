import React, { useState } from 'react';
import * as S from './styles';
import {
  AppContainer,
  InputBox,
  PageHeader,
  VideoInput,
  ImageInput,
  Category,
  Condition
} from 'components';
import { UPLOAD_VIDEO_API } from 'utils/api';
import axios from 'axios';

export const VideoUploadPage = () => {
  const [video, setVideo] = useState<any>();
  const [img, setImg] = useState<any>();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [condition, setCondition] = useState(true);
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handlePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };

  const handleDesc = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDesc(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('video', video);
    formData.append('thumbnail', img);
    formData.append('title', title);
    formData.append('category', category);
    formData.append('used_status', String(condition));
    formData.append('price', price);
    formData.append('description', desc);

    // console.log('formData', formData);
    // for (let key of formData.keys()) {
    //   console.log(key);
    // }

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${localStorage.getItem('AC_Token')}`
      }
    };

    axios.post(UPLOAD_VIDEO_API, formData, config);

  };

  return (
    <AppContainer>
      <S.Wrap>
        <PageHeader title="상품 등록" backTo="/" />
        <S.Form onSubmit={handleSubmit}>
          <S.MainContainer>
            <S.FileInputContainer>
              <VideoInput setVideo={setVideo} video={video} />
              <ImageInput setImg={setImg} img={img} />
            </S.FileInputContainer>
            <InputBox name="title" title="상품명">
              <input
                type="text"
                id="title"
                placeholder="상품명을 입력해주세요"
                required
                onChange={handleTitle}
                value={title}
              />
            </InputBox>
            <Category setCategory={setCategory} category={category} />
            <Condition setCondition={setCondition} condition={condition} />
            <InputBox name="price" title="가격">
              <input
                type="number"
                id="price"
                placeholder="가격을 입력해주세요"
                onChange={handlePrice}
                value={price}
                required
              />
            </InputBox>
            <InputBox name="description" title="상품 설명">
              <textarea
                id="description"
                placeholder="상품 설명을 작성해주세요."
                onChange={handleDesc}
                value={desc}
              />
            </InputBox>
          </S.MainContainer>
          <S.SubmitButton>등록하기</S.SubmitButton>
        </S.Form>
      </S.Wrap>
    </AppContainer>
  );
};
