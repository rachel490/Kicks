import * as S from './styles';
import { IVideo } from 'data/types';
import { VideoItem } from 'components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
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
        <S.NoUser>
          <Link to="/">로그인 하러가기</Link>
        </S.NoUser>
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
