import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styles';
import {
  AppContainer,
  InputBox,
  PageHeader,
  VideoInput,
  ImageInput,
  Category,
  Condition,
  MessageModal
} from 'components';
import { VIDEO_LIST_API } from 'utils/api';

export const VideoUploadPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);

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
    formData.append('usedStatus', String(condition));
    formData.append('price', price);
    formData.append('description', desc);

    axios({
      method: 'post',
      url: VIDEO_LIST_API,
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${localStorage.getItem('AC_Token')}`
      }
    })
      .then(res => {
        console.log(res);
        if (res.data.message === '영상 업로드 성공') {
          setModalOpen(true);
        } else {
          setIsSuccess(false);
          setModalOpen(true);
        }
      })
      .catch(error => {
        setIsSuccess(false);
        setModalOpen(true);
      });
  };

  return (
    <AppContainer>
      <S.Wrap>
        <MessageModal
          message={
            isSuccess ? '업로드에 성공하였습니다!' : '업로드에 실패하였습니다.'
          }
          redirectTo={isSuccess ? '/profile' : '/'}
          isOpen={modalOpen}
        />
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
