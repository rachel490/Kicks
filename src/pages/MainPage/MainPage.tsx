import React, { useState } from 'react';
import * as S from './styles';
import useSWR from 'swr';
import { fetcher } from 'utils/swr';
import { IVideoListItem } from 'data/types';
import { Loading, ContentsWrap } from 'components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const MainPage = () => {
  const [active, setActive] = useState(false);
  const { data: videoList } = useSWR<IVideoListItem[]>(
    'http://localhost:8080/videoList',
    fetcher
  );

  return (
    <S.Wrap>
      {videoList ? (
        <Swiper direction="vertical">
          {videoList?.map(video => (
            <SwiperSlide key={video.id}>
              <ContentsWrap
                id={video.id}
                active={active}
                setActive={setActive}
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
