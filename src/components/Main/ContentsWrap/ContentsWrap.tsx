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
  type = 'play'
}: Props) => {
  const [isShown, setIsShown] = useState(true);
  const { data: videoData } = useSWR<IVideoItem>(VIDEO_ITEM_API(id), fetcher);

  if (!videoData) return <Loading />;

  return (
    <S.Wrap>
      <MainHeader active={active} setActive={setActive} />
      <VideoPlayer video_url={videoData.video_url} />
      {/* videoData.user.name === localStorage.getItem('name') */}
      {type === 'delete' ? (
        <ControlMenu id={id} />
      ) : (
        <PlayerMenu
          profile_image_url={videoData.user.profile_image_url}
          isShown={isShown}
        />
      )}
      <DescriptionBox
        title={videoData.title}
        description={videoData.description}
        isShown={isShown}
        setIsShown={setIsShown}
      />
    </S.Wrap>
  );
};
