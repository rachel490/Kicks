import React from 'react';
import * as S from './styles';
import { VscClose } from 'react-icons/vsc';

interface Props {
  history: {
    id: number;
    text: string;
  }[];
  removeHistory: (id: number) => void;
  resetHistory: () => void;
  setShowHistory: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HistoryList = ({
  history,
  setShowHistory,
  removeHistory,
  resetHistory
}: Props) => {
  const handleClose = () => setShowHistory(false);

  return (
    <S.Overlay onClick={handleClose}>
      <S.HistoryListContainer onClick={e => e.stopPropagation()}>
        <S.Title>
          최근검색어
          {history.length !== 0 && (
            <S.Reset onClick={resetHistory}>Clear</S.Reset>
          )}
        </S.Title>
        {history.length === 0 && (
          <S.EmptyHistory>최근 검색어 내역이 없습니다.</S.EmptyHistory>
        )}
        {history.map((keyword, i) => (
          <S.HistoryItem key={keyword.id}>
            {keyword.text}
            <S.RemoveButton onClick={() => removeHistory(keyword.id)}>
              <VscClose />
            </S.RemoveButton>
          </S.HistoryItem>
        ))}
      </S.HistoryListContainer>
    </S.Overlay>
  );
};
