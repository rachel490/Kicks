import React from 'react';
import * as S from './styles';
import { FaHeart, FaShare } from 'react-icons/fa';
import { BsChatDotsFill } from 'react-icons/bs';

export const PlayerMenu = ({
  profile_image_url
}: {
  profile_image_url: string;
}) => {
  return (
    <S.Wrap>
      <S.Nav>
        <S.Button>
          <img src={profile_image_url} alt="profile" />
        </S.Button>
        <S.Button>
          <FaHeart className="icon" />
        </S.Button>
        <S.Button>
          <BsChatDotsFill className="icon" />
        </S.Button>
        <S.Button>
          <FaShare className="icon" />
        </S.Button>
      </S.Nav>
    </S.Wrap>
  );
};
