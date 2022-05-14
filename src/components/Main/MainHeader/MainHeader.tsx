import React from 'react';
import * as S from './styles';
import { ReactComponent as AlertIcon } from 'assets/svg/alert.svg';

interface Props {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MainHeader = ({ active, setActive }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.target as HTMLElement;
    setActive(btn.innerText === '추천');
  };

  return (
    <S.Header>
      <S.Category>
        <button onClick={handleClick} className={active ? '' : 'active'}>
          팔로잉
        </button>
        <button onClick={handleClick} className={active ? 'active' : ''}>
          추천
        </button>
      </S.Category>
      <S.Notification>
        <AlertIcon className="icon" />
      </S.Notification>
    </S.Header>
  );
};
