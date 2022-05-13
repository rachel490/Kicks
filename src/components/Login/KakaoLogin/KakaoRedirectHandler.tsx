import React, { useEffect } from 'react';
import { Loading } from 'components';
import axios from 'axios';

export const KakaoRedirectHandler = () => {
  useEffect(() => {
    const loginWithKakao = async () => {
      //리다이렉트 페이지에서 인가코드 분리
      const url = new URL(window.location.href);
      const authorizationCode = url.searchParams.get('code');
      // console.log('인증 코드', authorizationCode);
      if (authorizationCode) {
        await geJWTToken(authorizationCode);
      }
    };

    loginWithKakao();

    const geJWTToken = async (authorizationCode: any) => {
      let tokenData = await axios
        //서버에 인가코드 전송
        .post('http://localhost:4000/users/kakao', {
          authorizationCode
        })
        // 서버에서 발행한 자체 JWT 토큰 받기
        .then(res => {
          // console.log(res.data);
          let accessToken = res.data.accessToken;
          let refreshToken = res.headers['refresh-token'];
          localStorage.setItem('CC_Token', accessToken);
          localStorage.setItem('RF_Token', refreshToken);
        });
    };
  }, []);
  
  return <Loading />;
};
