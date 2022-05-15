import * as S from './styles';
import useSWR from 'swr';
import SockJS from 'sockjs-client';
import * as StompJS from '@stomp/stompjs';
import { AdBanner, ChatList, LoginModal } from 'components';
import { CHAT_LIST_API, WS_CONNECT_API } from 'utils/api';
import { fetcherWithToken } from 'utils/swr';
import { useEffect } from 'react';

var client: StompJS.Client | null = null;

export const ChatListPage = () => {
  const isLoggedIn =
    !!localStorage.getItem('name') && !!localStorage.getItem('email');

  const { data: chatData } = useSWR(CHAT_LIST_API, fetcherWithToken);

  const connect = () => {
    client = new StompJS.Client({
      brokerURL: WS_CONNECT_API,
      // connectHeaders: {
      //   login: 'user',
      //   passcode: 'password',
      // },
      debug: function (str) {
        console.log(str);
      },
      onConnect: () => {
        if (chatData) {
          console.log(chatData);
        }
      },
      reconnectDelay: 5000, //자동 재 연결
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000
    });

    client.activate();
  };

  const disConnect = () => {
    if (client != null) {
      if (client.connected) client.deactivate();
    }
  };

  useEffect(() => {
    connect();
    // return () => disConnect();
  }, []);

  return (
    <S.Wrap>
      <S.PageTitle>채팅</S.PageTitle>
      <AdBanner height="100px" />
      {isLoggedIn ? (
        chatData && <ChatList chatList={chatData.data} />
      ) : (
        <LoginModal />
      )}
    </S.Wrap>
  );
};
