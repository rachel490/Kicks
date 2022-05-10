import * as S from './styles';
import { IVideo } from 'data/types';
import { VideoItem } from 'components';
import { useState } from 'react';

interface Props {
  title: string;
  videos: IVideo[] | undefined;
}

export const HorizonVideoList = ({ title, videos }: Props) => {
  const [currentVideoRef, setCurrentVideoRef] = useState(null);
  console.log(videos);

  return (
    <S.VideoSection>
      <S.SectionTitle>{title}</S.SectionTitle>
      <S.ListContainer>
        {videos?.map(({ id, video_url }) => (
          <VideoItem
            key={id}
            url={video_url}
            id={id}
            setCurrentVideoRef={setCurrentVideoRef}
            currentVideoRef={currentVideoRef}
          />
        ))}
      </S.ListContainer>
    </S.VideoSection>
  );
};
