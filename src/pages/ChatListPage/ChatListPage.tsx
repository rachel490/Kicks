import { ChatList, EmptyChat } from 'components';
import { chatData } from 'data';
import * as S from './styles';

export const ChatListPage = () => {
  return (
    <S.Wrap>
      <S.PageTitle>채팅</S.PageTitle>
      <S.AdSection>
        <img
          src="https://user-images.githubusercontent.com/68415905/166094331-9f7d2190-2b70-45f7-a5f2-f2c4acf4a3c2.JPG"
          alt="ad"
        />
      </S.AdSection>
      {chatData.length ? <ChatList chatList={chatData} /> : <EmptyChat />}
    </S.Wrap>
  );
};
