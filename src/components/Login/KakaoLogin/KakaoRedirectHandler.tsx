import React, { useEffect } from 'react';
import axios from 'axios';
import { Loading } from 'components';
import { TOKEN_API } from 'utils/api';

export const KakaoRedirectHandler = () => {
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
            // console.log(res.data);
            const { name, email, token } = res.data.data;
            const accessToken = token.accessToken;
            const refreshToken = token.refreshToken;
            // let refreshToken = res.headers['refresh-token'];
            localStorage.setItem('name', name);
            localStorage.setItem('email', email);
            localStorage.setItem('AC_Token', accessToken);
            localStorage.setItem('RF_Token', refreshToken);
          });
      };

      //리다이렉트 페이지에서 인가코드 분리
      const url = new URL(window.location.href);
      const authorizationCode = url.searchParams.get('code');
      // console.log('인증 코드', authorizationCode);

      if (authorizationCode) {
        await geJWTToken(authorizationCode);
      }
    };

    loginWithKakao();
  }, []);

  return <Loading />;
};
