import React, { useState } from 'react';
import * as S from './styles';
import useSWR from 'swr';
import { VIDEO_ITEM_API } from 'utils/api';
import { fetcher } from 'utils/swr';
import { IVideoItem } from 'data/types';
import {
  MainHeader,
  VideoPlayer,
  PlayerMenu,
  ControlMenu,
  DescriptionBox,
  Loading
} from 'components';

interface Props {
  id: number;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  type?: string;
}

export const ContentsWrap = ({
  id,
  active,
  setActive,
  type = 'delete'
}: Props) => {
  const [isShown, setIsShown] = useState(true);
  const { data } = useSWR(VIDEO_ITEM_API(id), fetcher);

  if (!data) return <Loading />;

  const videoData = data?.data as IVideoItem;
  // console.log(videoData);

  return (
    <S.Wrap>
      <MainHeader active={active} setActive={setActive} />
      <VideoPlayer video_url={videoData.video_url} />
      {type === 'delete' &&
      videoData.user.name === localStorage.getItem('name') ? (
        <ControlMenu id={id} />
      ) : (
        <PlayerMenu
          profile_image_url={
            videoData.user.profile_image_url
              ? videoData.user.profile_image_url
              : 'https://user-images.githubusercontent.com/68415905/166093018-2819a713-a7df-4703-bcd5-29b60507bdbf.jpg'
          }
          isShown={isShown}
        />
      )}
      <DescriptionBox
        title={videoData.title}
        description={videoData.description}
        price={videoData.price}
        used_status={videoData.used_status}
        isShown={isShown}
        setIsShown={setIsShown}
      />
    </S.Wrap>
  );
};
