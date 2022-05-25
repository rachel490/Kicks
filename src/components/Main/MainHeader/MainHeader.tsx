import React from 'react';
import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import * as S from './styles';
import { ReactComponent as AlertIcon } from 'assets/svg/alert.svg';
import isLogin from 'utils/isLogin';
import { LoginModalState } from 'recoil/atom';

interface Props {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MainHeader = ({ active, setActive }: Props) => {
  const setIsLoginModalOpen = useSetRecoilState(LoginModalState);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.target as HTMLElement;
    setActive(btn.innerText === '추천');
  };

  const handleNotificationClick = () => {
    if (!isLogin()) {
      setIsLoginModalOpen(true);
    }
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
      <Link to={isLogin() ? '/notice' : '#'}>
        <S.Notification onClick={handleNotificationClick}>
          <AlertIcon className="icon" />
        </S.Notification>
      </Link>
    </S.Header>
  );
};
