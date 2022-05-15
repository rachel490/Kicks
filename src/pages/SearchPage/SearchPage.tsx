import React, { useEffect, useState } from 'react';
import { fetcher } from 'utils/swr';
import { AdBanner, HistoryList, HorizonVideoList, SearchBar } from 'components';
import useSWR from 'swr';
import * as S from './styles';
import { IVideoListItem } from 'data/types';
import { BEST_VIDEO_API } from 'utils/api';
import { HistoryType } from './types';

export const SearchPage = () => {
  const { data: popularVideos } = useSWR<IVideoListItem[]>(
    BEST_VIDEO_API('hits'),
    fetcher
  );
  const { data: recommendedVideos } = useSWR<IVideoListItem[]>(
    BEST_VIDEO_API('likes'),
    fetcher
  );

  const [isOpened, setIsOpend] = useState(false);
  const [history, setHistory] = useState<HistoryType[]>(
    JSON.parse(localStorage.getItem('search-history') || '[]')
  );

  const handleAddHistory = (text: string) => {
    setHistory((prev: HistoryType[]) => {
      if (prev.length > 4) prev.pop();
      return [{ id: Date.now(), text: text }, ...prev];
    });
  };

  const handleRemoveHistory = (id: number) => {
    setHistory(history.filter(keyword => keyword.id !== id));
  };

  const handleReset = () => setHistory([]);
  const showHistory = () => setIsOpend(true);
  const hideHistory = () => setIsOpend(false);

  useEffect(() => {
    localStorage.setItem('search-history', JSON.stringify(history));
  }, [history]);

  return (
    <S.Wrap>
      <SearchBar showHistory={showHistory} addHistory={handleAddHistory} />
      {isOpened && (
        <HistoryList
          history={history}
          hideHistory={hideHistory}
          removeHistory={handleRemoveHistory}
          resetHistory={handleReset}
        />
      )}
      <AdBanner height="140px" />
      <HorizonVideoList title="조회수 Best10" videos={recommendedVideos} />
      <HorizonVideoList title="좋아요 Best10" videos={popularVideos} />
    </S.Wrap>
  );
};
