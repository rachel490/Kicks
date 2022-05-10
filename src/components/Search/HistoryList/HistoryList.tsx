import React from 'react';
import * as S from './styles';

interface Props {
  history: string[];
}

export const HistoryList = ({ history }: Props) => {
  return (
    <S.Overlay>
      <S.HistoryListContainer>
        <h3>최근검색어</h3>
        {history.map(keyword => (
          <li key={keyword}>{keyword}</li>
        ))}
      </S.HistoryListContainer>
    </S.Overlay>
  );
};
