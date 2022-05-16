import React from 'react';
import * as S from './styles';
import { VscClose } from 'react-icons/vsc';
import { HistoryType } from 'pages/SearchPage/types';
import { useNavigate } from 'react-router-dom';

interface Props {
  history: HistoryType[];
  hideHistory: () => void;
  removeHistory: (id: number) => void;
  resetHistory: () => void;
}

export const HistoryList = ({
  history,
  hideHistory,
  removeHistory,
  resetHistory
}: Props) => {
  const navigate = useNavigate();
  const handleNavigate = (text: string) =>
    navigate('/search_result', { state: text });

  return (
    <S.Overlay onClick={hideHistory}>
      <S.HistoryListContainer onClick={e => e.stopPropagation()}>
        <S.Title>
          최근검색어
          {history.length !== 0 && (
            <S.Reset onClick={resetHistory}>Clear</S.Reset>
          )}
        </S.Title>

        {history.length === 0 ? (
          <S.EmptyHistory>최근 검색어 내역이 없습니다.</S.EmptyHistory>
        ) : (
          <S.HistoryContent>
            {history.map((keyword, i) => (
              <li key={keyword.id} onClick={() => handleNavigate(keyword.text)}>
                <S.Keyword>{keyword.text}</S.Keyword>
                <S.RemoveButton
                  onClick={e => {
                    e.stopPropagation();
                    removeHistory(keyword.id);
                  }}
                >
                  <VscClose />
                </S.RemoveButton>
              </li>
            ))}
          </S.HistoryContent>
        )}
      </S.HistoryListContainer>
    </S.Overlay>
  );
};
