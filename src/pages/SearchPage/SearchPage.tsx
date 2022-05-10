import { AdBanner, HistoryList, SearchBar } from 'components';
import { useEffect, useState } from 'react';
import * as S from './styles';

export const SearchPage = () => {
  const [history, setHistory] = useState<string[]>(
    JSON.parse(localStorage.getItem('search-history') || '[]')
  );

  const handleAddHistory = (searched: string) => {
    setHistory((prev: string[]) => {
      if (prev.length > 4) prev.pop();
      return [searched, ...prev];
    });
  };

  useEffect(() => {
    localStorage.setItem('search-history', JSON.stringify(history));
    console.log(history, '검색어');
  }, [history]);

  return (
    <S.Wrap>
      <SearchBar addHistory={handleAddHistory} />
      <HistoryList history={history} />
      <AdBanner height="150px" />
    </S.Wrap>
  );
};
