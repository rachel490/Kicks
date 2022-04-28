import React, { useState } from 'react';
import * as S from './styles';

export const ProfileNavigation = () => {
  const [selectedMenu, setSelectedMenu] = useState<String>('videos');

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget.dataset;
    value && setSelectedMenu(value);
  };

  return (
    <S.Wrap>
      <S.ProfileNav>
        <button
          className={`${selectedMenu === 'videos' ? 'active' : ''}`}
          data-value="videos"
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
    </S.Wrap>
  );
};
