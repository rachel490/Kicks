import * as S from './styles';
import { ReactComponent as ThumbnailUploadIcon } from 'assets/svg/thumbnail.svg';

export const ImageInput = () => {
  return (
    <S.FileInputBox>
      <input type="file" accept="image/*" id="thumbnailUpload" />
      <label htmlFor="thumbnailUpload">
        <ThumbnailUploadIcon />
      </label>
      <p>썸네일</p>
    </S.FileInputBox>
  );
};
