import { PageHeader } from 'components';
import * as S from './styles';

export const VideoUploadPage = () => {
  return (
    <S.Wrap>
      <PageHeader title="Upload" />
      <S.FileInput
        type="file"
        accept="video/*"
        id="videoUpload"
        style={{ display: 'none' }}
      />
      <S.Label htmlFor="videoUpload">
        <img
          src="https://lf16-tiktok-common.ttwstatic.com/obj/tiktok-web-common-sg/ies/creator_center/svgs/cloud-icon1.ecf0bf2b.svg"
          alt="upload"
        />
        <h2>업로드할 동영상 선택</h2>
        <span>or 파일 드래그 & 드롭</span>
        <button>파일 선택</button>
      </S.Label>
    </S.Wrap>
  );
};
