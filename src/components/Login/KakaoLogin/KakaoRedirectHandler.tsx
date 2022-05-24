import React, { useEffect } from 'react';
import axios from 'axios';
import { Loading } from 'components';
import { TOKEN_API } from 'utils/api';
import { useNavigate } from 'react-router-dom';

export const KakaoRedirectHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const loginWithKakao = async () => {
      const geJWTToken = async (authorizationCode: string) => {
        await axios
          //서버에 인가코드 전송
          .post(TOKEN_API, {
            code: authorizationCode
          })
          // 서버에서 발행한 자체 JWT 토큰 받기
          .then(res => {
            console.log(res.data);

            if (res.data.message !== '로그인 성공') {
              alert('로그인에 성공하지 못했습니다.');
            }

            const { id, name, email, token } = res.data.data;
            const accessToken = token.accessToken;
            const refreshToken = token.refreshToken;
            // let refreshToken = res.headers['refresh-token'];
            localStorage.setItem('profile-id', id);
            localStorage.setItem('name', name);
            localStorage.setItem('email', email);
            localStorage.setItem('AC_Token', accessToken);
            localStorage.setItem('RF_Token', refreshToken);

            alert('로그인에 성공하였습니다.');
            navigate('/');
          });
      };

      //리다이렉트 페이지에서 인가코드 분리
      const url = new URL(window.location.href);
      const authorizationCode = url.searchParams.get('code');
      console.log('인증 코드', authorizationCode);

      if (authorizationCode) {
        await geJWTToken(authorizationCode);
      }
    };

    loginWithKakao();
  }, [navigate]);

  return <Loading />;
};
