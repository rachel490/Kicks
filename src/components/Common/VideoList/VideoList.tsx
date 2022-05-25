import React, { useEffect, useRef, useState } from 'react';
import * as S from './styles';
import { IVideoListItem } from 'types';
import { positionValues, Scrollbars } from 'react-custom-scrollbars';
import { fetcherWithToken } from 'utils/swr';
import useSWR from 'swr';

interface Props {
  message?: string;
  api: string;
}

export const VideoList = ({ message, api }: Props) => {
  // const [, setIsBottom] = useState(false);
  // const videoRef = useRef<IVideoListItem[]>([]);
  const lastVideoId = useRef<number | string>('');
  const scrollbarRef = useRef<Scrollbars>(null);
  // const scrollHeight = useRef(0);

  const { data } = useSWR(
    `${api}last_id=${lastVideoId.current}`,
    fetcherWithToken
  );

  const videoData = data?.data as IVideoListItem[];

  // if (videoData) {
  //   if (!videoRef.current.find(x => x.id === videoData[0]?.id)) {
  //     videoRef.current.push(...videoData);
  //   }
  // }

  // const handleScroll = (values: positionValues) => {
  //   const scrollbar = scrollbarRef?.current as Scrollbars;
  //   if (values.top > 0.999) {
  //     setIsBottom(true);
  //     scrollHeight.current = scrollbar.getScrollTop();
  //   }
  // };

  // useEffect(() => {
  //   const scrollbar = scrollbarRef?.current as Scrollbars;
  //   if (videoData) {
  //     lastVideoId.current = videoData[videoData.length - 1]?.id || '';
  //   }
  //   if (scrollbar && scrollHeight.current) {
  //     scrollbar.scrollTop(scrollHeight.current);
  //   }
  // }, [videoData]);

  return (
    <S.VideoContent>
      {videoData &&
        (videoData.length > 0 ? (
          <Scrollbars autoHide ref={scrollbarRef}>
            {videoData.map(({ id, thumbnail_url }) => (
              <S.VideoLink to={`/video/${id}`} key={id}>
                <img src={thumbnail_url} alt="" />
              </S.VideoLink>
            ))}
          </Scrollbars>
        ) : (
          <S.MessageContent>
            <img
              src="https://static.thenounproject.com/png/3255444-200.png"
              alt="novideo"
            />
            <p>{message}</p>
          </S.MessageContent>
        ))}
    </S.VideoContent>
  );
};
