import React, { useRef, useState } from 'react';
import * as S from './styles';
import { VideoItem } from 'components';
import { IVideo } from 'data/types';
import { Scrollbars } from 'react-custom-scrollbars';

interface Props {
  videos: IVideo[] | undefined;
}

export const VideoList = ({ videos }: Props) => {
  const [currentVideoRef, setCurrentVideoRef] = useState(null);
  const scrollbarRef = useRef(null);

  const handleScroll = () => {
    // 무한 스크롤
  };

  return (
    <S.VideoContent>
      <Scrollbars autoHide ref={scrollbarRef} onScrollFrame={handleScroll}>
        {videos?.map(({ id, video_url }) => (
          <VideoItem
            key={id}
            url={video_url}
            id={id}
            setCurrentVideoRef={setCurrentVideoRef}
            currentVideoRef={currentVideoRef}
          />
        ))}
      </Scrollbars>
    </S.VideoContent>
  );
};
