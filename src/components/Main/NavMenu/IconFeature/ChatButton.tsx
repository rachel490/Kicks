import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import * as S from './styles';
import { ReactComponent as ChatIcon } from 'assets/svg/chat.svg';
import isLogin from 'utils/isLogin';
import { LoginModalState } from 'recoil/atom';

export const ChatButton = ({ userId }: { userId: number }) => {
  const setIsLoginModalOpen = useSetRecoilState(LoginModalState);

  const handleClick = () => {
    if (!isLogin()) {
      setIsLoginModalOpen(true);
    }
  };
  return (
    <S.Button onClick={handleClick}>
      <Link to={`/chat/${userId}`}>
        <ChatIcon className="icon" />
      </Link>
    </S.Button>
  );
};
