import * as S from './styles';
import { IVideo } from 'data/types';
import { VideoItem, LoginButton } from 'components';
import { useState } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';

interface Props {
  title: string;
  videos: IVideo[] | undefined;
}

export const HorizonVideoList = ({ title, videos }: Props) => {
  const [currentVideoRef, setCurrentVideoRef] = useState(null);
  const userData = '';

  return (
    <S.VideoSection>
      <S.SectionTitle>{title}</S.SectionTitle>
      {!userData && title === '추천' ? (
        <LoginButton padding={15} />
      ) : (
        <ScrollContainer horizontal={true} className="video-container">
          {videos?.map(({ id, video_url }) => (
            <VideoItem
              key={id}
              url={video_url}
              id={id}
              setCurrentVideoRef={setCurrentVideoRef}
              currentVideoRef={currentVideoRef}
            />
          ))}
        </ScrollContainer>
      )}
    </S.VideoSection>
  );
};
