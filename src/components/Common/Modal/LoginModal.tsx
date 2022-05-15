import { useNavigate } from 'react-router-dom';
import * as S from './styles';

export const LoginModal = () => {
  const navigate = useNavigate();

  return (
    <S.Overlay>
      <S.Modal>
        <S.Message>
          로그인 후 이용가능합니다. <br />
          로그인 하시겠습니까?
        </S.Message>
        <S.ButtonContainer>
          <button className="yes" onClick={() => navigate('/')}>
            예
          </button>
          <button className="no" onClick={() => navigate('/')}>
            아니오
          </button>
        </S.ButtonContainer>
      </S.Modal>
    </S.Overlay>
  );
};
