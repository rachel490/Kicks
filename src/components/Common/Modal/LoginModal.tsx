import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import * as S from './styles';
import { LoginModalState } from 'recoil/atom';

export const LoginModal = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useRecoilState(LoginModalState);
  const navigate = useNavigate();

  return (
    <S.Overlay isOpen={isLoginModalOpen}>
      <S.Modal>
        <S.Message>
          로그인 후 이용가능합니다. <br />
          로그인 하시겠습니까?
        </S.Message>
        <S.ButtonContainer>
          <button
            className="yes"
            onClick={() => {
              setIsLoginModalOpen(false);
              navigate('/login');
            }}
          >
            예
          </button>
          <button
            className="no"
            onClick={() => {
              setIsLoginModalOpen(false);
              navigate('/');
            }}
          >
            아니오
          </button>
        </S.ButtonContainer>
      </S.Modal>
    </S.Overlay>
  );
};
