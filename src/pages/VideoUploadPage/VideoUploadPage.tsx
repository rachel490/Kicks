import { PageHeader } from 'components';
import * as S from './styles';

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

  return (
    <S.Wrap>
      <PageHeader title="Upload" />
      <S.Form onSubmit={e => e.preventDefault()}>
        <S.FileInputContainer>
          <input
            type="file"
            accept="video/*"
            id="videoUpload"
            onChange={validateVideo}
          />
          <label htmlFor="videoUpload">
            <img
              src="https://lf16-tiktok-common.ttwstatic.com/obj/tiktok-web-common-sg/ies/creator_center/svgs/cloud-icon1.ecf0bf2b.svg"
              alt="upload"
            />
            <h2>업로드할 동영상 선택</h2>
            <span>or 파일 드래그 & 드롭</span>
            <button>파일 선택</button>
          </label>
        </S.FileInputContainer>
      </S.Form>
    </S.Wrap>
  );
};
