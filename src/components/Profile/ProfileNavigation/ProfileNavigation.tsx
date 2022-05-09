import React, { useState } from 'react';
import { VideoItem } from '../../Common/VideoItem/VideoItem';
import * as S from './styles';
import useSWR from 'swr';
import { MY_LIKES_API, MY_VIDEOS_API } from 'utils/api';
import { fetcher } from 'utils/swr';
import { IVideo } from 'data/types';

export const ProfileNavigation = () => {
  const { data: likedVideoData } = useSWR<IVideo[]>(MY_LIKES_API, fetcher);
  const { data: uploadedVideoData } = useSWR<IVideo[]>(MY_VIDEOS_API, fetcher);

  const [selectedMenu, setSelectedMenu] = useState<String>('uploaded');
  const [currentVideoRef, setCurrentVideoRef] = useState(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget.dataset;
    value && setSelectedMenu(value);
  };

  return (
    <S.Wrap>
      <S.ProfileNav>
        <button
          className={`${selectedMenu === 'uploaded' ? 'active' : ''}`}
          data-value="uploaded"
          onClick={handleClick}
        >
          Videos
        </button>
        <button
          className={`${selectedMenu === 'liked' ? 'active' : ''}`}
          data-value="liked"
          onClick={handleClick}
        >
          Liked
        </button>
      </S.ProfileNav>
      <S.VideoContent>
        {selectedMenu === 'uploaded'
          ? uploadedVideoData?.map(({ id, video_url }) => (
              <VideoItem
                key={id}
                url={video_url}
                id={id}
                setCurrentVideoRef={setCurrentVideoRef}
                currentVideoRef={currentVideoRef}
              />
            ))
          : likedVideoData?.map(({ id, video_url }) => (
              <VideoItem
                key={id}
                url={video_url}
                id={id}
                setCurrentVideoRef={setCurrentVideoRef}
                currentVideoRef={currentVideoRef}
              />
            ))}
      </S.VideoContent>
    </S.Wrap>
  );
};
