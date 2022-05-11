import { Link } from 'react-router-dom';
import * as S from './styles';

interface Props {
  padding: number;
}

export const LoginButton = ({ padding }: Props) => {
  return (
    <S.LoginButtonContainer padding={padding}>
      <Link to="/">로그인 하러가기</Link>
    </S.LoginButtonContainer>
  );
};
