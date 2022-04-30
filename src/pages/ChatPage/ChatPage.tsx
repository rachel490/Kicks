import { EmptyChat } from 'components';
import * as S from './styles';

export const ChatPage = () => {
  return (
    <S.Wrap>
      <S.PageTitle>채팅</S.PageTitle>
      <S.AdSection>
        <img
          src="https://user-images.githubusercontent.com/68415905/166091122-03b51c11-4c74-4bf8-9ca8-79c2677f851b.png"
          alt="ad"
        />
      </S.AdSection>
      <EmptyChat />
    </S.Wrap>
  );
};
