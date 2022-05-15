import * as S from './styles';
import { ReactComponent as ThumbnailUploadIcon } from 'assets/svg/thumbnail.svg';
import { useState } from 'react';

interface Prop {
  img: File;
  setImg: Function;
}

export const ImageInput = ({ img, setImg }: Prop) => {
  const [previewImg, setPreviewImg] = useState('');

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target?.files) return;

    const file = e.target.files[0];

    setPreviewImg(URL.createObjectURL(file));
    setImg(file);
  };

  return (
    <S.FileInputBox>
      <input
        type="file"
        accept="image/*"
        id="thumbnailUpload"
        onChange={handleImage}
        required
      />
      <label htmlFor="thumbnailUpload">
        {img ? <S.Image src={previewImg} alt="" /> : <ThumbnailUploadIcon />}
      </label>
      <p>썸네일</p>
    </S.FileInputBox>
  );
};
