import React, { useState } from 'react';
import * as S from './styles';
import useSWR from 'swr';
import { fetcher } from 'utils/swr';
import { IVideoListItem } from 'types';
import { Loading, ContentsWrap } from 'components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { VIDEO_LIST_API } from 'utils/api';

export const MainPage = () => {
  const [active, setActive] = useState(true);
  const { data } = useSWR(VIDEO_LIST_API, fetcher);

  const videoList = data?.data as IVideoListItem[];

  return (
    <S.Wrap>
      {videoList ? (
        <Swiper direction="vertical">
          {videoList?.map(video => (
            <SwiperSlide key={video.id}>
              <ContentsWrap
                videoId={video.id}
                active={active}
                setActive={setActive}
                key={video.id}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Loading />
      )}
    </S.Wrap>
  );
};
