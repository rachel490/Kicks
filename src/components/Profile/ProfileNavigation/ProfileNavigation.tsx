import React, { useState } from 'react';
import * as S from './styles';
import { MY_LIKES_API, MY_VIDEOS_API } from 'utils/api';
import { VideoList } from 'components';

export const ProfileNavigation = () => {
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
        <VideoList api={MY_VIDEOS_API} />
      ) : (
        <VideoList api={MY_LIKES_API} />
      )}
    </S.Wrap>
  );
};
