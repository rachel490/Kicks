import { useState } from 'react';
import * as S from './styles';
import { ReactComponent as VideoUploadIcon } from 'assets/svg/video.svg';

interface Prop {
  video: File;
  setVideo: Function;
}

export const VideoInput = ({ video, setVideo }: Prop) => {
  const [name, setName] = useState('');

  const checkSize = (size: number) => {
    const maxSize = 1024 * 1024 * 250;
    if (size > maxSize) {
      alert('파일의 용량이 250mb를 초과했습니다.');
      return false;
    }
    return true;
  };

  const handleVideo = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target?.files) return;

    const file = e.target.files[0];
    if (!checkSize(file.size)) return;

    // const videoUrl = URL.createObjectURL(file).split('blob:')[1];

    setName(file.name);
    setVideo(file);
  };

  return (
    <S.FileInputBox>
      <input
        type="file"
        accept="video/*"
        id="videoUpload"
        onChange={handleVideo}
        required
      />
      <label htmlFor="videoUpload">
        {video ? (
            <span>{name}</span>
        ) : (
          <VideoUploadIcon />
        )}
      </label>
      <p>영상</p>
    </S.FileInputBox>
  );
};
