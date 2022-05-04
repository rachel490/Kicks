import { ChatList, EmptyChat } from 'components';
import * as S from './styles';
import useSWR from 'swr';
import { CHAT_LIST_API } from 'utils/api';
import { fetcher } from 'utils/swr';

export const ChatListPage = () => {
  const { data: chatData, error } = useSWR(CHAT_LIST_API, fetcher);

  return (
    <S.Wrap>
      <S.PageTitle>채팅</S.PageTitle>
      <S.AdSection>
        <img
          src="https://user-images.githubusercontent.com/68415905/166094331-9f7d2190-2b70-45f7-a5f2-f2c4acf4a3c2.JPG"
          alt="ad"
        />
      </S.AdSection>
      {chatData?.data?.length ? (
        <ChatList chatList={chatData?.data} />
      ) : (
        <EmptyChat />
      )}
    </S.Wrap>
  );
};
