import React, { useEffect, useRef, useState } from 'react';
import * as S from './styles';
import { IVideoListItem } from 'data/types';
import { positionValues, Scrollbars } from 'react-custom-scrollbars';
import { fetcher, fetcherWithToken } from 'utils/swr';
import useSWR from 'swr';

interface Props {
  api: string;
}

export const VideoList = ({ api }: Props) => {
  const [_, setIsBottom] = useState(false);
  const videoRef = useRef<IVideoListItem[]>([]);
  const lastVideoId = useRef<number | string>('');
  const scrollbarRef = useRef<Scrollbars>(null);

  const { data } = useSWR(
    `${api}last_id=${lastVideoId.current || 99}`,
    fetcherWithToken
  );

  const videoData = data?.data as IVideoListItem[];

  if (videoData) {
    if (!videoRef.current.find(x => x.id === videoData[0]?.id)) {
      videoRef.current.push(...videoData);
      console.log(videoRef.current);
    }
  }

  const handleScroll = (values: positionValues) => {
    if (values.top > 0.999) {
      setIsBottom(true);
      console.log('BOTTOM');
    }
  };

  useEffect(() => {
    if (videoData) {
      lastVideoId.current = videoData[videoData.length - 1]?.id || '';
    }
  }, [videoData]);

  return (
    <S.VideoContent>
      <Scrollbars autoHide ref={scrollbarRef} onScrollFrame={handleScroll}>
        {videoRef.current?.map(({ id, thumbnail_url }, i) => (
          <S.VideoLink to={`/video/${id}`} key={i}>
            <img src={thumbnail_url} alt={thumbnail_url} />
          </S.VideoLink>
        ))}
      </Scrollbars>
    </S.VideoContent>
  );
};
