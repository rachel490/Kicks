import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { AppContainer, InputForm, MessageList, PageHeader } from 'components';
import { IChat, IUserData } from 'types';
import { CHAT_ROOM_API, USER_DATA_API } from 'utils/api';
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
  const { state } = useLocation() as { state: number };
  const [otherId, setOtherId] = useState(state);
  const [content, setContent] = useState<MessageType[]>([]);

  useEffect(() => {
    setOtherId(state);
  }, [state]);

  const { data: messages, mutate } = useSWR(
    CHAT_ROOM_API(id || ''),
    fetcherWithToken
  );
  const { data: other } = useSWR(USER_DATA_API(otherId), fetcherWithToken);
  const messageData = messages?.data as IChat[];
  const otherData = other?.data as IUserData;
  console.log(messageData);

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
      <PageHeader title={otherData?.name} backTo="/chats" />
      <MessageList
        profile={otherData?.profile_image_url}
        messageData={messageData}
      />
      <InputForm sendMessage={sendMessage} />
    </AppContainer>
  );
};
