import React, { useState } from 'react';
import * as S from './styles';
import { VscClose } from 'react-icons/vsc';
import { GoSearch } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';

interface Props {
  addHistory: (keyword: string) => void;
  showHistory: () => void;
}

export const SearchBar = ({ addHistory, showHistory }: Props) => {
  const [input, setInput] = useState<string>('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSearch = async () => {
    if (input) {
      await addHistory(input);
      navigate('/searched', { state: input });
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
          onClick={showHistory}
          onKeyDown={e => {
            if (e.key === 'Enter') handleSearch();
          }}
        />
        {input && (
          <S.ResetButton onClick={handleReset}>
            <VscClose />
          </S.ResetButton>
        )}
      </S.InputArea>
      <S.SearchButton onClick={() => handleSearch()}>
        <GoSearch />
      </S.SearchButton>
    </S.SearchBarContainer>
  );
};
