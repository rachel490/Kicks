import React, { useRef } from 'react';
import * as S from './styles';
import { IVideoListItem } from 'data/types';
import { Scrollbars } from 'react-custom-scrollbars';

interface Props {
  videos: IVideoListItem[] | undefined;
}

export const VideoList = ({ videos }: Props) => {
  const scrollbarRef = useRef(null);

  const handleScroll = () => {
    // 무한 스크롤
  };

  return (
    <S.VideoContent>
      <Scrollbars autoHide ref={scrollbarRef} onScrollFrame={handleScroll}>
        {videos?.map(({ id, thumbnail_url }) => (
          <S.VideoLink to={`/video/${id}`} key={id}>
            <img src={thumbnail_url} alt={thumbnail_url} />
          </S.VideoLink>
        ))}
      </Scrollbars>
    </S.VideoContent>
  );
};
