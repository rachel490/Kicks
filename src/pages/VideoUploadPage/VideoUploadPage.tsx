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

export const VideoUploadPage = () => {
  return (
    <AppContainer>
      <S.Wrap>
        <PageHeader title="상품 등록" backTo="/" />
        <S.Form onSubmit={e => e.preventDefault()}>
          <S.MainContainer>
            <S.FileInputContainer>
              <VideoInput />
              <ImageInput />
            </S.FileInputContainer>
            <InputBox name="title" title="상품명">
              <input
                type="text"
                id="title"
                placeholder="상품명을 입력해주세요"
              />
            </InputBox>
            <Category />
            <Condition />
            <InputBox name="price" title="가격">
              <input
                type="number"
                id="price"
                placeholder="가격을 입력해주세요"
              />
            </InputBox>
            <InputBox name="description" title="상품 설명">
              <textarea
                id="description"
                placeholder="상품 설명을 작성해주세요."
              />
            </InputBox>
          </S.MainContainer>
          <S.SubmitButton>등록하기</S.SubmitButton>
        </S.Form>
      </S.Wrap>
    </AppContainer>
  );
};
