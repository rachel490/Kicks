import { useParams } from 'react-router-dom';
import {
  AppContainer,
  Loading,
  MessageBox,
  MessageList,
  PageHeader
} from 'components';
import { useEffect, useState } from 'react';
import { IChat, IChatRoom } from 'data/types';
import { CHAT_ROOM_API } from 'utils/api';
import { fetcher } from 'utils/swr';
import useSWR from 'swr';

export const ChatRoomPage = () => {
  const { id } = useParams();
  const { data, error } = useSWR<IChatRoom>(CHAT_ROOM_API(Number(id)), fetcher);
  const name = data?.with_user?.name || '';
  const profile = data?.with_user?.profile_image_url || '';

  const [toBottom, setToBottom] = useState(false);
  const [messages, setMessages] = useState<IChat[]>([]);

  useEffect(() => {
    if (data) {
      setMessages(data.chats);
    }
  }, [data]);

  const sendMessage = (message: IChat) => {
    setMessages([...messages, message]);
  };

  return (
    <AppContainer>
      <PageHeader title={name} backTo="/chats" />
      {data ? (
        <MessageList
          messages={messages}
          profile={profile}
          toBottom={toBottom}
        />
      ) : (
        <Loading />
      )}
      <MessageBox sendMessage={sendMessage} setToBottom={setToBottom} />
    </AppContainer>
  );
};
