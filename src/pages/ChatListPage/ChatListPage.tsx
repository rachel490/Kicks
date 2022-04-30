import { ChatList, EmptyChat } from 'components';
import * as S from './styles';

const chatData = [
  {
    id: 1,
    with_user: {
      name: 'Joy',
      profile_image_url:
        'https://user-images.githubusercontent.com/68415905/166093018-2819a713-a7df-4703-bcd5-29b60507bdbf.jpg'
    },
    chats: ['안녕하세요', '구매가능한가요?']
  },
  {
    id: 2,
    with_user: {
      name: 'Rachel',
      profile_image_url:
        'https://user-images.githubusercontent.com/68415905/166093018-2819a713-a7df-4703-bcd5-29b60507bdbf.jpg'
    },
    chats: ['안녕하세요']
  }
];

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
