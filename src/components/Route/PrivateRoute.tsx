import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import isLogin from 'utils/isLogin';
import { LoginModalState } from 'recoil/atom';

export const PrivateRoute = () => {
  const setIsLoginModalOpen = useSetRecoilState(LoginModalState);

  useEffect(() => {
    if (!isLogin()) {
      setIsLoginModalOpen(true);
    }
  }, []);

  return <Outlet />;
};
