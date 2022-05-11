import React, { useEffect, useState } from 'react';
import { fetcher } from 'utils/swr';
import { AdBanner, HistoryList, HorizonVideoList, SearchBar } from 'components';
import useSWR from 'swr';
import * as S from './styles';
import { IVideo } from 'data/types';
import { POPULAR_VIDEO_API, RECOMMENDED_VIDEO_API } from 'utils/api';

interface HistoryType {
  id: number;
  text: string;
}

export const SearchPage = () => {
  const { data: popularVideos } = useSWR<IVideo[]>(POPULAR_VIDEO_API, fetcher);
  const { data: recommendedVideos } = useSWR<IVideo[]>(
    RECOMMENDED_VIDEO_API,
    fetcher
  );

  const [showHistory, setShowHistory] = useState(false);
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

  useEffect(() => {
    localStorage.setItem('search-history', JSON.stringify(history));
  }, [history]);

  return (
    <S.Wrap>
      <SearchBar
        addHistory={handleAddHistory}
        setShowHistory={setShowHistory}
      />
      {showHistory && (
        <HistoryList
          history={history}
          removeHistory={handleRemoveHistory}
          resetHistory={handleReset}
          setShowHistory={setShowHistory}
        />
      )}
      <AdBanner height="110px" />
      <HorizonVideoList title="추천" videos={recommendedVideos} />
      <HorizonVideoList title="인기" videos={popularVideos} />
    </S.Wrap>
  );
};
