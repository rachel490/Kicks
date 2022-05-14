import * as S from './styles';
import { IVideoListItem } from 'data/types';
import { LoginButton, VideoLink } from 'components';
import ScrollContainer from 'react-indiana-drag-scroll';

interface Props {
  title: string;
  videos: IVideoListItem[] | undefined;
}

export const HorizonVideoList = ({ title, videos }: Props) => {
  const userData = '';

  return (
    <S.VideoSection>
      <S.SectionTitle>{title}</S.SectionTitle>
      {!userData && title === '추천' ? (
        <LoginButton padding={15} />
      ) : (
        <ScrollContainer horizontal={true} className="video-container">
          {videos?.map(({ id, thumbnail_url}) => (
            <VideoLink to={`/video/${id}`}>
              <img src={thumbnail_url} alt={thumbnail_url} />
            </VideoLink>
          ))}
        </ScrollContainer>
      )}
    </S.VideoSection>
  );
};
