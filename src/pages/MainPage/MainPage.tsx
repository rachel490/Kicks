import React, { useState } from 'react';
import {
  PlayerMenu,
  VideoPlayer,
  DescriptionBox,
  MainHeader
} from 'components';
import * as S from './styles';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { VIDEO_ITEM_API } from 'utils/api';
import { fetcher } from 'utils/swr';
import { IVideoItem } from 'data/types';
import { Loading } from 'components';

export const MainPage = () => {
  const { videoId = 6 } = useParams();
  const { data: videoData } = useSWR<IVideoItem>(
    VIDEO_ITEM_API(Number(videoId)),
    fetcher
  );

  const [isShown, setIsShown] = useState(true);

  return (
    <S.Wrap>
      {videoData ? (
        <>
          <MainHeader isShown={isShown} />
          <VideoPlayer video_url={videoData.video_url} isShown={isShown} setIsShown={setIsShown} />
          <PlayerMenu
            profile_image_url={videoData.user.profile_image_url}
            isShown={isShown}
          />
          <DescriptionBox
            title={videoData.title}
            description={videoData.description}
            isShown={isShown}
            setIsShown={setIsShown}
          />
        </>
      ) : (
        <Loading />
      )}
    </S.Wrap>
  );
};
