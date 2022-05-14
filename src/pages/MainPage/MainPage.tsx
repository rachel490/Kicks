import React from 'react';
import * as S from './styles';
import useSWR from 'swr';
import { fetcher } from 'utils/swr';
import { IVideoList } from 'data/types';
import { Loading, ContentsWrap } from 'components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const MainPage = () => {
  const { data: videoList } = useSWR<IVideoList[]>(
    'http://localhost:8080/videoList',
    fetcher
  );

  return (
    <S.Wrap>
      {videoList ? (
        <Swiper direction="vertical">
          {videoList?.map(video => (
            <SwiperSlide key={video.id}>
              <ContentsWrap id={video.id} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Loading />
      )}
    </S.Wrap>
  );
};
