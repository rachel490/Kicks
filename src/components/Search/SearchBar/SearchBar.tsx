import React, { useState } from 'react';
import * as S from './styles';

interface Props {
  addHistory: (keyword: string) => void;
}

export const SearchBar = ({ addHistory }: Props) => {
  const [input, setInput] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSearch = () => {
    if (input) {
      addHistory(input);
      setInput('');
    }
  };

  const handleReset = () => setInput('');

  return (
    <S.SearchBarContainer>
      <S.InputArea>
        <S.Input
          autoFocus
          placeholder="검색어를 입력해주세요."
          value={input}
          onChange={handleChange}
          onKeyDown={e => {
            if (e.key === 'Enter') handleSearch();
          }}
        />
        {input && <S.ResetButton onClick={handleReset}>x</S.ResetButton>}
      </S.InputArea>
      <S.SearchButton onClick={() => handleSearch()}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/500px-Search_Icon.svg.png"
          alt="search-icon"
        />
      </S.SearchButton>
    </S.SearchBarContainer>
  );
};
