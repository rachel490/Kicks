import * as S from './styles';
import { IVideoListItem } from 'data/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { VideoLink } from 'components';
import { GrOverview } from 'react-icons/gr';
import { FaRegThumbsUp } from 'react-icons/fa';

interface Props {
  title: string;
  videos: IVideoListItem[] | undefined;
}

export const HorizonVideoList = ({ title, videos }: Props) => {
  return (
    <S.VideoSection>
      <S.SectionTitle>
        {title.includes('조회') ? <GrOverview /> : <FaRegThumbsUp />}
        <span>{title}</span>
      </S.SectionTitle>
      <Swiper
        spaceBetween={8}
        slidesPerView={2}
        scrollbar={{ draggable: true }}
      >
        {videos?.map(({ id, thumbnail_url }) => (
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
