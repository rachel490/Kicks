import React from 'react';
import * as S from './styles';
import { FaHeart, FaShare } from 'react-icons/fa';
import { BsChatDotsFill } from 'react-icons/bs';

export const PlayerMenu = () => {
  return (
    <S.Wrap>
      <S.Nav>
        <S.Button>
          <img
            src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
            alt="profile"
          />
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
