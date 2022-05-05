import * as S from './styles';
import useSWR from 'swr';
import { ChatList, Loading } from 'components';
import { CHAT_LIST_API } from 'utils/api';
import { fetcher } from 'utils/swr';
import { IChatList } from 'data/types';

export const ChatListPage = () => {
  const { data: chatData, error } = useSWR<IChatList[]>(CHAT_LIST_API, fetcher);

  return (
    <S.Wrap>
      <S.PageTitle>채팅</S.PageTitle>
      <S.AdSection>
        <img
          src="https://user-images.githubusercontent.com/68415905/166094331-9f7d2190-2b70-45f7-a5f2-f2c4acf4a3c2.JPG"
          alt="ad"
        />
      </S.AdSection>
      {chatData ? <ChatList chatList={chatData} /> : <Loading />}
    </S.Wrap>
  );
};
