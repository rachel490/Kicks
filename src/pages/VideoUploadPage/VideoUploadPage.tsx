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
      <PageHeader title="Upload" backTo="/"/>
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
            <button>비디오 선택</button>
          </label>
        </S.FileInputContainer>
        <S.InputContainer>
          <input type="text" id="title" placeholder="제목" />
          <div className="priceContainer">
            <input type="number" id="price" placeholder="가격" />
            <input type="checkbox" id="second-hand" />
            <label htmlFor="second-hand">중고</label>
          </div>
          <textarea id="description" placeholder="상세 설명" />
        </S.InputContainer>
        <S.ThumbnailInputContainer>
          <input type="file" accept="image/*" id="thumbnail" />
          <label htmlFor="thumbnail">
            <span>썸네일 지정</span>
            <div>이미지 선택</div>
          </label>
        </S.ThumbnailInputContainer>
      </S.Form>
    </S.Wrap>
  );
};
