import * as S from './styles';
import kakaoButtonImage from 'assets/img/kakaoLogin.png';
import { KAKAO_LOGIN_URL } from 'utils/api';

export const KakaoLogin = () => {
  return (
    <>
      <S.KakaoButton href={KAKAO_LOGIN_URL}>
        <img src={kakaoButtonImage} alt="login-btn" />
      </S.KakaoButton>
    </>
  );
};
