import React, { useState } from 'react';
import * as S from './styles';
import { VideoInput, ImageInput } from 'components';

export const FileUpload = () => {
  const [video, setVideo] = useState<any>();
  const [img, setImg] = useState<any>();

  return (
    <S.FileUploadContainer>
      <VideoInput setVideo={setVideo} video={video} />
      <ImageInput setImg={setImg} img={img} />
    </S.FileUploadContainer>
  );
};
