import { AdBanner, HistoryList, SearchBar } from 'components';
import { useEffect, useState } from 'react';
import * as S from './styles';

interface HistoryType {
  id: number;
  text: string;
}

export const SearchPage = () => {
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
      <AdBanner height="150px" />
    </S.Wrap>
  );
};
