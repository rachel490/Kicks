import React, { useState } from 'react';
import * as S from './styles';
import useSWR from 'swr';
import { VIDEO_ITEM_API } from 'utils/api';
import { fetcher } from 'utils/swr';
import { IVideoItem } from 'types';
import {
  MainHeader,
  VideoPlayer,
  PlayerMenu,
  ControlMenu,
  DescriptionBox,
  Loading
} from 'components';

interface Props {
  videoId: number;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  type?: string;
}

export const ContentsWrap = ({
  videoId,
  active,
  setActive,
  type = 'play'
}: Props) => {
  const [isShown, setIsShown] = useState(true);
  const { data } = useSWR(VIDEO_ITEM_API(videoId), fetcher);

  if (!data) return <Loading />;

  const videoData = data?.data as IVideoItem;
  // console.log(videoData);

  return (
    <S.Wrap>
      <MainHeader active={active} setActive={setActive} />
      <VideoPlayer video_url={videoData.video_url} />
      {type === 'delete' &&
      videoData.user.name === localStorage.getItem('name') ? (
        <ControlMenu id={videoId} />
      ) : (
        <PlayerMenu
          profile_image_url={videoData.user.profile_image_url || ''}
          isShown={isShown}
          like_count={videoData.like_count}
          userId={videoData.user.id}
          videoId={videoId}
          name={videoData.user.name}
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
