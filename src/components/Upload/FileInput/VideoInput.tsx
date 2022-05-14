import * as S from './styles';
import { ReactComponent as VideoUploadIcon } from 'assets/svg/video.svg';

export const VideoInput = () => {
  const validateVideo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const maxSize = 1024 * 1024 * 250;
    if (!e.target?.files) {
      return;
    }
    if (e.target.files[0].size > maxSize) {
      alert('파일의 용량이 250mb를 초과했습니다.');
    }
  };

  return (
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
  );
};
