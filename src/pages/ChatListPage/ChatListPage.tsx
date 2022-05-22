import * as S from './styles';
import useSWR from 'swr';
import { AdBanner, ChatList, LoginModal } from 'components';
import { CHAT_LIST_API } from 'utils/api';
import { fetcherWithToken } from 'utils/swr';
import { IChatUser } from 'types';

export const ChatListPage = () => {
  const isLoggedIn =
    !!localStorage.getItem('name') && !!localStorage.getItem('email');

  const { data: chats } = useSWR(CHAT_LIST_API, fetcherWithToken);
  const chatData = chats?.data as IChatUser[];

  return (
    <S.Wrap>
      <S.PageTitle>채팅</S.PageTitle>
      <AdBanner height="100px" />
      {isLoggedIn ? (
        chatData && <ChatList chatList={chatData} />
      ) : (
        <LoginModal />
      )}
    </S.Wrap>
  );
};
