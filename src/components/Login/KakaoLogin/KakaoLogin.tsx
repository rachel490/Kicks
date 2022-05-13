import * as S from './styles';
import kakaoButtonImage from 'assets/img/kakaoLogin.png';

const REST_API_KEY = 'd5920e912464567168de709625674543';
const REDIRECT_URI = 'http://localhost:3000/oauth/callback';
const URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

export const KakaoLogin = () => {
  // const handleClick = () => {
  //   const fetchData = async () => {
  //     const response = await fetch(
  //       'https://bb20-175-203-19-50.jp.ngrok.io/oauth2/authorization/kakao'
  //     );
  //     const data = await response.json();
  //     console.log('data', data);
  //     // localStorage.setItem('token', data);
  //   };

  //   fetchData();
  // };

  return (
    <>
      <S.KakaoButton href={URL}>
        <img src={kakaoButtonImage} alt="login-btn" />
      </S.KakaoButton>
    </>
  );
};
