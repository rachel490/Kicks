import { useNavigate } from 'react-router-dom';
import * as S from './styles';

interface Prop {
  message: string;
  redirectTo: string;
  isOpen: boolean;
}

export const MessageModal = ({ message, redirectTo, isOpen }: Prop) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(redirectTo);
  };

  return (
    <S.Overlay isOpen={isOpen}>
      <S.Modal>
        <S.Message>{message}</S.Message>
        <S.ButtonContainer>
          <button className="yes" onClick={handleClick}>
            확인
          </button>
        </S.ButtonContainer>
      </S.Modal>
    </S.Overlay>
  );
};
