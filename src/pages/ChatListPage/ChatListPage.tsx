import * as S from './styles';
import useSWR from 'swr';
import { AdBanner, ChatList, Loading } from 'components';
import { CHAT_LIST_API } from 'utils/api';
import { fetcher } from 'utils/swr';
import { IChatList } from 'data/types';

export const ChatListPage = () => {
  const { data: chatData, error } = useSWR<IChatList[]>(CHAT_LIST_API, fetcher);

  return (
    <S.Wrap>
      <S.PageTitle>채팅</S.PageTitle>
      <AdBanner height="100px" />
      {chatData ? <ChatList chatList={chatData} /> : <Loading />}
    </S.Wrap>
  );
};
