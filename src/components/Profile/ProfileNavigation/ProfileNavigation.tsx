import React, { useState } from 'react';
import * as S from './styles';
import useSWR from 'swr';
import { MY_LIKES_API, MY_VIDEOS_API } from 'utils/api';
import { fetcher } from 'utils/swr';
import { IVideoListItem } from 'data/types';
import { VideoList } from 'components';

export const ProfileNavigation = () => {
  const { data: likedVideoData } = useSWR<IVideoListItem[]>(
    MY_LIKES_API,
    fetcher
  );
  const { data: uploadedVideoData } = useSWR<IVideoListItem[]>(
    MY_VIDEOS_API,
    fetcher
  );

  const [selectedMenu, setSelectedMenu] = useState<String>('uploaded');

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
      {selectedMenu === 'uploaded' ? (
        <VideoList videos={uploadedVideoData} />
      ) : (
        <VideoList videos={likedVideoData} />
      )}
    </S.Wrap>
  );
};
