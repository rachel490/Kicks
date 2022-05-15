import { KakaoLogin, PageHeader } from 'components';
import * as S from './styles';

export const LoginPage = () => {
  return (
    <>
      <PageHeader backTo="/" title="카카오 로그인" />
      <S.Wrap>
        <KakaoLogin />
      </S.Wrap>
    </>
  );
};
