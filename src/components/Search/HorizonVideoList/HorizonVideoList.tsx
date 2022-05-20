import * as S from './styles';
import { IVideoListItem } from 'types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { VideoLink } from 'components';
import { GrOverview } from 'react-icons/gr';
import { FaRegThumbsUp } from 'react-icons/fa';
import { fetcher } from 'utils/swr';
import useSWR from 'swr';
import { TOP10_VIDEO_API } from 'utils/api';

interface Props {
  title: string;
}

export const HorizonVideoList = ({ title }: Props) => {
  const current = title.includes('조회') ? 'hits' : 'likes';

  const { data: videos } = useSWR(TOP10_VIDEO_API(current), fetcher);

  return (
    <S.VideoSection>
      <S.SectionTitle>
        {current === 'hits' ? <GrOverview /> : <FaRegThumbsUp />}
        <span>{title}</span>
      </S.SectionTitle>
      <Swiper
        spaceBetween={8}
        slidesPerView={2}
        scrollbar={{ draggable: true }}
      >
        {videos &&
          videos?.data.map(({ id, thumbnail_url }: IVideoListItem) => (
            <SwiperSlide tag="li" key={id}>
              <VideoLink to={`/video/${id}`}>
                <img src={thumbnail_url} alt={thumbnail_url} />
              </VideoLink>
            </SwiperSlide>
          ))}
      </Swiper>
    </S.VideoSection>
  );
};
