import React, { useState } from 'react';
import { VideoItem } from '../VideoItem/VideoItem';
import { likedVideoData, uploadedVideoData } from 'data';
import * as S from './styles';

export const ProfileNavigation = () => {
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
          ? uploadedVideoData.map(({ id, title, url }) => (
              <VideoItem
                key={id}
                title={title}
                url={url}
                setCurrentVideoRef={setCurrentVideoRef}
                currentVideoRef={currentVideoRef}
              />
            ))
          : likedVideoData.map(({ id, title, url }) => (
              <VideoItem
                key={id}
                title={title}
                url={url}
                setCurrentVideoRef={setCurrentVideoRef}
                currentVideoRef={currentVideoRef}
              />
            ))}
      </S.VideoContent>
    </S.Wrap>
  );
};
