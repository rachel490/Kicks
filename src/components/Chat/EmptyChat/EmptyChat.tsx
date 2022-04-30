import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';

export const EmptyChat = () => {
  return (
    <S.EmptyChatContainer>
      <p>이야기를 나눠보세요!</p>
      <button>
        <Link to="/">영상 보러 가기</Link>
      </button>
    </S.EmptyChatContainer>
  );
};
