import { AppContainer, PageHeader } from 'components';
import * as S from './styles';
import React, { useState } from 'react';
import { ReactComponent as VideoUploadIcon } from 'assets/svg/video.svg';
import { ReactComponent as ThumbnailUploadIcon } from 'assets/svg/thumbnail.svg';

export const VideoUploadPage = () => {
  const validateVideo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const maxSize = 1024 * 1024 * 250;
    if (!e.target?.files) {
      return;
    }
    if (e.target.files[0].size > maxSize) {
      alert('파일의 용량이 250mb를 초과했습니다.');
    }
  };

  const [isNew, setIsNew] = useState(true);
  const toggleIsNew = () => {
    setIsNew(!isNew);
  };

  return (
    <AppContainer>
      <S.Wrap>
        <PageHeader title="상품 등록" backTo="/" />
        <S.Form onSubmit={e => e.preventDefault()}>
          <S.MainContainer>
            <S.FileInputContainer>
              <S.FileInputBox>
                <input
                  type="file"
                  accept="video/*"
                  id="videoUpload"
                  onChange={validateVideo}
                />
                <label htmlFor="videoUpload">
                  <VideoUploadIcon />
                </label>
                <p>영상</p>
              </S.FileInputBox>
              <S.FileInputBox>
                <input type="file" accept="image/*" id="thumbnailUpload" />
                <label htmlFor="thumbnailUpload">
                  <ThumbnailUploadIcon />
                </label>
                <p>썸네일</p>
              </S.FileInputBox>
            </S.FileInputContainer>
            <S.InputContainer>
              <S.InputBox>
                <S.Label htmlFor="title">상품명</S.Label>
                <input
                  type="text"
                  id="title"
                  placeholder="상품명을 입력해주세요"
                />
              </S.InputBox>
              <S.InputBox>
                <S.Label htmlFor="category">카테고리</S.Label>
                <select id="category" defaultValue="" required>
                  <option value="" disabled>
                    카테고리를 선택해주세요.
                  </option>
                  <option value="구두,로퍼">구두 / 로퍼</option>
                  <option value="워커/부츠">워커 / 부츠</option>
                  <option value="샌들/슬리퍼">샌들 / 슬리퍼</option>
                  <option value="스니커즈">스니커즈</option>
                  <option value="spider">기타</option>
                </select>
              </S.InputBox>
              <S.InputBox>
                <S.Label>상품 상태</S.Label>
                <S.Buttons>
                  <S.Button
                    type="button"
                    selected={isNew}
                    onClick={toggleIsNew}
                  >
                    새상품
                  </S.Button>
                  <S.Button
                    type="button"
                    selected={!isNew}
                    onClick={toggleIsNew}
                  >
                    중고
                  </S.Button>
                </S.Buttons>
              </S.InputBox>
              <S.InputBox>
                <S.Label htmlFor="price">가격</S.Label>
                <input
                  type="number"
                  id="price"
                  placeholder="가격을 입력해주세요"
                />
              </S.InputBox>
              <S.InputBox>
                <S.Label id="description">상품 설명</S.Label>
                <textarea
                  id="description"
                  placeholder="상품 설명을 작성해주세요."
                />
              </S.InputBox>
            </S.InputContainer>
          </S.MainContainer>
          <S.SubmitButton>등록하기</S.SubmitButton>
        </S.Form>
      </S.Wrap>
    </AppContainer>
  );
};
