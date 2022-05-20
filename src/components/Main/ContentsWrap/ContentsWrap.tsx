import React, { useState } from 'react';
import * as S from './styles';
import useSWR from 'swr';
import { VIDEO_ITEM_API } from 'utils/api';
import { fetcher } from 'utils/swr';
import { IVideoItem } from 'types';
import {
  MainHeader,
  VideoPlayer,
  MyVideoNav,
  UserVideoNav,
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

  return (
    <S.Wrap>
      <MainHeader active={active} setActive={setActive} />
      <VideoPlayer video_url={videoData.video_url} />
      {type === 'delete' &&
      videoData.user.name === localStorage.getItem('name') ? (
        <MyVideoNav id={videoId} />
      ) : (
        <UserVideoNav videoData={videoData} isShown={isShown} />
      )}
      <DescriptionBox
        videoData={videoData}
        isShown={isShown}
        setIsShown={setIsShown}
      />
    </S.Wrap>
  );
};
