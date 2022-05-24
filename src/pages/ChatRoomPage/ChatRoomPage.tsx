import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContainer, InputForm, MessageList, PageHeader } from 'components';
import { IChatUser, IUserData } from 'types';
import { CHAT_LIST_API, CHAT_ROOM_API, USER_DATA_API } from 'utils/api';
import { fetcherWithToken } from 'utils/swr';
import useSWR from 'swr';
import * as StompJS from '@stomp/stompjs';
import { GET_MESSAGE_API, SEND_MESSAGE_API, WS_CONNECT_API } from 'utils/api';

var client: StompJS.Client | null = null;

interface MessageType {
  userId: number;
  message: string;
}

export const ChatRoomPage = () => {
  const { id } = useParams();
  const [content, setContent] = useState<MessageType[]>([]);

  // User Data
  const { data: chats } = useSWR(CHAT_LIST_API, fetcherWithToken);
  const chatData = chats?.data as IChatUser[];
  const room = chatData?.filter(chat => chat.id === Number(id))[0];
  const iamBuyer = localStorage.getItem('name') === room?.buyerName;
  const userId = iamBuyer ? room?.sellerId : room?.buyerId;
  const { data: user } = useSWR(USER_DATA_API(userId), fetcherWithToken);
  const userData = user?.data as IUserData;

  const { mutate } = useSWR(CHAT_ROOM_API(room?.id), fetcherWithToken);

  const connect = () => {
    client = new StompJS.Client({
      brokerURL: WS_CONNECT_API,
      // connectHeaders: {
      //   Authorization: `Bearer ${localStorage.getItem('AC_Token')}`
      // },
      debug: function (str) {
        console.log(str);
      },
      onConnect: () => {
        getMessage();
        mutate();
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

  const getMessage = () => {
    if (client != null && client.connected) {
      client.subscribe(GET_MESSAGE_API(id as string), data => {
        const newMessage = JSON.parse(data.body) as MessageType;
        setContent([...content, newMessage]);
        console.log(content);
      });
    }
  };

  const sendMessage = (text: string) => {
    if (client != null) {
      if (!client.connected) return;
      const message = { userId: 36, message: text };
      client.publish({
        destination: SEND_MESSAGE_API(id as string),
        body: JSON.stringify(message)
        // headers: {
        //   Authorization: `Bearer ${localStorage.getItem('AC_Token')}`
        // }
      });
    }
  };

  useEffect(() => {
    connect();
    return () => disConnect();
  });

  return (
    <AppContainer>
      <PageHeader title={userData?.name} backTo="/chats" />
      <MessageList roomId={room?.id} profile={userData?.profile_image_url} />
      <InputForm sendMessage={sendMessage} />
    </AppContainer>
  );
};
